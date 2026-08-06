import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { BlogCard } from "@/components/shared/blog-card";
import { FinalCta } from "@/components/shared/final-cta";
import { NewsletterInline } from "@/components/sections/blog/newsletter-inline";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <Section className="pb-6 pt-6 sm:pt-10">
        <Container className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white">
            <ArrowLeft size={14} />
            All Articles
          </Link>

          <span className="mt-6 inline-flex w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-accent">
            {post.category}
          </span>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime}
            </span>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
            <Image src={post.coverImage} alt={post.title} fill sizes="768px" className="object-cover" priority />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="mx-auto max-w-3xl">
          <article
            className="prose prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-white prose-a:text-accent max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-base font-semibold text-white">Enjoyed this article?</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Get occasional insights on web development and AI, straight to your inbox.
            </p>
            <NewsletterInline />
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-xl font-semibold text-white">Related Articles</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} delay={i * 0.06} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FinalCta />
    </>
  );
}
