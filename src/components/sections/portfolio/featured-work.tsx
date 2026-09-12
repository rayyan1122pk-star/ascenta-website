"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  ChevronDown,
  CheckCircle2,
  Workflow,
  Bot,
  Phone,
  Code2,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/config/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "AI Agents", "AI Automation", "Voice AI", "CRM & Internal Tools", "Web Development"] as const;

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    <Section id="featured-work" className="relative">
      <SectionHeading
        badge="Featured Work"
        title={
          <>
            Real Systems Built.{" "}
            <span className="font-display italic text-primary">Real Business Impact.</span>
          </>
        }
        description="Every project below details the exact problem faced, the technical solution engineered, the technology stack employed, and the verified business value generated."
      />

      {/* Category Filter Pills */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-primary text-white shadow-[0_0_16px_rgba(230,57,70,0.4)]"
                : "border border-white/[0.08] bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid: Editorial Problem -> Solution -> Tech -> Value cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const Icon = getCategoryIcon(project.category);
          const isExpanded = expandedId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413]/90 p-6 shadow-xl transition-all duration-300 hover:border-primary/40 hover:bg-[#221716]"
            >
              {/* Header: Badge & Category */}
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1 text-xs font-mono font-medium text-primary">
                    <Icon size={13} />
                    {project.categoryBadge}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{project.context}</span>
                </div>

                {/* Hero Section Screenshot (if present) */}
                {project.image && (
                  <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#120B0B]">
                    <Image
                      src={project.image}
                      alt={`${project.title} Hero Section`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1D1413]/80 via-transparent to-black/30" />
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[11px] font-mono font-medium text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:border-primary/60 hover:bg-primary hover:text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Preview</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                )}

                {/* Title & Subtitle */}
                <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-primary sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-accent font-medium">{project.subtitle}</p>

                {/* The 4 Core Facets: Problem -> Solution -> Stack -> Value */}
                <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-[#140D0C]/90 p-4 text-xs sm:text-sm">
                  {/* Problem */}
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                      [Problem]
                    </span>
                    <p className="mt-0.5 text-white/80 leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="border-t border-white/[0.06] pt-2.5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                      [Solution Built]
                    </span>
                    <p className="mt-0.5 text-white/80 leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Value */}
                  <div className="border-t border-white/[0.06] pt-2.5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">
                      [Business Value]
                    </span>
                    <p className="mt-0.5 font-medium text-[#F5EFE6]">{project.value}</p>
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Expandable Architecture Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden border-t border-white/[0.08] pt-4"
                    >
                      <div className="rounded-xl border border-white/10 bg-[#120B0B] p-3 font-mono text-xs">
                        <p className="text-[11px] uppercase text-primary font-bold">Data Flow Architecture:</p>
                        <p className="mt-1 text-emerald-400 whitespace-pre-wrap">{project.architecture}</p>
                      </div>

                      <div className="mt-3">
                        <p className="font-mono text-[11px] uppercase text-muted-foreground">Key Technical Highlights:</p>
                        <ul className="mt-1.5 flex flex-col gap-1.5 text-xs text-white/80">
                          {project.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-primary shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Card Footer: Expand toggle + Link to /work */}
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground transition-colors hover:text-white"
                >
                  <span>{isExpanded ? "Hide Architecture" : "View Architecture"}</span>
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform duration-200", isExpanded && "rotate-180 text-primary")}
                  />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-accent transition-colors hover:text-white"
                    >
                      Visit Live
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  <Link
                    href={`/work#${project.id}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-white transition-colors hover:text-primary"
                  >
                    Full Case Study
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Explore full portfolio button */}
      <div className="mt-14 flex justify-center">
        <Button variant="outline" size="xl" className="rounded-full" render={<Link href="/work" />}>
          Explore Complete Work & Architecture Library
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </Section>
  );
}
