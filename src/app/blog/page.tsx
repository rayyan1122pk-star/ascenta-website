import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/shared/section";
import { FinalCta } from "@/components/shared/final-cta";
import { BlogGrid } from "@/components/sections/blog/blog-grid";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights on web development, SEO, performance, design, and AI automation from ${siteConfig.name}.`,
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Section className="pb-8 pt-6 sm:pt-10">
        <SectionHeading
          badge="Blog"
          title="Insights on Web & AI"
          description="Practical, no-fluff writing on building better websites and using AI to grow your business."
        />
      </Section>

      <Section className="pt-0">
        <BlogGrid posts={posts} />
      </Section>

      <FinalCta />
    </>
  );
}
