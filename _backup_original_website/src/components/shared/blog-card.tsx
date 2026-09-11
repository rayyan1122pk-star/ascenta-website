"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
  delay = 0,
}: {
  post: BlogPostMeta;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_32px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_48px_-18px_rgba(230,57,70,0.35)]",
          featured ? "sm:p-8" : ""
        )}
      >
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="w-fit rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-accent">
              {post.category}
            </span>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </div>
          <h3 className={cn("mt-4 font-semibold text-white", featured ? "text-2xl sm:text-3xl" : "text-lg")}>
            {post.title}
          </h3>
          <p className={cn("mt-3 text-muted-foreground", featured ? "text-base" : "line-clamp-2 text-sm")}>
            {post.excerpt}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
