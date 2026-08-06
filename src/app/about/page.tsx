import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { AnimatedHeading, RevealText } from "@/components/shared/animated-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { Counter } from "@/components/shared/counter";
import { FinalCta } from "@/components/shared/final-cta";
import { aboutContent } from "@/config/about";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — a full stack web developer and AI automation developer focused on building premium websites that grow businesses.`,
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <Container className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground">
            About Me
          </span>
          <AnimatedHeading
            as="h1"
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
            lines={[<span key="1">Hi, I&apos;m Muhammad Rayyan.</span>]}
          />
          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I design and develop premium websites and AI-powered solutions that help businesses build
            trust, generate more leads, and grow online.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto grid max-w-4xl gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-4 sm:p-8">
          {aboutContent.achievements.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-semibold text-white sm:text-3xl">
                {/^\d+$/.test(item.value) ? <Counter value={Number(item.value)} /> : item.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading badge="My Story" title="How I Got Here" align="left" />
        <div className="mt-8 flex max-w-3xl flex-col gap-5">
          {aboutContent.story.map((paragraph, i) => (
            <RevealText key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{paragraph}</p>
            </RevealText>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading badge="My Philosophy" title="What I Believe About Building Websites" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {aboutContent.philosophy.map((item, i) => (
            <GlassCard key={item.title} delay={(i % 2) * 0.08}>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading badge="Core Values" title="What Guides Every Project" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.values.map((item, i) => (
            <GlassCard key={item.title} delay={(i % 3) * 0.08}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
                <Check size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading badge="My Journey" title="Timeline" />
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative flex flex-col gap-8 border-l border-white/10 pl-8">
            {aboutContent.timeline.map((item, i) => (
              <RevealText key={item.year} delay={i * 0.06} className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary" />
                <span className="text-xs font-semibold text-accent">{item.year}</span>
                <h3 className="mt-1 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading badge="Skills" title="What I Work With" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(aboutContent.skills).map(([category, skills], i) => (
            <GlassCard key={category} delay={(i % 3) * 0.08}>
              <h3 className="text-base font-semibold text-white">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading badge="Looking Ahead" title="Where I'm Headed" />
        <div className="mx-auto mt-10 max-w-2xl">
          <ul className="flex flex-col gap-4">
            {aboutContent.futureGoals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-muted-foreground">
                <Check size={18} className="mt-0.5 shrink-0 text-success" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
