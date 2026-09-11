import type { Metadata } from "next";
import { Terminal } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { WorkPortfolioInteractive } from "@/components/sections/portfolio/work-portfolio-interactive";
import { ProblemCta } from "@/components/sections/portfolio/problem-cta";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: `Deep-dive case studies and technical architectures engineered by ${siteConfig.name} (Muhammad Rayyan) — from WhatsApp AI CRMs to low-latency voice engines and custom operational dashboards.`,
};

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary">
            <Terminal size={13} />
            Verified Portfolio & Case Studies
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Real Systems Built.{" "}
            <span className="italic text-primary">Measurable Outcomes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I don&apos;t build demo toy apps. Every project below was engineered to solve real
            operational bottlenecks, automate manual grunt work, or accelerate customer conversions.
          </p>
        </Container>
      </Section>

      {/* Interactive Projects Showcase */}
      <Section className="pt-0">
        <WorkPortfolioInteractive />
      </Section>

      <ProblemCta />
    </>
  );
}
