"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
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
          "group flex overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_32px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_48px_-18px_rgba(230,57,70,0.35)]",
          featured ? "flex-col sm:flex-row" : "flex-col"
        )}
      >
        <div className={cn("relative overflow-hidden", featured ? "aspect-[16/9] sm:aspect-auto sm:w-1/2" : "aspect-[16/9]")}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className={cn("flex flex-1 flex-col p-5", featured && "sm:p-7 sm:justify-center")}>
          <span className="w-fit rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-accent">
            {post.category}
          </span>
          <h3 className={cn("mt-3 font-semibold text-white", featured ? "text-xl sm:text-2xl" : "text-base")}>
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
