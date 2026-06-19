import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FeaturesIntro } from "@/components/sections/FeaturesIntro";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { PricingSection } from "@/components/sections/PricingSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WideFeatureCard } from "@/components/sections/WideFeatureCard";
import { WorkflowSection } from "@/components/sections/WorkflowSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <FeaturesIntro />
        <FeatureCards />
        <WideFeatureCard />
        <StatsSection />
        <WorkflowSection />
        <TrustSection />
        <PricingSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
