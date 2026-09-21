import { Container } from "../container";
import { Badge } from "../badge";
import { Reveal } from "../motion/reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover & Scope",
    description:
      "Deep analytical workshops to scope architecture and business logic before building.",
  },
  {
    number: "02",
    title: "User-First Design",
    description:
      "Interactive prototyping, high-fidelity layouts, and iterative usability testing cycles.",
  },
  {
    number: "03",
    title: "Robust Engineering",
    description:
      "Writing test-driven, responsive codebases built for elastic cloud deployment.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "System performance monitoring, seamless deployments, and iterative maintenance scaling.",
  },
];

export function Process() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Our Blueprint</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
            A Disciplined Path to Launch
          </h2>
          <p className="mt-4 text-muted">
            Our modular methodology mitigates shipping risks, aligning
            software architecture tightly with product roadmap objectives.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal
              key={step.number}
              delay={(index % 4) * 0.08}
              className="rounded-3xl bg-mist p-7"
            >
              <p className="text-4xl font-extrabold text-navy">
                {step.number}
              </p>
              <h3 className="mt-4 text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
