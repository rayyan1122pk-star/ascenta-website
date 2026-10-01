import fs from "fs";
import path from "path";

interface AuditResult {
  passed: boolean;
  message: string;
}

const results: AuditResult[] = [];

function check(condition: boolean, passMsg: string, failMsg: string) {
  results.push({
    passed: condition,
    message: condition ? `✅ PASS: ${passMsg}` : `❌ FAIL: ${failMsg}`,
  });
}

console.log("=========================================");
console.log("🔍 ASCENTA AUTOMATED SEO & SCHEMA QA SUITE");
console.log("=========================================\n");

const rootDir = process.cwd();

// 1. Verify Robots.txt
const robotsPath = path.join(rootDir, "src/app/robots.ts");
check(fs.existsSync(robotsPath), "robots.ts exists", "robots.ts missing");
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, "utf8");
  check(robotsContent.includes("GPTBot"), "robots.ts specifies AI crawlers (GPTBot, ClaudeBot, etc.)", "robots.ts missing AI crawler rules");
  check(robotsContent.includes("sitemap:"), "robots.ts declares XML sitemap location", "robots.ts missing sitemap declaration");
}

// 2. Verify Sitemap.ts
const sitemapPath = path.join(rootDir, "src/app/sitemap.ts");
check(fs.existsSync(sitemapPath), "sitemap.ts exists", "sitemap.ts missing");
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
  check(!sitemapContent.includes('"${siteConfig.url}/pricing"'), "sitemap.ts does not include redirecting /pricing route", "sitemap.ts contains redirecting /pricing URL");
  check(sitemapContent.includes("services.map"), "sitemap.ts dynamically maps all service pages", "sitemap.ts missing service URLs");
  check(sitemapContent.includes("getAllBlogPosts()"), "sitemap.ts dynamically maps all blog posts", "sitemap.ts missing blog URLs");
}

// 3. Verify llms.txt & llms-full.txt
const llmsPath = path.join(rootDir, "public/llms.txt");
const llmsFullPath = path.join(rootDir, "public/llms-full.txt");
check(fs.existsSync(llmsPath), "public/llms.txt exists for AI search engines", "public/llms.txt missing");
check(fs.existsSync(llmsFullPath), "public/llms-full.txt exists with full entity facts", "public/llms-full.txt missing");

// 4. Verify Root Layout Schemas
const layoutPath = path.join(rootDir, "src/app/layout.tsx");
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, "utf8");
  check(layoutContent.includes("organizationJsonLd"), "layout.tsx injects Organization schema", "layout.tsx missing Organization schema");
  check(layoutContent.includes("websiteJsonLd"), "layout.tsx injects WebSite schema", "layout.tsx missing WebSite schema");
  check(layoutContent.includes("canonical:"), "layout.tsx sets default canonical metadata", "layout.tsx missing canonical");
}

// 5. Verify Service Detail Schema & Canonicals
const serviceSlugPath = path.join(rootDir, "src/app/services/[slug]/page.tsx");
if (fs.existsSync(serviceSlugPath)) {
  const serviceContent = fs.readFileSync(serviceSlugPath, "utf8");
  check(serviceContent.includes("generateServiceSchema"), "Service detail page includes Service JSON-LD schema", "Service detail page missing Service schema");
  check(serviceContent.includes("generateBreadcrumbSchema"), "Service detail page includes Breadcrumb JSON-LD schema", "Service detail page missing Breadcrumb schema");
  check(serviceContent.includes("canonical: canonicalUrl"), "Service detail page sets canonical URL", "Service detail page missing canonical URL");
}

// 6. Verify Blog Detail Schema & Canonicals
const blogSlugPath = path.join(rootDir, "src/app/blog/[slug]/page.tsx");
if (fs.existsSync(blogSlugPath)) {
  const blogContent = fs.readFileSync(blogSlugPath, "utf8");
  check(blogContent.includes("generateArticleSchema"), "Blog detail page includes TechArticle JSON-LD schema", "Blog detail page missing TechArticle schema");
  check(blogContent.includes("generateBreadcrumbSchema"), "Blog detail page includes Breadcrumb JSON-LD schema", "Blog detail page missing Breadcrumb schema");
  check(blogContent.includes("canonical: canonicalUrl"), "Blog detail page sets canonical URL", "Blog detail page missing canonical URL");
}

// Output summary
let allPass = true;
results.forEach((r) => {
  console.log(r.message);
  if (!r.passed) allPass = false;
});

console.log("\n-----------------------------------------");
if (allPass) {
  console.log("🎉 ALL AUTOMATED SEO/AEO/GEO CHECKS PASSED!");
} else {
  console.log("⚠️ SOME REGRESSION AUDITS FAILED.");
  process.exit(1);
}
