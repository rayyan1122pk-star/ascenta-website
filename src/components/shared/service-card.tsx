import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/config/services";
import { GlassCard } from "@/components/shared/glass-card";

export function ServiceCard({
  service,
  delay = 0,
  index,
}: {
  service: Service;
  delay?: number;
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <GlassCard delay={delay} className="flex h-full flex-col">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon size={22} />
        </div>
        {typeof index === "number" && (
          <span className="font-display text-2xl italic text-white/10">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-accent"
      >
        Learn More
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </GlassCard>
  );
}
