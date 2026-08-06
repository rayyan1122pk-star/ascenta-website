import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";

export function ServicesPreview() {
  const featured = services.slice(0, 6);
  return (
    <Section>
      <SectionHeading
        badge="What I Do"
        title="Services Built to Grow Your Business"
        description="From marketing sites to full custom systems — everything is built with the same standard of quality."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service, i) => (
          <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/services" />}>
          View All Services
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  );
}
