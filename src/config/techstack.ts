export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Hosting" | "Design" | "Animation" | "AI" | "Tools";
}

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Node.js", category: "Backend" },
  { name: "Vercel", category: "Hosting" },
  { name: "GitHub", category: "Tools" },
  { name: "Figma", category: "Design" },
  { name: "Framer Motion", category: "Animation" },
  { name: "GSAP", category: "Animation" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "Resend", category: "Tools" },
  { name: "Stripe", category: "Tools" },
];

export const marqueeTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "GSAP",
  "Framer Motion",
  "Vercel",
  "GitHub",
  "OpenAI",
  "Claude",
];
