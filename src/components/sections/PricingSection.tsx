"use client";

import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Launch",
    price: "$49",
    cadence: "per seat / month",
    description: "For focused teams building a shared operating dashboard.",
    features: ["5 connected sources", "Live dashboards", "Weekly scorecards", "Email support"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Scale",
    price: "$149",
    cadence: "per seat / month",
    description: "For revenue teams automating decisions across every account.",
    features: ["Unlimited sources", "Signal scoring", "Workflow automation", "Priority onboarding"],
    cta: "Choose Scale",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual partnership",
    description: "For organizations with advanced governance and data needs.",
    features: ["Dedicated workspace", "Custom security review", "SAML and SCIM", "Executive success plan"],
    cta: "Talk to sales",
    featured: false,
  },
];

export function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="container py-16 md:py-24" aria-labelledby="pricing-heading">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-caption font-semibold uppercase tracking-[0.18em] text-primary-glow">
          Pricing
        </p>
        <h2 id="pricing-heading" className="mt-4 font-display text-heading-lg text-foreground md:text-heading-xl">
          Plans that grow with your operating rhythm.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body-md text-muted-foreground">
          Start with the dashboards you need today, then unlock automation,
          governance, and enterprise controls as your team scales.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08}>
            <motion.article
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <Card
                className={cn(
                  "relative h-full overflow-hidden",
                  plan.featured
                    ? "border-primary/70 bg-primary/10 shadow-card-glow"
                    : "hover:border-primary/60 hover:shadow-card-glow",
                )}
              >
                {plan.featured ? (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-pill border border-primary/40 bg-primary/20 px-3 py-1 text-caption font-semibold text-primary-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Popular
                  </div>
                ) : null}
                <CardContent className="flex min-h-[480px] flex-col">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-4 text-body-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-8">
                      <span className="font-display text-4xl font-semibold text-foreground">{plan.price}</span>
                      <span className="ml-2 text-body-sm text-muted-foreground">{plan.cadence}</span>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-body-sm text-vault-lavender">
                        <Check className="h-4 w-4 text-primary-glow" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={plan.featured ? "primary" : "outline"}
                    className="mt-auto"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
