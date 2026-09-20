import Image from "next/image";
import { Container } from "../container";

const STATS = [
  { value: "4+", label: "Years of Experience" },
  { value: "5+", label: "Successful Launches" },
  { value: "4+", label: "Core Service Lines" },
  { value: "100%", label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deepest pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-network.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-radial-[at_50%_35%] from-navy-glow/70 via-navy-deepest/90 via-60% to-navy-deepest" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
            Digital Product Studio
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-[54px] md:leading-[1.12]">
            Transforming Complex Ideas
            <br className="hidden md:block" /> Into High-Performance
            <br className="hidden md:block" /> Digital Products
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Tech Bridgers partners with ambitious brands and venture-backed
            startups to engineer modern websites, custom software, and
            robust mobile applications that scale.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark sm:w-auto"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/90 sm:w-auto"
            >
              View our work
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-y-10 rounded-3xl bg-white px-8 py-10 shadow-xl shadow-black/20 sm:mt-20 sm:px-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-navy sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
