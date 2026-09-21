import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Services | Tech Bridgers",
  description:
    "Four connected service lines covering web, mobile, MVP, and product design, backed by a disciplined delivery process.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex-1">
        <PageHero
          eyebrow="Four connected service lines"
          heading={
            <>
              Everything you need to shape,
              <br className="hidden sm:block" /> build, and grow a digital
              product
            </>
          }
          subtext="From first workshop to post-launch support, our team brings product thinking, design, and engineering together."
        />
        <Services compact={false} />
        <Process />
      </main>
    </>
  );
}
