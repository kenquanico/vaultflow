"use client";

import { useRef } from "react";
import { ArrowUpRight, BarChart3, Coins } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
    link: "View dashboard",
    glow: "from-primary to-vault-purple",
  },
  {
    icon: Coins,
    title: "Digital Credit Tokens",
    description:
      "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
    link: "View tokens",
    glow: "from-accent to-accent-pink",
  },
];

interface FeatureCardProps {
  feature: (typeof features)[number];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="group h-full hover:border-primary/70 hover:shadow-card-glow">
        <CardContent className="flex min-h-[320px] flex-col items-start justify-between">
          <div>
            <div
              className={cn(
                "mb-10 inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br shadow-[0_0_30px_hsl(var(--primary)/0.45)]",
                feature.glow,
              )}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display text-heading-md text-foreground">
              {feature.title}
            </h3>
            <p className="mt-4 text-body-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/40 underline-offset-4 transition-colors group-hover:text-primary-glow"
          >
            {feature.link}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeatureCards() {
  return (
    <section className="container grid gap-6 py-12 md:grid-cols-2 md:py-16">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} index={index} />
      ))}
    </section>
  );
}
