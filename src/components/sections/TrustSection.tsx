"use client";

import { CheckCircle2, Globe2, LockKeyhole, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Card, CardContent } from "@/components/ui/Card";

const testimonials = [
  {
    quote:
      "Vaultflow gave our revenue leaders the first shared view of expansion health that everyone actually trusts.",
    name: "Maya Chen",
    role: "VP Revenue Operations, Lattice",
  },
  {
    quote:
      "We replaced three weekly reporting rituals with live scorecards and automated follow-up plays.",
    name: "Jon Bell",
    role: "Director of Analytics, Zendesk",
  },
  {
    quote:
      "The governance layer matters. Our teams can move quickly without losing track of where a metric came from.",
    name: "Priya Raman",
    role: "Head of Data, Rakuten",
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "SOC 2 Type II ready controls" },
  { icon: LockKeyhole, label: "Role-based access and audit history" },
  { icon: Globe2, label: "Region-aware data controls" },
  { icon: CheckCircle2, label: "Metric lineage and approvals" },
];

export function TrustSection() {
  return (
    <section id="customers" className="container py-16 md:py-24" aria-labelledby="customers-heading">
      <Reveal className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.18em] text-primary-glow">
            Customers
          </p>
          <h2 id="customers-heading" className="mt-4 font-display text-heading-lg text-foreground md:text-heading-xl">
            Trusted by teams who cannot afford fuzzy numbers.
          </h2>
        </div>
        <p className="text-body-md text-muted-foreground">
          From early-stage operators to global revenue organizations, Vaultflow
          gives every team the same confident source of truth.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08}>
            <Card className="group h-full hover:-translate-y-1 hover:border-primary/60 hover:shadow-card-glow">
              <CardContent className="flex h-full flex-col justify-between">
                <p className="text-body-md text-foreground text-pretty">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-10">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="mt-1 text-body-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal id="trust" className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-inner-line backdrop-blur-xl md:p-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-vault-black/35 p-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary-glow">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-body-sm font-medium text-vault-lavender">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
