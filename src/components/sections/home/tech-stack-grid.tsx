"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { techStack } from "@/config/techstack";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const categoryOrder = [
  "Frontend",
  "Backend",
  "Database",
  "Hosting",
  "Design",
  "Animation",
  "AI",
  "Tools",
] as const;

export function TechStackGrid() {
  const grouped = categoryOrder
    .map((category) => ({ category, items: techStack.filter((t) => t.category === category) }))
    .filter((g) => g.items.length > 0);

  return (
    <Section tint>
      <SectionHeading
        badge="Tools of the Trade"
        title="The Technology We Build With"
        description="A modern, battle-tested stack chosen for performance, reliability, and long-term maintainability."
      />

      <motion.div
        variants={staggerContainer(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4"
      >
        {grouped.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="flex flex-col gap-3 bg-background p-6 transition-colors duration-300 hover:bg-white/[0.02]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">{group.category}</p>
            <ul className="flex flex-col gap-2">
              {group.items.map((tech) => (
                <li key={tech.name} className="text-sm text-muted-foreground transition-colors hover:text-white">
                  {tech.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
