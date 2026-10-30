import Link from "next/link";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-2 text-brand-gold">{site.tagline}</p>
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            Direct access to experienced search partners, focused expertise, and personal attention
            throughout the search.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Explore</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/services" className="hover:text-white hover:underline">Services</Link></li>
            <li><Link href="/#focus-areas" className="hover:text-white hover:underline">Focus Areas</Link></li>
            <li><Link href="/about" className="hover:text-white hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:text-white hover:underline">Discuss a Hiring Need</Link></li>
            <li><Link href="/candidates" className="hover:text-white hover:underline">Explore Your Next Move</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Contact</p>
          <ul className="mt-4 space-y-2">
            <li><a href={`mailto:${site.email}`} className="inline-block break-all py-1 hover:text-white hover:underline">{site.email}</a></li>
            <li><a href={site.phoneHref} className="inline-block py-1 hover:text-white hover:underline">{site.phoneDisplay}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-400 lg:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
