import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";

export function Testimonial() {
  return (
    <section className="bg-mist py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Client Praise</Badge>

          <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy">
            <Quote className="h-5 w-5 text-navy" fill="currentColor" />
          </div>

          <p className="mt-8 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            &quot;Tech Bridgers transformed our manual business processes
            into a cohesive SaaS product
            <span className="sm:hidden">.</span>
            <span className="hidden sm:inline">
              {" "}
              that saved us hundreds of staff hours. Their engineering
              standards are second to none, and they communicated
              proactively at every phase.
            </span>
            &quot;
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="relative hidden h-12 w-12 overflow-hidden rounded-full sm:block">
              <Image
                src="/images/testimonial-avatar.jpg"
                alt="Marcus Chen"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-ink">Marcus Chen</p>
              <p className="text-sm text-muted">
                VP of Operations, Northstar Global
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
