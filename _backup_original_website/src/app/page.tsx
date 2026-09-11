import { Hero } from "@/components/sections/home/hero";
import { TrustMarquee } from "@/components/sections/home/trust-marquee";
import { WhyModernWebsites } from "@/components/sections/home/why-modern-websites";
import { AutomationShowcase } from "@/components/sections/home/automation-showcase";
import { WhyChooseMe } from "@/components/sections/home/why-choose-me";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { Capabilities } from "@/components/sections/home/capabilities";
import { ProcessTimeline } from "@/components/sections/home/process-timeline";
import { TechStackGrid } from "@/components/sections/home/tech-stack-grid";
import { PricingPreview } from "@/components/sections/home/pricing-preview";
import { TestimonialsSlider } from "@/components/sections/home/testimonials-slider";
import { FaqPreview } from "@/components/sections/home/faq-preview";
import { FinalCta } from "@/components/shared/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <WhyModernWebsites />
      <AutomationShowcase />
      <WhyChooseMe />
      <ServicesPreview />
      <Capabilities />
      <ProcessTimeline />
      <TechStackGrid />
      <PricingPreview />
      <TestimonialsSlider />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
