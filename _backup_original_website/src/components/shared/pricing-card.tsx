"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingTier } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function PricingCard({ tier, delay = 0 }: { tier: PricingTier; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
      className={cn(
        "relative flex flex-col rounded-3xl border p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8",
        tier.highlighted
          ? "border-primary/40 bg-primary/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_50px_-16px_rgba(230,57,70,0.45),0_16px_32px_-20px_rgba(0,0,0,0.7)] lg:-translate-y-3"
          : "border-white/[0.08] bg-white/[0.02]"
      )}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold text-white">{tier.price}</span>
        {tier.priceNote && <span className="text-sm text-muted-foreground">{tier.priceNote}</span>}
      </div>
      <Button
        variant={tier.highlighted ? "gradient" : "outline"}
        size="lg"
        className="mt-6 w-full rounded-full"
        render={<Link href={tier.ctaHref} />}
      >
        {tier.cta}
      </Button>
      <ul className="mt-7 flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check size={16} className="mt-0.5 shrink-0 text-success" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
