"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.3),0_16px_32px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.045] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.35),0_16px_32px_-20px_rgba(0,0,0,0.75)]",
        className
      )}
    >
      <div className="relative">{children}</div>
    </motion.div>
  );
}
