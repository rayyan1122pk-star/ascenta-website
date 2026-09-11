import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Clock, DollarSign, Layers } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { GlassCard } from "@/components/shared/glass-card";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { FinalCta } from "@/components/shared/final-cta";
import { Button } from "@/components/ui/button";
import { services, getServiceBySlug } from "@/config/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Icon size={26} />
          </div>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-muted-foreground sm:text-lg">{service.overview}</p>

          <div className="mt-8 grid w-full max-w-lg grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-2">
            <div className="flex items-center gap-2.5">
              <Clock size={16} className="text-accent" />
              <div className="text-left">
                <p className="text-[11px] text-muted-foreground">Timeline</p>
                <p className="text-sm font-medium text-white">{service.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <DollarSign size={16} className="text-accent" />
              <div className="text-left">
                <p className="text-[11px] text-muted-foreground">Starting From</p>
                <p className="text-sm font-medium text-white">{service.startingPrice}</p>
              </div>
            </div>
          </div>

          <Button variant="gradient" size="xl" className="mt-8 rounded-full" render={<Link href="/contact" />}>
            Book a Free Consultation
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </Container>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard hover={false}>
            <h2 className="text-lg font-semibold text-white">Benefits</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-success" />
                  {b}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard hover={false}>
            <h2 className="text-lg font-semibold text-white">What&apos;s Included</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Layers size={16} className="mt-0.5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section>
        <SectionHeading badge="Tech Stack" title="Built With" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {service.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {service.faqs.length > 0 && (
        <Section>
          <SectionHeading badge="FAQs" title={`Questions About ${service.title}`} />
          <div className="mx-auto mt-12 max-w-2xl">
            <FaqAccordion items={service.faqs} />
          </div>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
