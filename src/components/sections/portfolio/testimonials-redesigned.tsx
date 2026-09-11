"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { testimonials } from "@/config/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsRedesigned() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const active = testimonials[currentIndex];

  return (
    <Section id="testimonials" className="relative overflow-hidden bg-[#120B0A]/80 py-24 border-y border-white/[0.08]">
      <SectionHeading
        badge="Client Testimonials"
        title={
          <>
            Real Client Results.{" "}
            <span className="font-display italic text-primary">Unfiltered Feedback.</span>
          </>
        }
        description="Authentic feedback from business leaders, doctors, and founders who trusted me with their digital presence, software infrastructure, and AI automations."
      />

      <div
        className="relative mx-auto mt-14 max-w-4xl px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Decorative Quote Mark */}
        <Quote
          className="pointer-events-none absolute -left-6 -top-12 text-primary/[0.07] sm:-left-12 sm:-top-16"
          size={180}
          strokeWidth={1}
        />

        {/* Testimonial Card */}
        <div className="relative min-h-[340px] rounded-3xl border border-white/10 bg-[#1A1110] p-8 shadow-2xl sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Verified Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-[#D4A24E] text-[#D4A24E]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                    <CheckCircle2 size={12} />
                    Verified Partnership
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 font-display text-xl leading-relaxed text-[#F5EFE6] sm:text-2xl md:text-3xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
              </div>

              {/* Client Info & Avatar */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{active.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {active.role} · <span className="text-white/80">{active.company}</span>
                    </p>
                  </div>
                </div>

                {/* Index Indicator */}
                <span className="font-mono text-xs text-muted-foreground">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-colors hover:border-white/25 hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Jump to testimonial ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "w-8 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-colors hover:border-white/25 hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
}
