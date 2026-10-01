# SEO, AEO & GEO SYSTEM MASTER PLAN
**Target Asset:** Ascenta (`https://ascenta.dev` / `https://ascenta-agency.vercel.app`)  
**Core Positioning:** Web Development & AI Automation Agency / Technology Builder (Muhammad Rayyan)  
**Location & Footprint:** Lahore, Pakistan (Global Remote Delivery across US, UK, UAE, Saudi Arabia, Europe)  
**Document Status:** LIVING MASTER SPECIFICATION & IMPLEMENTATION REGISTRY  
**Date Initiated:** October 2026  
**Architecture Principle:** `RESEARCH → DECOMPOSE → PRIORITIZE → IMPLEMENT → TEST → VERIFY → MEASURE → LEARN → ITERATE`

---

## 1. CURRENT FORENSIC BASELINE (WHAT EXISTS TODAY)

### Codebase & Framework
* **Framework:** Next.js 16.3.0 (Turbopack, React 19.2.8, TypeScript 5)
* **Styling:** Tailwind CSS v4, Framer Motion 13, GSAP 3.15, Lenis smooth scroll
* **Content Engine:** Markdown via `gray-matter`, `remark`, `remark-html` (`src/content/blog/`)
* **Existing Static / SSG Routes:**
  * Core: `/`, `/about`, `/work`, `/solutions`, `/learn`, `/pricing`, `/faq`, `/contact`, `/privacy-policy`, `/terms-conditions`
  * Services: `/services`, `/services/[slug]` (16 programmatic service slugs in `services.ts`)
  * Blog: `/blog`, `/blog/[slug]` (6 markdown articles currently)
  * Dynamic API: `/api/chat` (AI assistant endpoint)
* **Build Status:** Verified passing cleanly with 42 static/SSG prerendered paths (`npm run build`).

### Forensic Gaps Identified
1. **Domain & Canonical Inconsistency:**
   * Live deployment on `https://ascenta-agency.vercel.app` serves sitemaps referencing `https://ascenta.dev`. Both domains resolve. Missing consistent canonical link tags on every single route.
2. **Schema & Structured Data Gaps:**
   * Only one rudimentary `Person` JSON-LD schema exists in root `layout.tsx`.
   * Missing `Organization`, `WebSite`, `ProfessionalService`, `Service`, `Article`, `FAQPage`, `BreadcrumbList`, and `TechArticle` schemas.
   * Service detail pages (`/services/[slug]`) and blog pages (`/blog/[slug]`) have zero JSON-LD schema markup.
3. **Robots.txt & Sitemap Limitations:**
   * `robots.ts` allows all but declares no crawler-specific rules for AI retrieval agents (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot, Applebot).
   * Missing `llms.txt` and `llms-full.txt` standard files for AI generative search engine grounding.
   * `sitemap.ts` lacks images, proper lastmod timestamps for services, and changefreq semantics.
4. **Metadata & Open Graph Discrepancies:**
   * Homepage (`/`) does not define its own specific page metadata (falls back to template).
   * `/pricing` has no metadata export.
   * Missing explicit Twitter creator/site handles, alternate languages/locales, and canonical URLs inside metadata.
5. **Content Library & Topical Authority:**
   * Blog currently has only 6 articles. Target is an authoritative 50–60 piece knowledge cluster covering Web Dev, AI Agents, Voice AI, CRM, n8n, and Business Automation.
   * Knowledge topics in `/learn` are stored in TS config rather than crawlable, deep static pages or rich schema structures.
6. **Local & International Signals:**
   * Ascenta lacks dedicated semantic entity anchors for "Lahore, Pakistan" and international B2B target zones (US, UK, UAE, KSA).

---

## 2. MODULAR MASTER DECOMPOSITION (A THROUGH Z + MISSING-INTELLIGENCE)

