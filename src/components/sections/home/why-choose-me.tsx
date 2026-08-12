"use client";

import {
  Sparkles,
  Zap,
  Search,
  Smartphone,
  Code2,
  Layers,
  Accessibility,
  ShieldCheck,
  Bot,
  BarChart3,
  Infinity as InfinityIcon,
  LifeBuoy,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { GlassCard } from "@/components/shared/glass-card";
import { whyChooseMe } from "@/config/stats";
import { cn } from "@/lib/utils";

const icons = [
  Sparkles,
  Zap,
  Search,
  Smartphone,
  Code2,
  Layers,
  Accessibility,
  ShieldCheck,
  Bot,
  BarChart3,
  InfinityIcon,
  LifeBuoy,
];

// Indices that get the larger "featured" treatment in the bento grid.
const featured = new Set([0, 4, 8]);

export function WhyChooseMe() {
  return (
    <Section tint>
      <SectionHeading
        badge="Why Work With Us"
        title="Everything You Need, Built In"
        description="Every project is built with the same standard — the one we'd want if we were the client."
      />

      <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseMe.map((item, i) => {
          const Icon = icons[i % icons.length];
          const isFeatured = featured.has(i);
          return (
            <GlassCard
              key={item.title}
              delay={(i % 3) * 0.06}
              className={cn("flex flex-col", isFeatured && "lg:col-span-2 lg:flex-row lg:items-start lg:gap-6")}
            >
              <div
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary",
                  isFeatured ? "h-14 w-14" : "h-11 w-11"
                )}
              >
                <Icon size={isFeatured ? 26 : 20} />
              </div>
              <div className={isFeatured ? "mt-5 lg:mt-0" : "mt-4"}>
                <h3 className={cn("font-semibold text-white", isFeatured ? "text-lg" : "text-base")}>
                  {item.title}
                </h3>
                <p className={cn("mt-1.5 text-muted-foreground", isFeatured ? "text-base" : "text-sm")}>
                  {item.description}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
