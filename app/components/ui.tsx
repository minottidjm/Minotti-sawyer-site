import Link from "next/link";
import type { ReactNode } from "react";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition text-center";

const buttonVariants = {
  primary: "bg-brand-navy text-white hover:bg-brand-navy-light",
  secondary: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  light: "bg-white text-brand-navy hover:bg-brand-sand",
  outlineLight: "border-2 border-white/80 text-white hover:bg-white hover:text-brand-navy",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-brand-gold" : "text-brand-olive"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={`mt-3 font-serif tracking-tight text-brand-navy ${
          Heading === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {title}
      </Heading>
      {intro && <div className="mt-5 text-lg leading-8 text-stone-700">{intro}</div>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;
}
