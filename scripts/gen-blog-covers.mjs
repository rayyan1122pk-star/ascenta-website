import fs from "fs";
import path from "path";

const BG = "#17100F";
const PANEL = "#221918";
const CRIMSON = "#E63946";
const CRIMSON_DIM = "#7A2229";
const GOLD = "#D4A24E";
const CREAM = "#EDE3DD";
const LINE = "rgba(237,227,221,0.14)";

function shell(seed, label, icon) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <radialGradient id="glow${seed}" cx="78%" cy="18%" r="55%">
      <stop offset="0%" stop-color="${CRIMSON}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${CRIMSON}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid${seed}" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${LINE}" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="${BG}" />
  <rect width="1200" height="800" fill="url(#grid${seed})" />
  <rect width="1200" height="800" fill="url(#glow${seed})" />
  <rect x="0.5" y="0.5" width="1199" height="799" fill="none" stroke="${LINE}" />
  ${icon}
  <text x="64" y="732" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="2" fill="${CREAM}" opacity="0.55">${label.toUpperCase()}</text>
</svg>`;
}

// 1. Website speed — speedometer + motion lines
const speed = `
  <g transform="translate(600,360)">
    <circle r="150" fill="none" stroke="${LINE}" stroke-width="2" />
    <path d="M -106 75 A 150 150 0 1 1 106 75" fill="none" stroke="${PANEL}" stroke-width="18" stroke-linecap="round" />
    <path d="M -106 75 A 150 150 0 0 1 40 -142" fill="none" stroke="${CRIMSON}" stroke-width="18" stroke-linecap="round" />
    <line x1="0" y1="0" x2="70" y2="-90" stroke="${GOLD}" stroke-width="6" stroke-linecap="round" />
    <circle r="14" fill="${GOLD}" />
    <line x1="-190" y1="-40" x2="-260" y2="-40" stroke="${CREAM}" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
    <line x1="-190" y1="0" x2="-280" y2="0" stroke="${CREAM}" stroke-width="4" opacity="0.35" stroke-linecap="round"/>
    <line x1="-190" y1="40" x2="-250" y2="40" stroke="${CREAM}" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  </g>`;

// 2. SEO basics — magnifying glass over rising bars
const seo = `
  <g transform="translate(560,420)">
    <rect x="-160" y="-40" width="46" height="140" rx="6" fill="${CRIMSON_DIM}" />
    <rect x="-96" y="-100" width="46" height="200" rx="6" fill="${CRIMSON}" opacity="0.85" />
    <rect x="-32" y="-160" width="46" height="260" rx="6" fill="${GOLD}" />
    <g transform="translate(110,-90)">
      <circle r="70" fill="none" stroke="${CREAM}" stroke-width="10" />
      <line x1="50" y1="50" x2="110" y2="110" stroke="${CREAM}" stroke-width="14" stroke-linecap="round" />
    </g>
  </g>`;

// 3. AI chatbots — chat bubble with spark
const chatbot = `
  <g transform="translate(600,380)">
    <rect x="-190" y="-120" width="380" height="220" rx="28" fill="${PANEL}" stroke="${LINE}" stroke-width="2" />
    <path d="M -60 100 L -60 150 L -10 100 Z" fill="${PANEL}" />
    <circle cx="-90" cy="-10" r="14" fill="${CRIMSON}" />
    <circle cx="0" cy="-10" r="14" fill="${GOLD}" />
    <circle cx="90" cy="-10" r="14" fill="${CREAM}" opacity="0.7" />
    <g transform="translate(210,-190)">
      <path d="M0 -34 L10 -10 L34 0 L10 10 L0 34 L-10 10 L-34 0 L-10 -10 Z" fill="${GOLD}" />
    </g>
  </g>`;

// 4. Redesign signs — old vs new browser windows
const redesign = `
  <g transform="translate(430,380)" opacity="0.55">
    <rect x="-160" y="-110" width="320" height="220" rx="10" fill="${PANEL}" stroke="${LINE}" stroke-width="2"/>
    <rect x="-160" y="-110" width="320" height="34" rx="10" fill="${CRIMSON_DIM}" />
    <line x1="-130" y1="-50" x2="60" y2="-50" stroke="${CREAM}" stroke-width="8" opacity="0.4" />
    <line x1="-130" y1="-10" x2="100" y2="-10" stroke="${CREAM}" stroke-width="8" opacity="0.3" />
    <line x1="-130" y1="30" x2="40" y2="30" stroke="${CREAM}" stroke-width="8" opacity="0.3" />
  </g>
  <path d="M 250 380 L 340 380" stroke="${GOLD}" stroke-width="4" marker-end="url(#arrow)" />
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="6" refY="6" orient="auto">
      <path d="M0,0 L12,6 L0,12 Z" fill="${GOLD}" />
    </marker>
  </defs>
  <g transform="translate(790,380)">
    <rect x="-170" y="-130" width="340" height="240" rx="16" fill="${PANEL}" stroke="${CRIMSON}" stroke-width="3"/>
    <rect x="-170" y="-130" width="340" height="40" rx="16" fill="${CRIMSON}" />
    <rect x="-130" y="-56" width="140" height="16" rx="8" fill="${CREAM}" />
    <rect x="-130" y="-24" width="260" height="10" rx="5" fill="${CREAM}" opacity="0.5" />
    <rect x="-130" y="2" width="220" height="10" rx="5" fill="${CREAM}" opacity="0.5" />
    <rect x="-130" y="40" width="110" height="34" rx="17" fill="${GOLD}" />
  </g>`;

// 5. UI trust — layout grid + swatches
const uitrust = `
  <g transform="translate(600,380)">
    <rect x="-220" y="-140" width="200" height="280" rx="14" fill="${PANEL}" stroke="${LINE}" stroke-width="2" />
    <rect x="0" y="-140" width="220" height="130" rx="14" fill="${PANEL}" stroke="${LINE}" stroke-width="2" />
    <rect x="0" y="10" width="220" height="130" rx="14" fill="${PANEL}" stroke="${LINE}" stroke-width="2" />
    <circle cx="-120" cy="-80" r="26" fill="${CRIMSON}" />
    <rect x="-170" y="-30" width="100" height="10" rx="5" fill="${CREAM}" opacity="0.6" />
    <rect x="-170" y="-6" width="70" height="10" rx="5" fill="${CREAM}" opacity="0.4" />
    <rect x="30" y="-110" width="60" height="60" rx="10" fill="${GOLD}" />
    <rect x="110" y="-110" width="60" height="60" rx="10" fill="${CRIMSON_DIM}" />
    <rect x="30" y="40" width="160" height="10" rx="5" fill="${CREAM}" opacity="0.5" />
    <rect x="30" y="66" width="120" height="10" rx="5" fill="${CREAM}" opacity="0.3" />
  </g>`;

// 6. Pricing breakdown — invoice + coin stack
const pricing = `
  <g transform="translate(520,380)">
    <rect x="-150" y="-160" width="260" height="320" rx="12" fill="${PANEL}" stroke="${LINE}" stroke-width="2" />
    <rect x="-118" y="-120" width="160" height="14" rx="7" fill="${CREAM}" opacity="0.7" />
    <line x1="-118" y1="-80" x2="80" y2="-80" stroke="${CREAM}" stroke-width="6" opacity="0.3" />
    <line x1="-118" y1="-48" x2="80" y2="-48" stroke="${CREAM}" stroke-width="6" opacity="0.3" />
    <line x1="-118" y1="-16" x2="80" y2="-16" stroke="${CREAM}" stroke-width="6" opacity="0.3" />
    <rect x="-118" y="90" width="196" height="40" rx="20" fill="${CRIMSON}" />
  </g>
  <g transform="translate(830,420)">
    <ellipse cx="0" cy="40" rx="80" ry="24" fill="${CRIMSON_DIM}" />
    <ellipse cx="0" cy="10" rx="80" ry="24" fill="${GOLD}" />
    <ellipse cx="0" cy="-20" rx="80" ry="24" fill="${GOLD}" opacity="0.85" />
    <text x="0" y="-14" text-anchor="middle" font-family="Arial" font-weight="700" font-size="26" fill="${BG}">$</text>
  </g>`;

const posts = [
  { slug: "website-speed", label: "Performance", icon: speed, seed: 1 },
  { slug: "seo-basics", label: "SEO", icon: seo, seed: 2 },
  { slug: "ai-chatbots", label: "AI", icon: chatbot, seed: 3 },
  { slug: "redesign-signs", label: "Web Development", icon: redesign, seed: 4 },
  { slug: "ui-trust", label: "UI Design", icon: uitrust, seed: 5 },
  { slug: "pricing-breakdown", label: "Business", icon: pricing, seed: 6 },
];

const dir = "public/blog";
fs.mkdirSync(dir, { recursive: true });

for (const post of posts) {
  fs.writeFileSync(path.join(dir, `${post.slug}.svg`), shell(post.seed, post.label, post.icon));
}

// Default fallback — the ascent-mark logo, centered
const defaultIcon = `
  <g transform="translate(600,380)">
    <rect x="-140" y="10" width="80" height="150" rx="14" fill="${CRIMSON_DIM}" />
    <rect x="-30" y="-60" width="80" height="220" rx="14" fill="${CRIMSON}" />
    <rect x="80" y="-150" width="80" height="310" rx="14" fill="${GOLD}" />
    <circle cx="120" cy="-180" r="16" fill="${GOLD}" />
  </g>`;
fs.writeFileSync(path.join(dir, "default-cover.svg"), shell(99, "Blog", defaultIcon));

console.log("Blog covers generated.");
