import { ArrowRight } from "lucide-react";
import { Container } from "../container";
import { Logo } from "../logo";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-[#232b73] via-[#171b3f] to-[#0a0c1c] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center select-none"
      >
        <Logo variant="white" size="text-[12vw]" className="whitespace-nowrap opacity-5" />
      </div>

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[44px]">
          Ready to Bring Your Next Digital Venture to Market?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Let&apos;s audit your requirements together. Our engineers are
          ready to scope, architecturalize, and build your digital solution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@techbridgers.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:w-auto"
          >
            Initiate Project Discovery
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@techbridgers.com"
            className="inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark sm:w-auto"
          >
            Schedule Briefing
          </a>
        </div>
      </Container>
    </section>
  );
}
