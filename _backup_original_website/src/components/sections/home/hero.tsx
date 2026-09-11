"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ChevronDown, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";
import { Container } from "@/components/shared/container";
import { AvatarStack } from "@/components/shared/avatar-stack";
import { Counter } from "@/components/shared/counter";

const trustBadges = ["Modern Design", "SEO Ready", "Mobile Optimized", "Fast Performance", "AI Integration"];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // The declarative `autoplay` attribute isn't reliably honored in every
    // browser/embedding context, so explicitly (re)try playback at every
    // point the platform gives us a signal that it might now be allowed:
    // on mount, once the video has enough data, and whenever the tab
    // becomes visible again. Each call is a safe no-op if already playing.
    function tryPlay() {
      if (video && video.paused) {
        video.play().catch(() => {
          // Still blocked (e.g. data-saver mode) — the first frame /
          // poster remains a reasonable static fallback.
        });
      }
    }

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative isolate flex min-h-[calc(100svh-6rem)] flex-col overflow-hidden pb-10 pt-10"
    >
      {/* Full-bleed background video — the robot IS the background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-20 bg-background"
      >
        <div
          style={{ transform: `translate(${tilt.x * -6}px, ${tilt.y * -6}px) scale(1.03)` }}
          className="h-full w-full transition-transform duration-300 ease-out"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-robot.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Contrast overlay — darker on the left for text, letting the robot read clearly on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/70 via-background/25 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/70 via-transparent to-background/25" />

      <Container className="relative flex flex-1 flex-col">
        {/* Top block — badge + headline + subtext */}
        <div className="max-w-xl pt-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          >
            <Sparkles size={13} className="text-accent" />
            We&apos;re Ascenta
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Websites Built to{" "}
            <span className="font-display italic font-medium text-primary">Convert</span>, Not
            Just Impress
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-md text-balance text-base text-muted-foreground sm:text-lg"
          >
            We design and build premium, high-performance websites and AI-powered solutions
            that increase credibility, generate more leads, and grow your business.
          </motion.p>
        </div>

        {/* Bottom block — CTAs/avatars left, glass stat cards right */}
        <div className="mt-auto flex flex-col gap-8 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <Button variant="gradient" size="xl" className="rounded-full" render={<Link href="/contact" />}>
                  Book a Free Consultation
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="glass" size="xl" className="rounded-full" render={<Link href="/services" />}>
                  View Our Services
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <AvatarStack count={5} label="35+ Happy Clients" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="max-w-md text-balance text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
            >
              {trustBadges.join("  ·  ")}
            </motion.p>
          </div>

          <div className="flex gap-3">
            <GlassStat delay={1.1} icon={<TrendingUp size={16} />} value={40} suffix="+" label="Projects Delivered" float={-8} />
            <GlassStat delay={1.25} icon={<Users size={16} />} value={100} suffix="%" label="Client Satisfaction" float={8} />
          </div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function GlassStat({
  icon,
  value,
  suffix,
  label,
  delay,
  float,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
  float: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, float, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-primary/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
        {icon}
      </span>
      <div>
        <p className="text-lg font-semibold leading-none text-white">
          <Counter value={value} suffix={suffix} />
        </p>
        <p className="mt-1 text-[11px] leading-none text-white/70">{label}</p>
      </div>
    </motion.div>
  );
}
