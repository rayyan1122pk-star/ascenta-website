"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Workflow,
  Phone,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutions } from "@/config/solutions";
import { cn } from "@/lib/utils";

const diagnostics = [
  {
    id: "off-hours-leads",
    label: "Leads dropping off during nights & weekends",
    icon: Workflow,
    recommendedArch: "24/7 WhatsApp/Instagram AI Agent with Persistent Context & Instant Human Takeover",
    modelStack: ["Meta Cloud API", "n8n", "Claude 3.5 Sonnet", "Supabase"],
    expectedOutcome: "< 5s response time, 60%+ automated qualification, zero lost off-hour prospects",
    relatedSolutionId: "structuring-chatgpt-solutions",
  },
  {
    id: "slow-voice",
    label: "Voice AI assistant has high latency & awkward pauses",
    icon: Phone,
    recommendedArch: "Bidirectional WebSocket Streaming with Fast STT Chunking & Streaming Neural TTS",
    modelStack: ["Twilio Media Streams", "Deepgram Nova-2", "Cartesia / ElevenLabs", "Node.js"],
    expectedOutcome: "Slashing conversational latency below 800ms with barge-in voice interruption",
    relatedSolutionId: "voice-engine-latency",
  },
  {
    id: "manual-busywork",
    label: "Team wastes 15+ hours weekly copying data between tools",
    icon: Cpu,
    recommendedArch: "Event-Driven n8n Automation Cluster with Dead-Letter Error Handling",
    modelStack: ["n8n Self-Hosted", "Webhooks", "Google Sheets API", "PostgreSQL"],
    expectedOutcome: "100% elimination of manual data entry, real-time sync with 0% data drift",
    relatedSolutionId: "reducing-repetitive-manual-work",
  },
  {
    id: "unstructured-data",
    label: "Customer notes & emails trapped as unstructured text",
    icon: Lightbulb,
    recommendedArch: "Schema-Enforced Zod Tool Calling & Automated Entity Extraction Engine",
    modelStack: ["Claude Tool Calling", "OpenAI Functions", "Zod", "Supabase"],
    expectedOutcome: "Instant transformation of messy notes into structured relational database records",
    relatedSolutionId: "extracting-useful-info-chatgpt",
  },
];

export function SolutionsInteractive() {
  const [selectedDiagnostic, setSelectedDiagnostic] = useState(diagnostics[0].id);
  const activeDiag = diagnostics.find((d) => d.id === selectedDiagnostic) ?? diagnostics[0];

  return (
    <div className="flex flex-col gap-12">
      {/* Interactive Bottleneck Diagnostic */}
      <div className="rounded-3xl border border-primary/20 bg-[#1D1413] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold uppercase tracking-wider">
          <Zap size={14} />
          <span>Interactive Diagnostic: Select Your Current Bottleneck</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
          What is holding your business operations or tech stack back?
        </h3>

        {/* Diagnostic Buttons */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {diagnostics.map((d) => {
            const Icon = d.icon;
            const isSelected = d.id === selectedDiagnostic;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDiagnostic(d.id)}
                className={cn(
                  "flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200",
                  isSelected
                    ? "border-primary bg-primary/15 shadow-[0_0_20px_rgba(230,57,70,0.3)] text-white"
                    : "border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
                )}
              >
                <Icon size={18} className={cn("mt-0.5 shrink-0", isSelected ? "text-primary" : "")} />
                <span className="text-xs sm:text-sm font-medium">{d.label}</span>
              </button>
            );
          })}
        </div>

        {/* Architecture Recommendation Result */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiag.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-2xl border border-white/10 bg-[#120B0A] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs text-accent font-bold uppercase">
                Recommended Solution Architecture:
              </span>
              <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Feasible in 1–3 Weeks
              </span>
            </div>

            <h4 className="mt-3 text-base sm:text-lg font-bold text-white">
              {activeDiag.recommendedArch}
            </h4>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <p className="font-mono text-[11px] text-muted-foreground uppercase">Recommended Stack:</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeDiag.modelStack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/[0.05] p-3.5">
                <p className="font-mono text-[11px] text-primary uppercase font-bold">Expected Business Outcome:</p>
                <p className="mt-1 text-xs text-[#F5EFE6] leading-relaxed">
                  {activeDiag.expectedOutcome}
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <Button
                variant="gradient"
                size="sm"
                className="rounded-full text-xs"
                render={<Link href="/contact" />}
              >
                Discuss Building This Architecture
                <ArrowUpRight size={13} />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Solutions Detailed List */}
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <h3 className="text-xl font-bold text-white">Proven Technical Solutions ({solutions.length})</h3>
          <span className="font-mono text-xs text-muted-foreground">Problem → Approach → Solution → Value</span>
        </div>

        {solutions.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
          >
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                  {item.badge}
                </span>
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  Category: {item.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{item.title}</h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                Challenge 0{index + 1}
              </span>
            </div>

            {/* Problem -> Approach -> Solution -> Value */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* 1. Problem */}
              <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                  1. The Client Bottleneck
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{item.clientProblem}</p>
              </div>

              {/* 2. Technical Approach */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-950/15 p-5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                  2. Engineering Approach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {item.technicalApproach}
                </p>
              </div>

              {/* 3. Solution Built */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  3. The Production System
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{item.solutionBuilt}</p>
              </div>

              {/* 4. Business Value */}
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-5">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  4. Verified Business Return
                </h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#F5EFE6]">
                  {item.businessValue}
                </p>
              </div>
            </div>

            {/* Architectural Insight */}
            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#140D0C] p-4 font-mono text-xs">
              <span className="text-accent font-bold uppercase text-[11px]">Key Takeaway: </span>
              <span className="text-white/80">{item.keyInsight}</span>
            </div>

            {/* Tech Badges & CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">Technologies:</span>
                {item.techUsed.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs"
                render={<Link href="/contact" />}
              >
                Solve This For Your Business
                <ArrowUpRight size={13} />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
