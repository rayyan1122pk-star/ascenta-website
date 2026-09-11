"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function AnimatedHeading({
  lines,
  className,
  as: Comp = "h1",
}: {
  lines: React.ReactNode[];
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Comp className={cn("flex flex-col", className)}>
      <motion.span
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden py-1">
            <motion.span
              className="block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Comp>
  );
}

export function RevealText({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
