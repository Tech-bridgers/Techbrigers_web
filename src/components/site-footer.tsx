import { Container } from "./container";
import { Logo } from "./logo";

const CONNECT = [
  { label: "hello@techbridgers.com", href: "mailto:hello@techbridgers.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter / X", href: "https://x.com" },
];

const OFFICES = ["Lagos, Nigeria", "San Francisco, USA", "Mon–Fri, 9am–6pm"];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              We bridge ambitious product concepts and robust modern
              software architectures to propel growing enterprises and
              startups forward.
            </p>
          </div>

          <div>
            <p className="font-bold">Connect</p>
            <ul className="mt-4 space-y-3">
              {CONNECT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold">Offices</p>
            <ul className="mt-4 space-y-3">
              {OFFICES.map((item) => (
                <li key={item} className="text-sm text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Tech Bridgers. Engineered for
            impact.
          </p>
          <p className="text-sm text-white/60">
            Privacy Policy • Terms of Service
          </p>
        </div>
      </Container>
    </footer>
  );
}
