import { ArrowRight } from "lucide-react";
import { Container } from "../container";
import { Logo } from "../logo";
import { Reveal } from "../motion/reveal";
import { MotionButton } from "../motion/motion-button";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-r from-[#232b73] via-[#171b3f] to-[#0a0c1c] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center select-none"
      >
        <Logo variant="white" size="text-[12vw]" className="whitespace-nowrap opacity-5" />
      </div>

      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-[20px] font-extrabold leading-tight text-white sm:text-4xl md:text-[44px]">
            Ready to Bring Your Next Digital
            <br /> Venture to Market?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Let&apos;s audit your requirements together. Our engineers are
            ready to scope
            <span className="hidden sm:inline">, architecturalize,</span> and
            build your digital solution.
          </p>

          <div className="mt-9 flex flex-row items-center justify-center gap-2 sm:gap-4">
            <MotionButton
              href="mailto:hello@techbridgers.com"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-2.5 text-[11px] font-semibold text-ink transition-colors hover:bg-white/90 sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Initiate Project Discovery
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </MotionButton>
            <MotionButton
              href="mailto:hello@techbridgers.com"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-navy px-3 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-navy-dark sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Schedule Briefing
            </MotionButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
