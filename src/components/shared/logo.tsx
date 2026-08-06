import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Muhammad Rayyan — Home"
      className={cn(
        "group relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#D4A24E" />
          </linearGradient>
        </defs>
        <rect x="15" y="34" width="9" height="19" rx="2" fill="#7A2229" />
        <rect x="28" y="24" width="9" height="29" rx="2" fill="#C22F3D" />
        <rect x="41" y="13" width="9" height="40" rx="2" fill="url(#logo-g)" />
        <circle cx="45.5" cy="10" r="2.4" fill="#D4A24E" />
      </svg>
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.55)]" />
    </Link>
  );
}
