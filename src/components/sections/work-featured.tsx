import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";
import { Reveal } from "../motion/reveal";

const STATS = [
  { value: "38%", label: "More enquiries" },
  { value: "2.1×", label: "Faster onboarding" },
];

export function WorkFeatured() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-710/480 overflow-hidden rounded-3xl">
            <Image
              src="/images/work-featured.jpg"
              alt="Northstar Business Platform dashboard shown on a monitor and phone"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs font-bold tracking-wide text-navy uppercase">
              Featured Case Study
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Northstar Business Platform
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We transformed a complex service offering into a confident
              digital presence and a streamlined customer onboarding
              experience.
            </p>

            <div className="mt-6 flex flex-row gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-mist px-5 py-3.5"
                >
                  <p className="text-xl font-extrabold text-navy sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-dark hover:scale-[1.03] active:scale-[0.97]"
            >
              Read case study
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
