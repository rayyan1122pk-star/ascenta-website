"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { knowledgeTopics } from "@/config/knowledge";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Engineering", "Voice AI", "Automation", "Web Development", "UI/UX"] as const;

export function LearnInteractive() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = useMemo(() => {
    return knowledgeTopics.filter((t) => {
      const matchesCategory = activeCategory === "All" || t.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.keyTakeaways.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-10">
      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1D1413] p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search concepts (e.g. latency, RAG, tool calling, n8n, WebSockets)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-xs text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            {filteredTopics.length} Architecture Guides Available
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-white shadow-[0_0_16px_rgba(230,57,70,0.35)]"
                  : "border border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guides List */}
      <div className="flex flex-col gap-12">
        {filteredTopics.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#1D1413] p-12 text-center">
            <p className="text-sm text-muted-foreground">No guides matched your search.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-full"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Search
            </Button>
          </div>
        ) : (
          filteredTopics.map((topic, index) => (
            <article
              key={topic.id}
              id={topic.id}
              className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {topic.category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{topic.title}</h2>
                  <p className="mt-1 text-sm font-medium text-accent">{topic.subtitle}</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {topic.readTime}
                  </span>
                  <span>·</span>
                  <span>Guide 0{index + 1}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-base leading-relaxed text-[#F5EFE6]/90 sm:text-lg">
                {topic.summary}
              </p>

              {/* Core Takeaways */}
              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Key Architectural Principles:
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {topic.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Breakdown Sections */}
              <div className="mt-8 flex flex-col gap-6 border-t border-white/[0.08] pt-8">
                {topic.contentSections.map((sec, sIdx) => (
                  <div key={sIdx} className="rounded-2xl border border-white/[0.06] bg-[#140D0C] p-6">
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                      {sec.heading}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-6 font-mono text-xs text-muted-foreground">
                <span>Category: {topic.category}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  render={<Link href="/contact" />}
                >
                  Discuss Architecture
                  <ArrowUpRight size={13} />
                </Button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
