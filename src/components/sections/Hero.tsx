"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial px-5 pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[radial-gradient(circle_at_55%_0%,hsl(var(--accent-pink)/0.72),transparent_20%),radial-gradient(circle_at_25%_0%,hsl(var(--primary)/0.42),transparent_38%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-44 w-56 -translate-x-1/2 rounded-b-[60%] bg-accent-pink/65 blur-3xl" />

      <motion.div
        className="container flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div variants={fadeUp}>
          <Badge>We just raised $20M in Series B. Learn more</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-7 max-w-5xl bg-text-gradient bg-clip-text font-display text-display-xl text-transparent"
        >
          Modern analytics
          <br />
          for the modern world
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-body-md text-muted-foreground md:text-body-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#download">Download the app</Button>
          <Button href="#contact" variant="outline">
            Talk to an expert
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative mt-20 w-full max-w-[860px] rounded-2xl shadow-hero-glow"
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
