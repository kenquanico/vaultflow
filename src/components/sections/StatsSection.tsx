"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Gauge, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  {
    icon: TrendingUp,
    value: 18.4,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "pipeline influenced",
    detail: "Average expansion opportunity surfaced for enterprise teams in their first quarter.",
  },
  {
    icon: Gauge,
    value: 7.2,
    suffix: " hrs",
    decimals: 1,
    label: "saved weekly",
    detail: "Analysts reclaim time by automating recurring revenue, usage, and cohort reporting.",
  },
  {
    icon: Users,
    value: 94,
    suffix: "%",
    decimals: 0,
    label: "team adoption",
    detail: "Operators, leaders, and GTM teams work from the same metric layer.",
  },
];

interface CountUpProps {
  value: number;
  inView: boolean;
  decimals: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ value, inView, decimals, prefix = "", suffix = "" }: CountUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [decimals, inView, shouldReduceMotion, value]);

  return (
    <>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </>
  );
}

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const statsInView = useInView(statsRef, {
    once: true,
    margin: "0px 0px -18% 0px",
  });

  return (
    <section className="container py-14 md:py-20" aria-labelledby="outcomes-heading">
      <Reveal className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-inner-line backdrop-blur-xl md:grid-cols-[0.85fr_1.15fr] md:p-10">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.18em] text-primary-glow">
            Outcomes
          </p>
          <h2 id="outcomes-heading" className="mt-4 max-w-lg font-display text-heading-lg text-foreground">
            Operational clarity that compounds every week.
          </h2>
          <p className="mt-5 text-body-md text-muted-foreground">
            Vaultflow helps teams move from reactive reporting to a reliable
            operating rhythm: catch risk, forecast capacity, and measure the
            impact of every customer motion.
          </p>
        </div>

        <div ref={statsRef} className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                className="group rounded-xl border border-white/10 bg-vault-black/45 p-5 transition-all duration-300 hover:border-primary/60 hover:bg-white/[0.055]"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div className="mb-8 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary-glow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-3xl font-semibold text-foreground">
                  <CountUp
                    value={stat.value}
                    inView={statsInView}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-sm font-semibold text-vault-lavender">{stat.label}</p>
                <p className="mt-4 text-caption text-muted-foreground">{stat.detail}</p>
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
