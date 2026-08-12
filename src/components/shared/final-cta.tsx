"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";
import { Section } from "@/components/shared/section";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function FinalCta({
  title = "Let's Build Something Amazing Together.",
  description = "Tell us about your project and we'll get back to you within 24 hours with next steps — no pressure, no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <Button variant="gradient" size="xl" className="rounded-full" render={<Link href="/contact" />}>
                Book a Free Consultation
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="glass" size="xl" className="rounded-full" render={<Link href="/contact#audit" />}>
                Request a Free Website Audit
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
