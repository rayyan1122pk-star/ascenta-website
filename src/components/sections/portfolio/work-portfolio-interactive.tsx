"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  Bot,
  Phone,
  Workflow,
  Database,
  Code2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/config/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Agents", "AI Automation", "Voice AI", "CRM & Internal Tools", "Web Development"] as const;

export function WorkPortfolioInteractive() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.solution.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function getCategoryIcon(cat: Project["category"]) {
    switch (cat) {
      case "AI Agents":
        return Bot;
      case "Voice AI":
        return Phone;
      case "AI Automation":
        return Workflow;
      case "CRM & Internal Tools":
        return Database;
      default:
        return Code2;
    }
  }

  return (
    <div className="flex flex-col gap-10">
      {/* Controls Bar: Search + Category Pills */}
      <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#1D1413] p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by technology (e.g. n8n, WhatsApp, Next.js, Hinglish)..."
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

          <div className="font-mono text-xs text-muted-foreground">
            Showing <span className="font-bold text-white">{filteredProjects.length}</span> of {projects.length} systems
          </div>
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
                  ? "bg-primary text-white shadow-[0_0_16px_rgba(230,57,70,0.4)]"
                  : "border border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#1D1413] py-20 text-center">
            <p className="font-mono text-sm text-muted-foreground">No projects match the search filter.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-full"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredProjects.map((project, index) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-32 overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] p-6 shadow-2xl transition-all duration-300 hover:border-primary/40 sm:p-10"
              >
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                      <Icon size={13} />
                      {project.categoryBadge}
                    </span>
                    <span className="ml-3 font-mono text-xs text-muted-foreground">
                      Context: {project.context}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>
                    <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    Case Study 0{index + 1}
                  </span>
                </div>

                {/* Hero Screenshot Frame (if present) */}
                {project.image && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#120B0B] shadow-2xl">
                    <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="font-mono text-[11px] text-muted-foreground truncate max-w-[220px] sm:max-w-md">
                        {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : project.id}
                      </span>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-mono text-white transition-all hover:border-primary/50 hover:bg-primary/20 hover:text-white"
                        >
                          <span>Visit Live</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">Internal System</span>
                      )}
                    </div>
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} Hero Section`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                    </div>
                  </div>
                )}

                {/* Problem & Solution Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Left: Problem & Solution */}
                  <div className="flex flex-col gap-5">
                    <div className="rounded-2xl border border-rose-500/20 bg-rose-950/15 p-5">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                        The Operational Problem
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                        The Solution Engineered
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right: Verified Value & Architecture */}
                  <div className="flex flex-col gap-5">
                    <div className="rounded-2xl border border-primary/30 bg-primary/[0.08] p-5">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        Verified Business Impact
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#F5EFE6]">
                        {project.value}
                      </p>
                    </div>

                    {project.architecture && (
                      <div className="rounded-2xl border border-white/[0.08] bg-[#140D0C] p-5 font-mono text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-accent font-bold uppercase text-[11px]">
                            <Terminal size={14} />
                            <span>Data Flow Architecture</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground uppercase">Verified Pipeline</span>
                        </div>
                        <p className="mt-3 leading-relaxed text-emerald-400 whitespace-pre-wrap">
                          {project.architecture}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Technical Highlights Checklist */}
                <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#140D0C] p-6">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Key Technical Capabilities Delivered:
                  </h4>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">Stack:</span>
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-white transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Terminal size={13} />
                      Inspect Architecture Modal
                    </button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs"
                      render={<Link href="/contact" />}
                    >
                      Request Similar Build
                      <ArrowUpRight size={13} />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Deep Dive Architecture Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#1B1211] p-6 shadow-2xl sm:p-8 text-left"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    Architecture Deep Dive · {activeModalProject.categoryBadge}
                  </span>
                  <h3 className="mt-1 text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  <p className="text-xs text-muted-foreground">{activeModalProject.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                {activeModalProject.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#120B0B]">
                    <Image
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                    {activeModalProject.liveUrl && (
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[11px] font-mono text-white shadow-lg backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-primary"
                      >
                        <span>Open Live App</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                )}

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Problem & Engineering Mandate:
                  </p>
                  <p className="mt-1 text-sm text-white/90 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#120B0A] p-5 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-[11px]">
                    <Terminal size={14} />
                    <span>Live Architecture Data Flow Topology:</span>
                  </div>
                  <pre className="mt-3 overflow-x-auto text-emerald-300 whitespace-pre-wrap leading-relaxed">
                    {activeModalProject.architecture}
                  </pre>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                    Key Highlights & Features:
                  </p>
                  <ul className="mt-2 flex flex-col gap-2 text-xs text-white/85">
                    {activeModalProject.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Measured Outcome:
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#F5EFE6]">
                    {activeModalProject.value}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="font-mono text-xs text-muted-foreground">
                  Ready to build a similar system?
                </span>
                <Button
                  variant="gradient"
                  size="default"
                  className="rounded-full"
                  render={<Link href="/contact" onClick={() => setActiveModalProject(null)} />}
                >
                  Discuss This Build
                  <ArrowUpRight size={14} />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
