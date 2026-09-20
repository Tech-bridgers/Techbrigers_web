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
            <p className="font-normal sm:font-bold">Connect</p>
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
            <p className="font-normal sm:font-bold">Offices</p>
            <p className="mt-4 text-sm text-white/70 sm:hidden">
              {OFFICES[0]} · {OFFICES[1]}
            </p>
            <p className="mt-3 text-sm text-white/70 sm:hidden">
              {OFFICES[2]}
            </p>
            <ul className="mt-4 hidden space-y-3 sm:block">
              {OFFICES.map((item) => (
                <li key={item} className="text-sm text-white/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-sm text-white/60 sm:hidden">
            © {new Date().getFullYear()} Tech Bridgers. Engineered for
            impact. · Privacy Policy · Terms of Service
          </p>
          <div className="hidden sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Tech Bridgers. Engineered for
              impact.
            </p>
            <p className="text-sm text-white/60">
              Privacy Policy • Terms of Service
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
