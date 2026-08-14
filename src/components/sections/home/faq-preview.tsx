import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/config/faq";

export function FaqPreview() {
  const featured = faqs.slice(0, 5);
  return (
    <Section>
      <SectionHeading
        badge="Got Questions?"
        title={
          <>
            Questions? Let&apos;s <span className="font-serif italic text-primary">clear them up.</span>
          </>
        }
      />
      <div className="mx-auto mt-14 max-w-2xl">
        <FaqAccordion items={featured} />
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/faq" />}>
            View All FAQs
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
