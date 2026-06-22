"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DatabaseZap, LineChart, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: DatabaseZap,
    eyebrow: "01",
    title: "Connect every source",
    copy: "Sync warehouse tables, billing data, product events, and CRM updates into one governed metric graph.",
  },
  {
    icon: LineChart,
    eyebrow: "02",
    title: "Model business logic",
    copy: "Define health, expansion, and retention signals once, then reuse them across dashboards and workflows.",
  },
  {
    icon: Workflow,
    eyebrow: "03",
    title: "Automate the operating cadence",
    copy: "Route alerts, weekly scorecards, and executive summaries to the right teams before decisions stall.",
  },
  {
    icon: Sparkles,
    eyebrow: "04",
    title: "Improve with every action",
    copy: "Close the loop by measuring which plays move revenue, adoption, and customer outcomes.",
  },
];

export function WorkflowSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="workflow" className="container py-16 md:py-24" aria-labelledby="workflow-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-caption font-semibold uppercase tracking-[0.18em] text-primary-glow">
          Workflow
        </p>
        <h2 id="workflow-heading" className="mt-4 font-display text-heading-lg text-foreground md:text-heading-xl">
          From raw data to revenue motion in four steps.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body-md text-muted-foreground">
          Vaultflow connects the systems your teams already use, then turns
          those signals into repeatable workflows leaders can trust.
        </p>
      </Reveal>

      <div className="relative mt-12 grid gap-5 md:grid-cols-4">
        <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block" />
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <motion.article
                className="group relative h-full rounded-2xl border border-white/10 bg-card/70 p-6 shadow-inner-line transition-all duration-300 hover:border-primary/60 hover:bg-white/[0.055]"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-caption font-semibold text-vault-lavender">{step.eyebrow}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-primary/80 to-accent-pink/80 text-white shadow-[0_0_26px_hsl(var(--primary)/0.25)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-4 text-body-sm text-muted-foreground">{step.copy}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
