"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Workflow, Cpu, Layers } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Counter } from "@/components/shared/counter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const metrics = [
  {
    value: 40,
    suffix: "+",
    label: "Production Projects Delivered",
    subtext: "Web platforms, dashboards & custom tools",
    icon: Layers,
  },
  {
    value: 15,
    suffix: "+",
    label: "Automations & AI Workflows",
    subtext: "n8n, webhooks, WhatsApp & CRM pipelines",
    icon: Workflow,
  },
  {
    value: 800,
    suffix: "ms",
    prefix: "< ",
    label: "Voice AI Latency Achieved",
    subtext: "Streaming STT/TTS phone conversational speed",
    icon: Zap,
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction Record",
    subtext: "Real business outcomes & long-term partners",
    icon: ShieldCheck,
  },
];

const capabilitiesPills = [
  "Next.js 16 & React 19",
  "Autonomous AI Agents",
  "n8n Workflow Automation",
  "WhatsApp Business Cloud API",
  "Low-Latency Voice AI",
  "Google Workspace & CRM Sync",
  "Sub-Second Performance",
  "PostgreSQL & Supabase",
];

export function ProofStats() {
  return (
    <section className="relative border-y border-white/[0.08] bg-[#140D0C]/80 py-16 backdrop-blur-xl">
      <Container>
        {/* Editorial statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3.5 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <Cpu size={13} className="text-primary" />
            Verified Technical Track Record
          </span>
          <h2 className="mt-4 text-balance font-display text-2xl font-medium tracking-tight text-[#F5EFE6] sm:text-3xl md:text-4xl">
            I don&apos;t just provide services.{" "}
            <span className="italic text-primary">I build technology and solve real problems.</span>
          </h2>
          <p className="mt-3 text-balance text-sm text-muted-foreground sm:text-base">
            Every system below represents real production code, live API integrations, and measurable
            business operations — not mockups or hypothetical concepts.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                    <Icon size={18} />
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-success/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
                <div className="mt-6">
                  <p className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {item.prefix}
                    <Counter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#F5EFE6]">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.subtext}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Real technical pills marquee / list */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 border-t border-white/[0.06] pt-8"
        >
          <span className="mr-2 text-xs font-mono uppercase tracking-wider text-muted-foreground/70">
            Engineered with:
          </span>
          {capabilitiesPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs font-medium text-white/80 transition-colors hover:border-primary/30 hover:text-white"
            >
              <CheckCircle2 size={12} className="text-primary" />
              {pill}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
