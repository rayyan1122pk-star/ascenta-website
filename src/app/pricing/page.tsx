import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { PricingCard } from "@/components/shared/pricing-card";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FinalCta } from "@/components/shared/final-cta";
import { pricingTiers, comparisonTable } from "@/config/pricing";
import { faqs } from "@/config/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent pricing for websites, redesigns, and custom systems from ${siteConfig.name}. Compare Starter, Professional, and Premium packages.`,
};

const pricingFaqs = faqs.filter((f) => f.category === "Pricing");

function renderCell(value: string | boolean) {
  if (value === true) return <Check size={18} className="mx-auto text-success" />;
  if (value === false) return <X size={16} className="mx-auto text-muted-foreground/40" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees, no vague quotes. Choose a package that fits, or request a custom quote for something more specific."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} delay={i * 0.08} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Prices above cover the initial build. Ongoing updates, content changes, or support after launch are billed
          separately — either per update or as a monthly maintenance plan, depending on what you need.
        </p>
      </Section>

      <Section>
        <SectionHeading badge="Compare Plans" title="Full Feature Comparison" />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-4 text-left font-medium text-muted-foreground">Feature</th>
                <th className="p-4 text-center font-medium text-white">Starter</th>
                <th className="p-4 text-center font-medium text-white">Professional</th>
                <th className="p-4 text-center font-medium text-white">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.01]" : ""}>
                  <td className="p-4 text-white/90">{row.feature}</td>
                  <td className="p-4 text-center">{renderCell(row.starter)}</td>
                  <td className="p-4 text-center">{renderCell(row.professional)}</td>
                  <td className="p-4 text-center">{renderCell(row.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading badge="Pricing FAQs" title="Common Questions About Pricing" />
        <div className="mx-auto mt-12 max-w-2xl">
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>

      <FinalCta
        title="Not Sure Which Package Fits?"
        description="Tell us about your project and we'll recommend the right option — no obligation, no pressure."
      />
    </>
  );
}
