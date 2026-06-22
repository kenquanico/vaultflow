"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -18% 0px" });

  return (
    <motion.section
      id="get-started"
      ref={ref}
      className="container py-12 md:py-16"
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 34 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-card/80 px-6 py-16 text-center shadow-card-glow md:px-16 md:py-24">
        <div className="absolute left-1/2 top-0 h-56 w-3/4 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-heading-lg text-foreground text-balance md:text-heading-xl">
            Ready to run your business from live signals?
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-body-md text-muted-foreground">
            Bring product, revenue, and customer data into one workspace your
            teams can use every day. We will help you launch the first operating
            dashboard in days, not months.
          </p>
          <Button href="#contact" variant="outline" className="cta-soft-glow mt-9">
            Talk to an expert
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
