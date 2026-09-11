import { redirect } from "next/navigation";

export default function PricingPage() {
  // Pricing has been completely removed in favor of a portfolio/credibility-focused architecture.
  redirect("/work");
}
