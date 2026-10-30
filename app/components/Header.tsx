"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#focus-areas", label: "Focus Areas" },
  { href: "/about", label: "About" },
  { href: "/candidates", label: "For Candidates" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the menu after navigating to a new page.
  if (open && openedOn !== pathname) setOpen(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => (href.startsWith("/#") ? false : pathname === href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-sand bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-1.5 sm:px-6 lg:px-8 lg:py-2">
        <Link href="/" className="shrink-0" aria-label="Minotti & Sawyer Associates home">
          {/* Cropped copy of minotti-sawyer-logo2.png with the surrounding whitespace removed. */}
          <Image
            src="/minotti-sawyer-logo-cropped.png"
            alt=""
            width={147}
            height={104}
            className="h-24 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="text-base text-stone-700 transition hover:text-brand-navy aria-[current=page]:font-semibold aria-[current=page]:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-navy px-5 py-2.5 text-base font-semibold text-white transition hover:bg-brand-navy-light"
          >
            Discuss a Hiring Need
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex items-center gap-2 rounded-full border-2 border-brand-navy px-4 py-2 text-base font-semibold text-brand-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            setOpenedOn(pathname);
            setOpen((value) => !value);
          }}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
          Menu
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="border-t border-brand-sand bg-brand-cream lg:hidden"
      >
        <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="block rounded-lg px-3 py-3 text-lg text-brand-navy hover:bg-brand-sand/60 aria-[current=page]:font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-navy px-5 py-3 text-center text-lg font-semibold text-white"
            >
              Discuss a Hiring Need
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
