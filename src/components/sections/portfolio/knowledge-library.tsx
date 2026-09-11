"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  Bot,
  Cpu,
  Radio,
  Layers,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { knowledgeTopics, type KnowledgeTopic } from "@/config/knowledge";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Engineering", "Voice AI", "Automation", "Web Development", "UI/UX"] as const;

export function KnowledgeLibrary() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(knowledgeTopics[0].id);

  const filteredTopics =
    activeCategory === "All"
      ? knowledgeTopics
      : knowledgeTopics.filter((t) => t.category === activeCategory);

  const selectedTopic = knowledgeTopics.find((t) => t.id === selectedTopicId) ?? knowledgeTopics[0];

  function getCategoryIcon(cat: KnowledgeTopic["category"]) {
    switch (cat) {
      case "AI Engineering":
        return Bot;
      case "Voice AI":
        return Radio;
      case "Automation":
        return Cpu;
      case "Web Development":
        return Code2;
      default:
        return Layers;
    }
  }

  return (
    <Section id="knowledge" className="relative bg-[#140D0C]/90 py-24 border-y border-white/[0.08]">
      <SectionHeading
        badge="Knowledge & Learnings"
        title={
          <>
            Engineering Library.{" "}
            <span className="font-display italic text-primary">Learn From What I&apos;ve Built.</span>
          </>
        }
        description="A curated repository of architecture patterns, latency breakdowns, and system insights derived from real production builds. Take actionable value away from this website."
      />

      {/* Category Pills */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-primary text-white shadow-[0_0_16px_rgba(230,57,70,0.35)]"
                : "border border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Knowledge Library Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Topic Index List */}
        <div className="flex flex-col gap-3 lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Curated Knowledge Topics:
          </p>
          {filteredTopics.map((topic) => {
            const Icon = getCategoryIcon(topic.category);
            const isSelected = topic.id === selectedTopicId;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopicId(topic.id)}
                className={cn(
                  "group flex flex-col rounded-2xl border p-4 text-left transition-all duration-200",
                  isSelected
                    ? "border-primary/50 bg-primary/[0.08] shadow-[0_0_24px_-4px_rgba(230,57,70,0.3)]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    <Icon size={12} />
                    {topic.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                    <Clock size={11} />
                    {topic.readTime}
                  </span>
                </div>
                <h4
                  className={cn(
                    "mt-2 text-sm font-bold transition-colors",
                    isSelected ? "text-white" : "text-white/80 group-hover:text-white"
                  )}
                >
                  {topic.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{topic.summary}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Reader Panel */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary font-medium">
                    {selectedTopic.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                    <Clock size={12} />
                    {selectedTopic.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">{selectedTopic.title}</h3>
                <p className="mt-1 text-xs text-accent font-medium">{selectedTopic.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#F5EFE6]/90">{selectedTopic.summary}</p>

                {/* Key Architectural Takeaways */}
                <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#140D0C] p-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    Core Technical Takeaways:
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {selectedTopic.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content Sections Preview */}
                <div className="mt-6 flex flex-col gap-4">
                  {selectedTopic.contentSections.slice(0, 2).map((sec, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                        {sec.heading}
                      </h5>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link to Dedicated Learn Hub */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <span className="font-mono text-xs text-muted-foreground">
                  Read full breakdown with diagrams
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href={`/learn#${selectedTopic.id}`} />}
                >
                  Read Full Guide
                  <ArrowUpRight size={13} />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-14 flex justify-center">
        <Button variant="outline" size="xl" className="rounded-full" render={<Link href="/learn" />}>
          Browse Full Knowledge Hub & Technical Guides
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </Section>
  );
}
