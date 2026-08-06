import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

export function Section({
  children,
  className,
  containerClassName,
  id,
  tint = false,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", tint && "border-y border-white/[0.06]", className)}
    >
      {tint && <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white/[0.015]" />}
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
          {badge}
        </span>
      )}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
