import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/shared/section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FinalCta } from "@/components/shared/final-cta";
import { faqs } from "@/config/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to common questions about working with ${siteConfig.name} — process, pricing, timelines, and support.`,
};

const categories = Array.from(new Set(faqs.map((f) => f.category).filter(Boolean))) as string[];

export default function FaqPage() {
  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before we start working together. Can't find your answer? Just ask."
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto flex max-w-2xl flex-col gap-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-accent">{category}</h2>
              <FaqAccordion items={faqs.filter((f) => f.category === category)} />
            </div>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
