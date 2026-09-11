"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LoadingContext = createContext<{ isLoading: boolean }>({ isLoading: false });

export function useLoading() {
  return useContext(LoadingContext);
}

const FADE_MS = 500;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("mr-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- skip the loader on repeat visits within the session
      setIsLoading(false);
      setProgress(100);
      return;
    }

    const duration = 1100;
    const stepMs = 40;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += stepMs;
      setProgress(Math.min(100, Math.round((elapsed / duration) * 100)));
    }, stepMs);

    // Hard failsafe: never trap the user behind the loading screen, even if
    // timers get throttled (backgrounded tab, low-power mode, etc.).
    const finish = setTimeout(() => {
      clearInterval(interval);
      sessionStorage.setItem("mr-loaded", "1");
      setProgress(100);
      setIsLoading(false);
    }, duration + 400);

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, []);

  // Unmounting is driven by a plain timer, not by waiting on an animation
  // library's exit transition to report completion — so a stalled/paused
  // animation (throttled background tab, reduced motion, etc.) can never
  // leave this full-screen overlay stuck in the DOM.
  useEffect(() => {
    if (isLoading) return;
    const timer = setTimeout(() => setMounted(false), FADE_MS);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!mounted) {
    return <LoadingContext.Provider value={{ isLoading }}>{children}</LoadingContext.Provider>;
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <div
        aria-hidden={!isLoading}
        className={cn(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity ease-in-out",
          isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 1500 1499.999933" className="h-9 w-9" aria-hidden="true">
            <g fill="#ffffff">
                      <path d="M 1284.636719 1208.640625 L 1038.554688 782.5 L 930.058594 970.640625 L 1121.660156 1302.597656 C 1138.972656 1332.605469 1170.597656 1349.6875 1203.148438 1349.6875 C 1219.078125 1349.6875 1235.234375 1345.535156 1250.011719 1336.992188 C 1295.257812 1310.90625 1310.492188 1253.65625 1284.636719 1208.640625 Z M 1284.636719 1208.640625" fillRule="nonzero" />
                      <path d="M 1111.964844 548.421875 L 1007.621094 729.171875 L 898.890625 917.3125 L 730.835938 1208.410156 C 680.511719 1295.671875 586.554688 1349.921875 485.90625 1349.921875 C 383.640625 1349.921875 291.996094 1297.054688 240.75 1208.410156 C 189.5 1119.996094 189.5 1014.039062 240.75 925.394531 L 534.847656 416.375 C 565.320312 363.511719 620.03125 331.886719 680.972656 331.886719 C 741.917969 331.886719 796.628906 363.511719 827.328125 416.375 L 837.949219 434.84375 L 868.421875 487.476562 L 759.691406 675.617188 L 680.972656 539.417969 L 403.957031 1019.347656 C 379.257812 1062.054688 395.644531 1099.914062 403.957031 1114.226562 C 412.265625 1128.539062 436.738281 1161.78125 486.136719 1161.78125 C 519.84375 1161.78125 551.46875 1143.542969 568.089844 1114.226562 L 790.394531 729.171875 L 899.125 541.03125 L 948.984375 454.464844 C 975.070312 409.449219 1032.550781 393.984375 1077.566406 420.070312 C 1122.582031 445.925781 1138.050781 503.40625 1111.964844 548.421875 Z M 1111.964844 548.421875" fillRule="nonzero" />
                      <path d="M 1066.257812 324.960938 C 1116.582031 438.304688 1284.40625 368.820312 1240.085938 252.9375 C 1189.527344 139.820312 1021.703125 209.304688 1066.257812 324.960938 Z M 1066.257812 324.960938" fillRule="nonzero" />
                    </g>
          </svg>
          <motion.svg
            viewBox="0 0 80 80"
            className="absolute inset-0 h-full w-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="40"
              cy="40"
              r="37"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="40 200"
              opacity="0.6"
            />
          </motion.svg>
        </motion.div>
        <div className="mt-6 h-px w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-primary transition-[width] duration-150 ease-linear" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-3 text-xs font-medium tracking-[0.2em] text-muted-foreground">{progress}%</p>
      </div>
      {children}
    </LoadingContext.Provider>
  );
}
