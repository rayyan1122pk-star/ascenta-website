"use client";

import { motion } from "framer-motion";
import { Code2, Users2, Clock, ThumbsUp } from "lucide-react";
import { stats } from "@/config/stats";
import { marqueeTech } from "@/config/techstack";
import { Counter } from "@/components/shared/counter";
import { Section } from "@/components/shared/section";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const statIcons = [Code2, Users2, Clock, ThumbsUp];

export function TrustMarquee() {
  return (
    <Section className="py-16 sm:py-20">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] overflow-hidden rounded-3xl border border-white/[0.08] sm:grid-cols-4 sm:divide-y-0"
      >
        {stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length];
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative flex flex-col items-center justify-center gap-2 px-6 py-10 text-center transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <Icon size={18} className="mb-1 text-primary/70 transition-colors group-hover:text-primary" />
              <p className="font-display text-4xl italic font-medium text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex w-max items-center gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/[0.08] px-5 py-2 text-sm font-medium text-muted-foreground/70 transition-colors hover:border-primary/25 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
