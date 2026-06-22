import { Reveal } from "@/components/ui/Reveal";

export function FeaturesIntro() {
  return (
    <section id="features" className="container py-16 text-center md:py-20">
      <Reveal>
        <p className="mb-4 text-caption font-semibold uppercase tracking-[0.18em] text-primary-glow">
          Platform
        </p>
        <h2 className="mx-auto max-w-3xl font-display text-heading-lg text-foreground text-balance md:text-heading-xl">
          One command center for the numbers that move the business.
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-body-md text-muted-foreground">
          Replace scattered spreadsheets and stale reports with live operating
          intelligence your whole team can trust.
        </p>
      </Reveal>
    </section>
  );
}
