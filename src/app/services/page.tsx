import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/shared/section";
import { ServiceCard } from "@/components/shared/service-card";
import { FinalCta } from "@/components/shared/final-cta";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Engineering Services · Web Development & AI Automation",
  description: `Explore the web development, custom dashboards, voice AI calling, and autonomous agent services engineered by ${siteConfig.name} (Muhammad Rayyan).`,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Engineering Services | Ascenta",
    description: `Explore the web development, custom dashboards, voice AI calling, and autonomous agent services engineered by ${siteConfig.name}.`,
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `${siteConfig.url}` },
    { name: "Services", url: `${siteConfig.url}/services` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="What We Do"
          title="Services Built to Grow Your Business"
          description="From marketing websites to fully custom systems, every service is built around one goal: measurable results for your business."
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
