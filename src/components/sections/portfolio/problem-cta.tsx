"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Mail, Briefcase, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/config/site";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ProblemCta() {
  return (
    <Section id="contact-cta" className="relative pb-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1D1413] px-6 py-20 text-center sm:px-12 sm:py-28 shadow-2xl"
      >
        {/* Glow effect */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-medium text-primary">
            <Terminal size={13} />
            Let&apos;s Build Something Real
          </span>

          <h2 className="mt-6 text-balance font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Have a problem <span className="italic text-primary">worth building?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-[#F5EFE6]/80 sm:text-base">
            Whether you need a high-performance web platform, an autonomous WhatsApp/IG AI agent,
            an n8n workflow pipeline, or a low-latency voice system — tell me what you&apos;re solving.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Button
                variant="gradient"
                size="xl"
                className="rounded-full font-medium"
                render={<Link href="/contact" />}
              >
                Discuss Your Project
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </Magnetic>

            <Magnetic>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-8 text-sm font-semibold text-success transition-all hover:bg-success/20 hover:border-success/50"
              >
                <MessageCircle size={18} />
                WhatsApp Quick Chat
              </a>
            </Magnetic>
          </div>

          {/* Direct channels footer */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/[0.08] pt-8 font-mono text-xs text-muted-foreground">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-primary" />
              {siteConfig.email}
            </a>
            <span>·</span>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.phone}
            </a>
            <span>·</span>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Briefcase size={14} className="text-accent" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
