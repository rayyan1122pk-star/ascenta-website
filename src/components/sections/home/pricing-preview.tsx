import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { PricingCard } from "@/components/shared/pricing-card";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/config/pricing";

export function PricingPreview() {
  return (
    <Section>
      <SectionHeading
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the package that fits your business, or request a custom quote for something more specific."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} delay={i * 0.08} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/pricing" />}>
          Compare Full Pricing Details
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  );
}
