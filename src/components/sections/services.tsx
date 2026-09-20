import { Code2, PenTool, Rocket, Smartphone } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";

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
    tags: ["Scope definition", "Rapid prototyping", "Iterative delivery"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Clear interfaces grounded in user needs, business context, and strong systems.",
    tags: ["Research", "User flows", "Prototypes", "Design systems"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>What We Do</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
            Specialists across the product journey
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, description, tags }) => (
            <div
              key={title}
              className="rounded-3xl bg-mist p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-muted">{description}</p>
              <p className="mt-4 text-sm font-semibold text-navy">
                {tags.join(" • ")}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Discuss this service
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
