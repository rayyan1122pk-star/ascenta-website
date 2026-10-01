---
title: "Why Modern Web Apps Fail Core Web Vitals (And How to Fix INP & LCP)"
excerpt: "A deep dive into common Next.js performance bottlenecks: heavy client hydration, unoptimized third-party scripts, and fixing Interaction to Next Paint (INP)."
date: "2026-03-20"
category: "Performance"
author: "Muhammad Rayyan"
coverImage: "/blog/core-web-vitals-fix.svg"
---

With Google's official replacement of First Input Delay (FID) with **Interaction to Next Paint (INP)** as a core ranking metric, many modern React and Next.js applications saw their performance scores drop into the orange and red zones.

A website can appear visually fast while remaining completely unresponsive under the hood. When a user taps a mobile menu button or clicks an accordion and the main thread is locked executing hundreds of kilobytes of unoptimized JavaScript, INP fails.

Here is an engineering audit of the primary reasons modern web apps fail Core Web Vitals—and how we engineer sub-second web platforms at [Ascenta](/services/performance-optimization).

---

## 1. Largest Contentful Paint (LCP): The Image & Font Pitfall

Largest Contentful Paint measures when the largest visual element in the viewport finishes rendering. In 80% of websites, this element is either a hero image or an oversized custom headline font.

### The Most Common LCP Mistakes:
1. **Lazy Loading the Hero Image:** Applying `loading="lazy"` to the main banner image tells the browser to defer downloading it until scrolling occurs, directly delaying LCP by 1.5+ seconds.
2. **Missing `fetchpriority="high"`:** Without explicit priority, the browser downloads hero graphics behind low-priority background stylesheets and font files.
3. **Web Font Layout Jitter:** Loading unoptimized web fonts without `font-display: swap` or proper size adjustments causes Flash of Invisible Text (FOIT) or massive layout shifts.

### The Fix in Next.js:

```tsx
import Image from "next/image";

// Correct High-Priority Hero Optimization
<Image
  src="/hero-banner.webp"
  alt="Ascenta Web Engineering"
  priority={true} // Injects preload tag and sets fetchpriority="high"
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={85}
  className="object-cover"
/>
```

---

## 2. Interaction to Next Paint (INP): Unlocking the Main Thread

INP measures responsiveness throughout the entire user journey, not just the initial click. Google considers an INP under **200 milliseconds** good. Above 500 milliseconds is considered poor.

### Why React Apps Suffer from High INP:
* **Over-Hydration:** Marking entire page layouts with `"use client"` forces the browser to download, parse, and execute mega-bundles of JavaScript before any interactive state can respond.
* **Heavy Third-Party Tag Managers:** Unrestricted Google Tag Manager setups injecting multiple heatmaps, chat widgets, and ad tracking pixels simultaneously on page load.
* **Synchronous Long Tasks:** Running intensive data parsing or complex UI re-renders on the main thread during user clicks.

### How to Fix INP:

1. **Maximize React Server Components (RSC):** Keep marketing copy, static grids, and structural containers as server components. Only push client boundaries to the leaves of the component tree (e.g., interactive buttons, drawers, inputs).
2. **Yield to the Main Thread using `scheduler.yield()` or Transitions:** Wrap heavy non-urgent UI updates inside `React.startTransition()` so immediate user feedback (like button hover or tap state) can paint first.
3. **Defer Third-Party Tracking Scripts:** Always load chat widgets and analytics via Next.js `Script` with `strategy="lazyOnload"` or `strategy="afterInteractive"`.

---

## 3. Cumulative Layout Shift (CLS): Preserving Visual Stability

A CLS score above 0.1 triggers ranking penalties. 

CLS is caused almost entirely by elements entering the DOM without predefined dimensional space:
* Dynamic banner alerts pushing content down
* Images loaded without explicit width and height aspect ratios
* Late-rendered client components (like user profile avatars or cart counters) popping in after hydration

### The Fix:
Always declare aspect ratio containers in CSS:

```html
<div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
  <!-- Content or Image here will never shift layout during download -->
</div>
```

---

## Summary

Achieving 100/100 Core Web Vitals is not about installing an optimization plugin. It is an architectural discipline:
* Preload and prioritize the critical LCP asset
* Eliminate unnecessary client-side JavaScript execution to protect INP
* Reserve layout space to guarantee zero CLS

If your website is struggling with slow load times or Core Web Vitals warnings, check out our [Performance Optimization service](/services/performance-optimization) or [contact our engineering team](/contact).
