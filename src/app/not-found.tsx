import Link from "next/link";
import { ArrowUpRight, Home, Search } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container className="flex flex-col items-center text-center">
        <span className="text-7xl font-bold text-primary sm:text-8xl">
          404
        </span>
        <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Page Not Found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back
          on track.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button variant="gradient" size="lg" className="rounded-full" render={<Link href="/" />}>
            <Home data-icon="inline-start" size={16} />
            Back to Home
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" render={<Link href="/services" />}>
            <Search data-icon="inline-start" size={16} />
            View Services
            <ArrowUpRight data-icon="inline-end" size={15} />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
