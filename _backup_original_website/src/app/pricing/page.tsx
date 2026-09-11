import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { PricingCard } from "@/components/shared/pricing-card";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FinalCta } from "@/components/shared/final-cta";
import { Button } from "@/components/ui/button";
import { pricingTiers, comparisonTable, bundles } from "@/config/pricing";
import { services } from "@/config/services";
import { faqs } from "@/config/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent pricing for websites, AI automation, and custom systems from ${siteConfig.name}. Compare packages, automation pricing, and bundles.`,
};

const pricingFaqs = faqs.filter((f) => f.category === "Pricing");

const automationSlugs = ["whatsapp-agent", "instagram-crm", "voice-calling-agent", "form-automation", "ai-chatbots", "ai-automation"];
const automationPricing = automationSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

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
        <SectionHeading
          badge="Automation Pricing"
          title="AI Agents & Automation"
          description="Starting prices for our automation services — final pricing depends on complexity and how many systems you're connecting."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {automationPricing.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
                <p className="mt-4 text-xl font-semibold text-white">
                  {service.startingPrice}
                  <span className="ml-1.5 text-sm font-normal text-muted-foreground">starting</span>
                </p>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Automation pricing varies more than website pricing since it depends on which tools you use and how many
          systems need to connect.{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Contact us for an exact quote
          </Link>
          .
        </p>
      </Section>

      <Section tint>
        <SectionHeading
          badge="Bundles"
          title="Websites + Automation, Bundled"
          description="Combine a website with automation and save compared to buying each separately."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {bundles.map((bundle) => (
            <div
              key={bundle.name}
              className="flex flex-col rounded-3xl border border-primary/20 bg-primary/[0.04] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8"
            >
              <h3 className="text-lg font-semibold text-white">{bundle.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{bundle.description}</p>
              <p className="mt-5 text-3xl font-semibold text-white">
                {bundle.price}
                <span className="ml-2 text-sm font-normal text-muted-foreground">{bundle.priceNote}</span>
              </p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {bundle.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" className="mt-6 w-full rounded-full" render={<Link href="/contact" />}>
                Get This Bundle
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          ))}
        </div>
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
