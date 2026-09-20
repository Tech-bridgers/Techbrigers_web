import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonial } from "@/components/sections/testimonial";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <Services />
        <CaseStudies />
        <Testimonial />
        <Process />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}
