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
    desc: "Bespoke Next.js web applications, TypeScript architectures, and editorial UI/UX designed for sub-second conversions.",
    tag: "Next.js 16 · React 19",
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "24/7 WhatsApp & Instagram conversational agents equipped with schema tool calling, multi-turn memory, and human fallback.",
    tag: "Tool Calling · Zod",
  },
  {
    icon: Phone,
    title: "Voice AI & Calling Systems",
    desc: "Low-latency telephony assistants running on bidirectional WebSocket streams, benchmarked under 800ms for natural voice cadence.",
    tag: "< 800ms Streaming",
  },
  {
    icon: Workflow,
    title: "n8n Workflows & Custom CRMs",
    desc: "Defensive automation clusters connecting fragmented APIs, Google Sheets, relational databases, and operational hubs.",
    tag: "Webhooks · Fault-Tolerant",
  },
];

export function FounderEditorial() {
  return (
    <Section id="founder" className="relative overflow-hidden pt-14 sm:pt-24 pb-16 sm:pb-24">
      {/* Background Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 right-0 -z-10 select-none font-display text-[130px] font-bold tracking-tighter text-white/[0.02] sm:text-[220px]"
      >
        BUILDER
      </span>

      {/* Ambient Lighting Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-primary/12 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-[#D4A24E]/8 blur-[130px]"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Asymmetrical Editorial Portrait Frame (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          {/* Architectural corner tick marks */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-3 -left-3 font-mono text-xs text-primary/40">+</div>
          <div aria-hidden="true" className="pointer-events-none absolute -top-3 -right-3 font-mono text-xs text-[#D4A24E]/40">+</div>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-3 -left-3 font-mono text-xs text-[#D4A24E]/40">+</div>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3 font-mono text-xs text-primary/40">+</div>

          {/* Layered decorative background glow */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-white/5 to-[#D4A24E]/20 opacity-60 blur-xl transition-all duration-700 hover:opacity-80" />

          {/* Outer Frame with Hairline Border */}
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-[#17100F] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
            {/* Inner Picture Canvas */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-[#120B0A]">
              <Image
                src="/founder/muhammad-rayyan.jpg"
                alt="Muhammad Rayyan — Founder & Builder at Ascenta"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                className="object-cover object-[50%_35%] scale-[1.22] transition-transform duration-700 hover:scale-[1.26]"
              />

              {/* Gradient Vignettes to soften and anchor the portrait */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120B0A] via-transparent to-transparent opacity-85"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#120B0A]/40 via-transparent to-transparent opacity-60"
              />

              {/* Top Floating Status Pill */}
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#120B0A]/85 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] font-medium tracking-wide text-white/90">
                  Founder · Systems Architect
                </span>
              </div>

              {/* Bottom Frosted Glass Plaque */}
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
                  <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                    Builder
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Building practical web applications, autonomous AI agents, and automated operational backends.
                </p>
              </div>
            </div>
          </div>

          {/* Under-Card Metadata Strip */}
          <div className="mt-4 flex items-center justify-between px-2 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Terminal size={12} className="text-primary" />
              <span>Direct Builder Access</span>
            </span>
            <span>{siteConfig.location.split("(")[0].trim()}</span>
          </div>
        </motion.div>

        {/* Right Column: Editorial Narrative & Capabilities (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex flex-col lg:col-span-7"
        >
          {/* Tracking Subtitle Badge */}
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" />
            <span>FOUNDER</span>
            <span className="text-white/20">/</span>
            <span className="text-muted-foreground">Muhammad Rayyan</span>
          </div>

          {/* Large Typography Display Heading */}
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Muhammad <span className="font-normal italic text-primary">Rayyan</span>
          </h2>

          {/* Role Subheading */}
          <p className="mt-2 font-mono text-sm font-medium tracking-wide text-[#D4A24E]">
            Founder & Builder at Ascenta
          </p>

          {/* Visual List / Capability Indicators */}
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

          {/* Authentic, Grounded Narrative Copy */}
          <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-[#F5EFE6]/90 sm:text-base">
            <p>
              I founded Ascenta to bridge the gap between high-craft digital interfaces and
              autonomous backend systems. Too many businesses lose momentum because their customer
              touchpoints are slow, their internal tools are fragmented, and valuable hours are wasted
              each week on repetitive operational busywork.
            </p>
            <p>
              Rather than treating web design and automation as isolated silos, I bring them together.
              My work centers on engineering practical technology: custom Next.js web platforms that
              load instantly, autonomous WhatsApp and Instagram agents that qualify leads around the
              clock, sub-second voice AI calling engines, and fault-tolerant n8n automation clusters
              that keep operational data synchronized with 0% drift.
            </p>
            <p>
              My engineering approach is anchored in a simple, uncompromising discipline:{" "}
              <strong className="text-white font-medium">
                learning through building real, production-tested projects
              </strong>. Every solution is architected with deterministic validation, strict error
              handling, and a single objective: delivering measurable, long-term business value.
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
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xs font-bold uppercase tracking-wider text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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
              Explore my work
              <ArrowUpRight size={14} />
            </Button>

            <Button
              variant="outline"
              size="default"
              className="rounded-full text-xs"
              render={<Link href="/contact" />}
            >
              Discuss a project
              <ArrowUpRight size={13} />
            </Button>

            {/* Direct Connect Pills */}
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
