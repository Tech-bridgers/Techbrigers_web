import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";
import { Reveal } from "../motion/reveal";

const PROJECTS = [
  {
    image: "/images/case-finedge.jpg",
    category: "Fintech • Web application",
    title: "FinEdge Banking",
    description:
      "A clearer way for growing teams to monitor cash flow and act on financial insights.",
  },
  {
    image: "/images/case-marketloop.jpg",
    category: "Commerce • Mobile application",
    title: "MarketLoop",
    description:
      "A mobile marketplace that helps local brands manage orders and build repeat customers.",
  },
  {
    image: "/images/case-carelink.jpg",
    category: "Healthtech • MVP",
    title: "CareLink Health",
    description:
      "A focused patient coordination platform designed and launched in twelve weeks.",
  },
  {
    image: "/images/case-foundry.jpg",
    category: "SaaS • Product design",
    title: "Foundry Workspace",
    description:
      "A collaborative operations hub that turns fragmented workflows into one calm workspace.",
  },
];

export function WorkGrid() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>Our Work</Badge>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[42px]">
            Built across industries and stages
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 2) * 0.1}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
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
                <p className="text-sm font-bold text-navy">{item.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.description}</p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline"
                >
                  View project
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