| Module ID | Module Title | Priority | Core Objective | Status |
|---|---|---|---|---|
| **A** | Research Intelligence | P0 | Search intent, semantic entities, keyword demand, and competitor matrix | READY |
| **B** | Technical SEO Foundation | P0 | Canonicalization, metadata normalization, robots.txt, sitemaps, headers | READY |
| **C** | Performance & Core Web Vitals | P1 | Sub-second LCP, 0 CLS, minimal INP, font/image optimizations | READY |
| **D** | Information Architecture | P1 | Topic-to-Entity-to-Service-to-Conversion hierarchy, breadcrumb routing | READY |
| **E** | Keyword & Entity Intelligence | P1 | Clustering head, long-tail, commercial, problem-solution & AI queries | READY |
| **F** | Content Topical Authority | P1 | Pillar/cluster content engine, scaling from 6 to 50+ authoritative guides | READY |
| **G** | Human-Quality Content Engine | P0 | Anti-slop, high-information-density, actionable workflows, zero fluff | READY |
| **H** | AEO (Answer Engine Optimization) | P0 | Direct answer blocks, Q&A architecture, passage extraction, definitions | READY |
| **I** | GEO (Generative Engine Optimization) | P0 | Machine-readable facts, LLM chunkability, `llms.txt`, citation anchors | READY |
| **J** | Entity & Knowledge Graph | P1 | Ascenta ↔ Rayyan ↔ Services ↔ Tech ↔ Lahore/Global ecosystem consistency | READY |
| **K** | Structured Data & Schema Suite | P0 | Comprehensive JSON-LD: Organization, Service, Article, FAQ, Breadcrumbs | READY |
| **L** | Deliberate Internal Linking Graph | P1 | Contextual cluster-to-service links, high-value keyword anchor distribution | READY |
| **M** | SERP Intelligence & Feature Capture | P2 | Featured snippets, PAA extraction, Knowledge Panel optimization | READY |
| **N** | Competitor Intelligence Matrix | P1 | Identify competitor content gaps, build superior original assets | READY |
| **O** | Authority & Digital PR Blueprint | P2 | Legitimate backlink targets, founder assets, tech directory listings | READY |
| **P** | Local SEO & Entity Verification | P1 | Lahore/Pakistan agency relevance, Google/Bing entity anchoring | READY |
| **Q** | International SEO & Geo-Targeting | P2 | Remote US, UK, UAE, KSA commercial intent capture | READY |
| **R** | Image, Multimedia & OG Asset SEO | P1 | Semantic SVG/WebP alt texts, dynamic OG cards, image sitemaps | READY |
| **S** | Conversion & Funnel SEO | P1 | High-intent CTA pathways, consultation booking, lead capture friction reduction | READY |
| **T** | Measurement & Analytics Framework | P2 | GA4, Microsoft Clarity, event tracking, search data telemetry | READY |
| **U** | Search Console & Bing Intelligence | P2 | GSC verification, Bing Webmaster tools indexing pipeline | READY |
| **V** | AI Citation & Retrieval Monitoring | P2 | Grounding checks across Perplexity, ChatGPT, Claude, Gemini | READY |
| **W** | Content Maintenance & Freshness Lifecycle | P2 | Content decay detection, update schedule, canonical consolidation | READY |
| **X** | Controlled Experimentation Framework | P3 | Title/meta CTR experiments, schema variations, CTA split testing | READY |
| **Y** | SEO Regression Testing Suite | P0 | Automated build-time validation: canonicals, meta length, noindex safety | READY |
| **Z** | Continuous Search Intelligence Loop | P3 | Ongoing competitive scanning and emerging intent detection | READY |

---

## 3. IMPLEMENTATION DAG & EXECUTION PHASES

