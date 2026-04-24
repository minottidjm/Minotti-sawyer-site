import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-[#E7E0D2] bg-[#F8F6F2]/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/">
          <Image src="/minotti-sawyer-logo2.png" alt="Minotti | Sawyer — Consultants in Executive Search" width={160} height={160} className="h-16 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#4B5563] md:flex">
          <Link href="/services" className="transition hover:text-[#19273E]">Services</Link>
          <Link href="/about" className="transition hover:text-[#19273E]">About</Link>
          <Link href="/contact" className="transition hover:text-[#19273E]">Contact</Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-[#19273E] px-5 py-2 text-sm font-medium text-[#19273E] transition hover:bg-[#19273E] hover:text-white"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
