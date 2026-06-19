"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial px-5 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_55%_0%,hsl(var(--accent-pink)/0.72),transparent_20%),radial-gradient(circle_at_25%_0%,hsl(var(--primary)/0.42),transparent_38%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-44 w-56 -translate-x-1/2 animate-float-slow rounded-b-[60%] bg-accent-pink/65 blur-3xl" />
      <div className="absolute inset-0 -z-10 animate-pulse-grid bg-[linear-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

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
          <Badge>Real-time revenue intelligence for high-growth teams</Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-7 max-w-5xl bg-text-gradient bg-clip-text font-display text-heading-xl text-transparent sm:text-display-lg lg:text-display-xl"
        >
          Turn every metric into a confident decision.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-body-md text-muted-foreground md:text-body-lg"
        >
          Vaultflow unifies product, revenue, and customer data into one
          executive-grade workspace so teams can forecast, act, and grow without
          waiting on another dashboard request.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
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
          variants={fadeUp}
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
          variants={fadeUp}
          className="relative mt-14 w-full max-w-[900px] rounded-2xl shadow-hero-glow md:mt-18"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
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
