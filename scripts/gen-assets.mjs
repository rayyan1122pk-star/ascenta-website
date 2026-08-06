import fs from "fs";
import path from "path";

const PRIMARY = "#6366F1";
const ACCENT = "#06B6D4";
const BG = "#0b1023";

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function coverSvg({ title, seed = 0 }) {
  const angle = (seed * 47) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <linearGradient id="bg${seed}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle})">
      <stop offset="0%" stop-color="${BG}" />
      <stop offset="100%" stop-color="#050816" />
    </linearGradient>
    <radialGradient id="glow1_${seed}" cx="20%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.45" />
      <stop offset="100%" stop-color="${PRIMARY}" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2_${seed}" cx="85%" cy="80%" r="55%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.4" />
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid${seed}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148,163,184,0.08)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#bg${seed})" />
  <rect width="1200" height="800" fill="url(#grid${seed})" />
  <rect width="1200" height="800" fill="url(#glow1_${seed})" />
  <rect width="1200" height="800" fill="url(#glow2_${seed})" />
  <rect x="0.5" y="0.5" width="1199" height="799" fill="none" stroke="rgba(255,255,255,0.08)" />
  ${title ? `<text x="60" y="740" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="rgba(255,255,255,0.35)" font-weight="600">${title}</text>` : ""}
</svg>`;
}

function avatarSvg({ initials, seed = 0 }) {
  const hue1 = (seed * 63) % 360;
  const hue2 = (hue1 + 40) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="a${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="hsl(${hue1},70%,55%)" />
      <stop offset="100%" stop-color="hsl(${hue2},70%,45%)" />
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#a${seed})" />
  <text x="100" y="118" font-family="Arial, Helvetica, sans-serif" font-size="72" fill="white" font-weight="700" text-anchor="middle">${initials}</text>
</svg>`;
}

// Blog covers
const blogPosts = [
  "website-speed",
  "seo-basics",
  "ai-chatbots",
  "redesign-signs",
  "ui-trust",
  "pricing-breakdown",
];
ensureDir("public/blog");
blogPosts.forEach((slug, i) => {
  fs.writeFileSync(path.join("public/blog", `${slug}.svg`), coverSvg({ title: "", seed: i + 1 }));
});
fs.writeFileSync(path.join("public/blog", "default-cover.svg"), coverSvg({ title: "", seed: 99 }));

// Project covers + gallery
const projects = [
  "nova-realty",
  "flowstack",
  "atlas-clinic",
  "buildright",
  "counsel-partners",
  "pulse-crm",
  "lumen-ai",
  "aurora-shop",
];
projects.forEach((slug, i) => {
  const dir = path.join("public/projects", slug);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "cover.svg"), coverSvg({ title: slug, seed: i * 3 + 1 }));
  fs.writeFileSync(path.join(dir, "1.svg"), coverSvg({ title: "", seed: i * 3 + 2 }));
  fs.writeFileSync(path.join(dir, "2.svg"), coverSvg({ title: "", seed: i * 3 + 3 }));
});

// Testimonial avatars
const testimonials = [
  ["sarah", "SW"],
  ["daniel", "DC"],
  ["amina", "AF"],
  ["james", "JO"],
  ["laura", "LB"],
  ["michael", "MT"],
];
ensureDir("public/testimonials");
testimonials.forEach(([slug, initials], i) => {
  fs.writeFileSync(path.join("public/testimonials", `${slug}.svg`), avatarSvg({ initials, seed: i + 1 }));
});

console.log("Assets generated.");
