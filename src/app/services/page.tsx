import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/shared/section";
import { ServiceCard } from "@/components/shared/service-card";
import { FinalCta } from "@/components/shared/final-cta";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore the web development, design, and AI automation services offered by ${siteConfig.name} — from business websites to custom dashboards and AI chatbots.`,
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="What I Do"
          title="Services Built to Grow Your Business"
          description="From marketing websites to fully custom systems — every service is built around one goal: measurable results for your business."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.06} index={i} />
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
