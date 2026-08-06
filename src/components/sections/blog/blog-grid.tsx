"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/shared/blog-card";
import type { BlogPostMeta } from "@/lib/blog";
import { blogCategories } from "@/lib/blog-constants";
import { cn } from "@/lib/utils";

export function BlogGrid({ posts }: { posts: BlogPostMeta[] }) {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["All", ...blogCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                category === cat
                  ? "border-primary/40 bg-primary/15 text-white"
                  : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." className="h-10 pl-9" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No articles match your search.</p>
      ) : (
        <>
          {featured && (
            <div className="mt-10">
              <BlogCard post={featured} featured />
            </div>
          )}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
