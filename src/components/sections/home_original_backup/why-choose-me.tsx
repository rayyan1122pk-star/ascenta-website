"use client";

import {
  Sparkles,
  Zap,
  Search,
  Smartphone,
  Code2,
  Layers,
  Accessibility,
  ShieldCheck,
  Bot,
  BarChart3,
  Infinity as InfinityIcon,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { whyChooseMe } from "@/config/stats";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const icons = [
  Sparkles,
  Zap,
  Search,
  Smartphone,
  Code2,
  Layers,
  Accessibility,
  ShieldCheck,
  Bot,
  BarChart3,
  InfinityIcon,
  LifeBuoy,
];

// Vertical offset per column position, so panels feel like they're floating at different depths.
const depthOffset = ["sm:mt-0", "sm:mt-8", "sm:mt-3"];

export function WhyChooseMe() {
  return (
    <Section tint>
      <SectionHeading
        badge="Why Work With Us"
        title="Built to Perform"
        description="Every project is built with the same standard — the one we'd want if we were the client."
      />

      <motion.div
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyChooseMe.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={cn(depthOffset[i % 3])}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_32px_-20px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.04]">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
