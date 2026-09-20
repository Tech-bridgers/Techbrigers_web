import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";

const POINTS = [
  "Co-creative strategic partnerships",
  "Elite engineering and user-experience standards",
  "Transparent, proactive communication protocols",
];

export function WhoWeAre() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Badge>Who We Are</Badge>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
              Bridging the Gap Between Ambition and Cutting-Edge Engineering
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              At Tech Bridgers, we believe beautiful design and powerful
              technology must coexist. We operate as a dedicated extension of
              your team, leveraging agile product frameworks to build secure,
              robust, and highly scalable solutions designed to disrupt
              markets.
            </p>

            <ul className="mt-6 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-652/438 overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="Tech Bridgers team reviewing a product analytics dashboard together"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 rounded-2xl bg-navy px-6 py-5 text-white shadow-lg shadow-black/20">
              <p className="text-2xl font-extrabold sm:text-3xl">100%</p>
              <p className="mt-1 text-sm text-white/80">
                On-time product delivery
              </p>
            </div>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-2 self-start rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Learn About Our Methodology
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
