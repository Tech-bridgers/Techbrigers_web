"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "./container";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="#home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-black/10 px-2 py-1.5 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:text-navy ${
                i === 0 ? "" : ""
              }`}
            >
              {link.label}
              {i === 0 && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-navy" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white lg:inline-flex"
        >
          Contact us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Contact us
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
