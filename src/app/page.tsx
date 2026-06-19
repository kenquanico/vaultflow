import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FeaturesIntro } from "@/components/sections/FeaturesIntro";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { WideFeatureCard } from "@/components/sections/WideFeatureCard";

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
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
