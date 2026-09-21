import Link from "next/link";
import { Code2, PenTool, Rocket, Smartphone } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";
import { Reveal } from "../motion/reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites and platforms designed around your business goals.",
    tags: ["Corporate websites", "E-commerce", "Web applications"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Useful mobile experiences engineered for reliability across iOS and Android.",
    tags: ["Product strategy", "Cross-platform builds", "Launch support"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "A focused path from idea to a testable product, without unnecessary complexity.",
    shortDescription: "A focused path from idea to a testable product.",
    tags: ["Scope definition", "Rapid prototyping", "Iterative delivery"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Clear interfaces grounded in user needs, business context, and strong systems.",
    shortDescription:
      "Clear interfaces grounded in user needs and business context.",
    tags: ["Research", "User flows", "Prototypes", "Design systems"],
  },
];

export function Services({ compact = true }: { compact?: boolean }) {
  return (
    <section
      id="services"
      className={
        compact ? "bg-mist py-16 sm:bg-white sm:py-24" : "bg-white py-16 sm:py-24"
      }
    >
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <Badge>What We Do</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
            Specialists across the product journey
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, description, shortDescription, tags }, index) => (
            <Reveal
              key={title}
              delay={(index % 2) * 0.1}
              className={
                compact
                  ? "sm:rounded-3xl sm:bg-mist sm:p-8 lg:p-10"
                  : "rounded-3xl bg-mist p-8 lg:p-10"
              }
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-muted">
                {compact && shortDescription ? (
                  <>
                    <span className="sm:hidden">{shortDescription}</span>
                    <span className="hidden sm:inline">{description}</span>
                  </>
                ) : (
                  description
                )}
              </p>
              <p
                className={`mt-4 text-sm font-semibold text-navy ${compact ? "hidden sm:block" : "block"}`}
              >
                {tags.join(" • ")}
              </p>
              <Link
                href="/#contact"
                className={`mt-6 items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white ${compact ? "hidden sm:inline-flex" : "inline-flex"}`}
              >
                Discuss this service
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