```
[Phase 1: Foundations]
   Module A (Research & Competitor Matrix)
   ↓
   Module B (Technical SEO & Canonical/Robots/Sitemap Fixes)
   ↓
   Module K (Complete Schema & Structured Data System)
   ↓
   Module Y (Automated SEO Regression Testing Script)

[Phase 2: Generative & Answer Engine Optimization]
   Module H (AEO Answer Formats & Passage Optimization)
   ↓
   Module I (GEO, `llms.txt`, AI Crawler Policies, Machine-Readable Facts)
   ↓
   Module J (Entity Graph: Ascenta + Founder + Stack + Local/Global)

[Phase 3: Content Scaling & Topical Authority]
   Module D & E (Information Architecture & Keyword Fan-out)
   ↓
   Module F & G (Authority & Humanized Knowledge Engine Expansion)
   ↓
   Module L (Contextual Internal Link Graph)

[Phase 4: Local, International & Conversion Refinement]
   Module P & Q (Local Lahore + International Geo Optimization)
   ↓
   Module S (Search-to-Service Conversion Optimization)
   ↓
   Module R (Image/Media Optimization & Dynamic OpenGraph)

[Phase 5: Verification, Red-Teaming & Monitoring]
   Red-Team Audit ("Search as a Machine")
   ↓
   Automated SEO QA Script Run
   ↓
   Final Deliverable & Roadmap
```

---

## 4. CHECKPOINT LEDGER

* **CHECKPOINT 01 — Baseline Inspection & Audit:** COMPLETED. Project builds cleanly with Next.js 16. Technical baseline, existing dependencies, routes, and missing architecture documented.
* **CHECKPOINT 02 — Technical & Schema Core:** COMPLETED & VERIFIED.
  * Root `robots.ts` upgraded with explicit permissions for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, CCBot.
  * Root `sitemap.ts` upgraded: pruned non-200 `/pricing` redirect, enriched priority hierarchy for services and blog.
  * Complete JSON-LD schema library built in `src/lib/schema.ts` (`Organization`, `WebSite`, `Person`, `Service`, `TechArticle`, `FAQPage`, `BreadcrumbList`).
  * Injected dynamic schemas and canonical tags across `/layout.tsx`, `/services`, `/services/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/work`, `/solutions`, `/learn`, `/faq`, `/contact`, `/privacy-policy`, and `/terms-conditions`.
* **CHECKPOINT 03 — AEO, GEO & Machine Grounding:** COMPLETED & VERIFIED.
  * Created `public/llms.txt` and `public/llms-full.txt` standard grounding documents.
  * Explicit factual entity declarations linking Ascenta, Muhammad Rayyan, tech stack, Lahore/global locations, and case studies.
* **CHECKPOINT 04 — Content Expansion & Topic Clustering:** COMPLETED & VERIFIED.
  * Expanded `blogCategories` with 9 high-intent clusters (AI Agents, Voice AI, CRM & Operations, AI Automation, SEO & AEO, Web Development, Performance, UI Design, Business & Strategy).
  * Scaled knowledge engine to **27 deep, authoritative technical and strategic guides** with zero AI fluff across Web Engineering, Multi-Agent Systems, RAG Pipelines, Voice Telephony, WhatsApp Cloud API, and Local/International SEO.
* **CHECKPOINT 05 — Internal Linking & Graph Architecture:** COMPLETED & VERIFIED.
  * Added direct `Services` routing to main navigation.
  * Rewrote footer link clusters to connect directly into individual programmatic service routes (`/services/business-websites`, `/services/whatsapp-agent`, `/services/voice-calling-agent`, `/services/ai-automation`, `/services/crm-development`, `/services/instagram-crm`, etc.).
  * Embedded accessible semantic titles into Logo SVG.
  * Updated chatbot quick prompts to highlight WhatsApp agents, CRM systems, and real case studies.
* **CHECKPOINT 06 — Automated Regression QA & Red-Team Audit:** COMPLETED & PASSING.
  * Programmatic QA test suite (`scripts/seo-audit.ts`): 18/18 checks passed (100% green).
  * Full static prerender build (`npm run build`): Successfully compiled **63 static/SSG prerendered routes** with zero warnings or errors.
  * Red-teamed search engine and AI agent extraction: All routes declare canonicals, schema graphs, machine-readable facts, and semantic headings.
