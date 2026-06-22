"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const heroCopy = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const getCopyTransition = (delay = 0): Transition =>
    shouldReduceMotion
      ? { duration: 0.01, delay: 0 }
      : { duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] };
  const visualTransition: Transition = shouldReduceMotion
    ? { duration: 0.01, delay: 0 }
    : { type: "spring", stiffness: 190, damping: 22, mass: 0.9, delay: 0.3 };

  return (
    <section className="relative isolate min-h-[722px] overflow-hidden bg-[#0B011E] px-5 pb-72 pt-32 md:pb-80 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 top-16 -z-20 bg-[url('/hero-stack.svg')] bg-cover bg-top bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/0 to-background/40"
      />

      <motion.div
        className="container flex flex-col items-center text-center"
      >
        <div>
          <Badge>Real-time revenue intelligence for high-growth teams</Badge>
        </div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroCopy}
          transition={getCopyTransition(0)}
          className="mt-7 max-w-5xl bg-text-gradient bg-clip-text font-display text-heading-xl text-transparent sm:text-display-lg lg:text-display-xl"
        >
          Turn every metric into a confident decision.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={heroCopy}
          transition={getCopyTransition(0.1)}
          className="mt-7 max-w-2xl text-body-md text-muted-foreground md:text-body-lg"
        >
          Vaultflow unifies product, revenue, and customer data into one
          executive-grade workspace so teams can forecast, act, and grow without
          waiting on another dashboard request.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroCopy}
          transition={getCopyTransition(0.2)}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#pricing" className="group">
            Start free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href="#contact" variant="outline">
            <PlayCircle className="mr-2 h-4 w-4" />
            Book a demo
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroCopy}
          transition={getCopyTransition(0.24)}
          className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-3 text-left sm:text-center"
        >
          {[
            ["42%", "faster reporting"],
            ["3.8x", "more forecast coverage"],
            ["99.95%", "platform uptime"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 shadow-inner-line backdrop-blur">
              <p className="font-display text-xl font-semibold text-foreground">{value}</p>
              <p className="mt-1 text-caption text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.96 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          className="relative mt-14 w-full max-w-[900px] rounded-2xl shadow-hero-glow md:mt-18"
          whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
          transition={visualTransition}
        >
          <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl" />
          <Image
            src="/dashboard-mockup.svg"
            alt="Vaultflow analytics dashboard showing visits, user activity, and charts"
            width={1100}
            height={540}
            priority
            className="relative h-auto w-full rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
