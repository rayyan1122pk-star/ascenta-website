"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { services } from "@/config/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesPreview() {
  const featured = services.slice(0, 8);
  return (
    <Section>
      <SectionHeading
        badge="What We Do"
        title="What We Build"
        description="From marketing sites to full custom systems — everything is built with the same standard of quality."
      />

      <motion.div
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 flex flex-col border-t border-white/[0.08]"
      >
        {featured.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col gap-2 border-b border-white/[0.08] py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-8 sm:py-8"
              >
                <span className="font-mono text-xs text-muted-foreground sm:w-10 sm:shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/15 sm:hidden">
                  <Icon size={18} />
                </span>

                <h3 className="text-xl font-semibold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-primary sm:flex-1 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="max-w-sm text-sm text-muted-foreground opacity-100 transition-all duration-300 sm:max-w-xs sm:translate-x-2 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
                  {service.shortDescription}
                </p>

                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary sm:flex">
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/services" />}>
          View All Services
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  );
}
