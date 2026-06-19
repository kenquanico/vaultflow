"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id="download"
      ref={ref}
      className="container py-12 md:py-16"
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-card/80 px-6 py-16 text-center shadow-card-glow md:px-16 md:py-24">
        <div className="absolute left-1/2 top-0 h-56 w-3/4 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-display text-heading-xl text-foreground text-balance">
            Our powerful analytics
            <br />
            provides invaluable insights.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-body-md text-muted-foreground">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly Analytics Dashboard, and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>
          <Button href="#" variant="outline" className="mt-9">
            Download the app
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
