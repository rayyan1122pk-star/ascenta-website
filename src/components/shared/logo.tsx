import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ascenta — Home"
      className={cn(
        "group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
        <g fill="#ffffff">
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(45 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(135 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(225 32 32)" />
          <path d="M 36,32 L 44,22 A 10,10 0 0 1 44,42 Z" transform="rotate(315 32 32)" />
        </g>
      </svg>
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.55)]" />
    </Link>
  );
}
