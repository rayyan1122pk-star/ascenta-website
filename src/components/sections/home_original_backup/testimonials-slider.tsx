"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { testimonials } from "@/config/testimonials";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const testimonial = testimonials[index];

  return (
    <Section className="relative overflow-hidden">
      <SectionHeading
        badge="Client Testimonials"
        title={
          <>
            Built for <span className="font-serif italic text-primary">results.</span>
          </>
        }
      />

      <div
        className="relative mx-auto mt-14 max-w-3xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Quote className="pointer-events-none absolute -left-6 -top-10 text-primary/10 sm:-left-10" size={140} strokeWidth={1} />

        <div className="relative min-h-[300px] px-2 text-center sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-warning text-warning" />
                ))}
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-balance font-serif text-2xl italic leading-snug text-white sm:text-3xl md:text-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </Section>
  );
}
