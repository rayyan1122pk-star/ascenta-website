"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Bot,
  Workflow,
  Phone,
  Terminal,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const capabilities = [
  {
    icon: Code2,
    title: "Web Design & Development",
    desc: "Bespoke Next.js applications, TypeScript architectures, and editorial UI/UX designed for conversion and sub-second speed.",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "24/7 conversational agents across WhatsApp and Instagram equipped with schema-validated tool calling and instant human takeover.",
  },
  {
    icon: Phone,
    title: "Voice AI & Calling Engines",
    desc: "Low-latency telephony assistants running on bidirectional WebSocket streams, benchmarked under 800ms for natural conversation.",
  },
  {
    icon: Workflow,
    title: "n8n Workflows & CRM Hubs",
    desc: "Defensive automation clusters connecting fragmented APIs, Google Sheets, databases, and operational dashboards.",
  },
];

export function FounderEditorial() {
  return (
    <Section id="founder" className="relative overflow-hidden pt-12 sm:pt-20">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-[#D4A24E]/5 blur-[120px]"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Editorial Portrait Frame (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          {/* Layered decorative background framing */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-white/5 to-[#D4A24E]/20 opacity-60 blur-xl transition-all duration-700 hover:opacity-80" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#17100F] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
            {/* Inner picture container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#120B0A]">
              <Image
                src="/founder/muhammad-rayyan.jpg"
                alt="Muhammad Rayyan — Founder & Builder at Ascenta"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient lighting vignettes */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120B0A] via-transparent to-transparent opacity-80"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#120B0A]/40 via-transparent to-transparent"
              />

              {/* Top Floating Badge */}
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#120B0A]/85 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-wide text-white/90">
                  Founder · Systems Architect
                </span>
              </div>

              {/* Bottom Glass Plaque */}
              <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/15 bg-[#17100F]/90 p-4 shadow-2xl backdrop-blur-md sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4A24E]">
                      Ascenta
                    </p>
                    <p className="text-base font-bold text-white sm:text-lg">
                      Muhammad Rayyan
                    </p>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                    Builder
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Building practical web applications, autonomous agents, and automated operational backends.
                </p>
              </div>
            </div>
          </div>

          {/* Under-card metadata highlight */}
          <div className="mt-4 flex items-center justify-between px-2 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Terminal size={12} className="text-primary" />
              <span>Direct Builder Access</span>
            </span>
            <span>{siteConfig.location.split("(")[0].trim()}</span>
          </div>
        </motion.div>

        {/* Right Column: Editorial Narrative & Capabilities (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col lg:col-span-7"
        >
          {/* Tracking Subtitle Badge */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="h-px w-6 bg-primary" />
            <span>FOUNDER</span>
          </div>

          {/* Large Typography Heading */}
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Muhammad <span className="italic text-primary">Rayyan</span>
          </h2>

          {/* Role Indicator */}
          <p className="mt-2 font-mono text-sm font-medium tracking-wide text-[#D4A24E]">
            Founder & Builder at Ascenta
          </p>

          {/* Capability Ribbon */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              Focus:
            </span>
            {["Web", "AI", "Automation", "Agents", "Systems"].map((domain, i) => (
              <span
                key={domain}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-xs font-medium text-white/90 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-white"
              >
                {i > 0 && <span className="text-primary/60">·</span>}
                {domain}
              </span>
            ))}
          </div>

          {/* Authentic Narrative Paragraphs */}
          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#F5EFE6]/90 sm:text-base">
            <p>
              I founded Ascenta to bridge the gap between high-craft digital interfaces and
              autonomous backend systems. Too many businesses lose momentum because their customer
              touchpoints are slow, their internal software is fragmented, and hours are wasted each week
              on repetitive operational busywork.
            </p>
            <p>
              I don&apos;t build speculative demos or chase superficial AI hype. My work centers on
              engineering practical technology: custom Next.js platforms that load instantly,
              autonomous WhatsApp and Instagram agents that reliably qualify prospects, sub-second
              voice calling engines, and defensive n8n automation clusters that keep operations running
              smoothly around the clock.
            </p>
            <p>
              My engineering approach is grounded in a simple philosophy:{" "}
              <strong className="text-white font-medium">
                learning through building real, production-tested projects
              </strong>. Every solution is architected with deterministic validation, strict error
              handling, and a clear focus on measurable business value.
            </p>
          </div>

          {/* 4-Box Capability Matrix */}
          <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-[#1D1413]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Row & CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-6">
            <Button
              variant="gradient"
              size="default"
              className="rounded-full font-medium"
              render={<Link href="/work" />}
            >
              Explore My Work
              <ArrowUpRight size={14} />
            </Button>

            <Button
              variant="outline"
              size="default"
              className="rounded-full text-xs"
              render={<Link href="/contact" />}
            >
              Discuss a Project
              <ArrowUpRight size={13} />
            </Button>

            {/* Social / Direct Channels */}
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground sm:ml-auto">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 transition-colors hover:text-emerald-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
