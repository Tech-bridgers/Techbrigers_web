import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WorkFeatured } from "@/components/sections/work-featured";
import { WorkGrid } from "@/components/sections/work-grid";

export const metadata: Metadata = {
  title: "Work | Tech Bridgers",
  description:
    "A selection of websites, mobile applications, and MVPs shaped around real users and measurable business needs.",
};

export default function WorkPage() {
  return (
    <>
      <main className="flex-1">
        <PageHero
          eyebrow="Selected partnerships"
          heading={
            <>
              Digital products built to create
              <br className="hidden sm:block" /> momentum
            </>
          }
          subtext="A selection of websites, mobile applications, and MVPs shaped around real users and measurable business needs."
        />
        <WorkFeatured />
        <WorkGrid />
      </main>
    </>
  );
}
