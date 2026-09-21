import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";
import { Reveal } from "../motion/reveal";

const CASE_STUDIES = [
  {
    image: "/images/case-finedge.jpg",
    category: "Fintech • Web Application",
    title: "FinEdge Banking",
    description:
      "A clearer way for growing teams to monitor cash flow and act on financial insights.",
  },
  {
    image: "/images/case-marketloop.jpg",
    category: "Ecommerce • Mobile App",
    title: "MarketLoop",
    description:
      "A mobile marketplace that helps local brands manage orders and build repeat customers.",
  },
  {
    image: "/images/case-carelink.jpg",
    category: "Healthtech • MVP Prototype",
    title: "CareLink Health",
    description:
      "A focused patient coordination platform designed and launched in twelve weeks.",
  },
  {
    image: "/images/case-foundry.jpg",
    category: "SaaS • Product Design",
    title: "Foundry Workspace",
    description:
      "A collaborative operations hub that turns fragmented workflows into one calm workspace.",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Badge>Selected Work</Badge>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
              Digital Products Built to Create Momentum
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-dark hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 2) * 0.1}
              className="overflow-hidden rounded-3xl border border-black/5"
            >
              <div className="relative aspect-600/338">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 560px, 90vw"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold tracking-wide text-navy uppercase">
                  {item.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.description}</p>
                <Link
                  href="/work"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
