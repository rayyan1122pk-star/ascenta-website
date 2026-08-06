# Muhammad Rayyan — Portfolio

Premium portfolio website for a full stack web developer / AI automation developer, built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready structure, Supabase, and Resend.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, Server Actions)
- **Styling:** Tailwind CSS v4, shadcn/ui (Base UI primitives)
- **Animation:** Framer Motion, Lenis smooth scroll
- **Forms:** React Hook Form + Zod
- **Backend:** Supabase (contact submissions), Resend (email notifications)
- **Content:** Markdown-based blog (`src/content/blog`)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need. The site runs and builds fine with none of these set — the contact form will simply skip storing/emailing submissions until configured.

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | Store contact form submissions in the `contact_submissions` table (see `supabase/migrations`) |
| `RESEND_API_KEY` / `CONTACT_FROM_EMAIL` | Send an email notification for each new contact submission |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |

To set up Supabase: create a project, run the SQL in `supabase/migrations/0001_contact_submissions.sql` in the SQL editor, then copy the project URL and service role key into `.env.local`.

## Editable Content

All site copy, services, projects, pricing, testimonials, and FAQs live in `src/config/*.ts` — edit those files rather than the components. Blog posts are Markdown files in `src/content/blog`.

## Project Structure

```
src/
  app/            routes (App Router)
  components/     ui/ (shadcn primitives), shared/ (reusable pieces), sections/ (page sections)
  config/         all editable site content
  content/blog/   markdown blog posts
  lib/            utilities, blog loader, validation schemas
  providers/      Lenis + loading screen providers
```
