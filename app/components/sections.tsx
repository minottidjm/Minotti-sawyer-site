import Image from "next/image";
import Link from "next/link";
import {
  engagementTerms,
  focusAreas,
  partners,
  processSteps,
  services,
  testimonials,
  type Partner,
} from "../lib/content";
import GoogleCalendarButton from "./GoogleCalendarButton";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "./ui";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading" className="border-y border-brand-sand bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Three ways to work with us."
          intro={`Choose the model that fits the role and how you prefer to hire. ${engagementTerms}`}
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id} className="flex flex-col rounded-3xl border border-brand-sand bg-brand-cream p-8">
              <h3 className="font-serif text-2xl text-brand-navy">{service.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-stone-700">{service.summary}</p>
              <Link
                href={`/services#${service.id}`}
                className="mt-6 font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-brand-navy"
              >
                How {service.title} works<span className="sr-only"> (details)</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function FocusAreas() {
  return (
    <section id="focus-areas" aria-labelledby="focus-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="focus-heading"
          eyebrow="Focus Areas"
          title="Leaders for the challenges that matter most."
          intro="We concentrate on four areas where leadership decisions shape growth, transformation, and performance."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <li key={area.id} className="rounded-3xl border border-brand-sand bg-white p-8">
              <div className="h-1 w-12 rounded-full bg-brand-gold" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-brand-navy">{area.title}</h3>
              <p className="mt-3 leading-7 text-stone-700">{area.challenges}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function HowWeWork() {
  return (
    <section aria-labelledby="how-heading" className="bg-brand-navy py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow light>How We Work</Eyebrow>
            <h2 id="how-heading" className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Partner involvement from start to finish.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              When you work with Minotti &amp; Sawyer Associates, you work directly with Dan and Bill.
              The partners who learn your business are the same people who speak with candidates,
              share their candid view, and help you reach a decision.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              That continuity means fewer handoffs, a clearer picture of each candidate, and a search
              that stays true to what you told us matters.
            </p>
          </div>
          <ol className="space-y-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5 rounded-2xl bg-white/5 p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold font-serif text-lg text-brand-gold"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 leading-7 text-slate-300">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

const contactLink = {
  default: "font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-brand-navy",
  dark: "font-semibold text-white underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-white",
};

// A partner's email, mobile, and LinkedIn, each labeled and linked.
export function PartnerContact({ partner, tone = "default" }: { partner: Partner; tone?: "default" | "dark" }) {
  const label = `text-sm font-semibold uppercase tracking-[0.14em] ${tone === "dark" ? "text-brand-gold" : "text-brand-olive"}`;
  const link = `inline-block py-1 ${contactLink[tone]}`;
  // Labels sit above the values in narrow containers and beside them when there is room.
  const row = "flex flex-col @xs:flex-row @xs:items-baseline @xs:gap-x-4";
  const dt = `shrink-0 @xs:w-24 ${label}`;
  return (
    <dl className="@container space-y-2 leading-7 @xs:space-y-1">
      <div className={row}>
        <dt className={dt}>Email</dt>
        <dd className="min-w-0 [overflow-wrap:anywhere]">
          <a href={`mailto:${partner.email}`} aria-label={`Email ${partner.name} at ${partner.email}`} className={link}>
            {partner.email}
          </a>
        </dd>
      </div>
      <div className={row}>
        <dt className={dt}>Mobile</dt>
        <dd>
          <a href={partner.phoneHref} aria-label={`Call ${partner.name} at ${partner.phoneDisplay}`} className={link}>
            {partner.phoneDisplay}
          </a>
        </dd>
      </div>
      <div className={row}>
        <dt className={dt}>LinkedIn</dt>
        <dd>
          <a href={partner.linkedin} className={link}>
            {partner.name} on LinkedIn
          </a>
        </dd>
      </div>
    </dl>
  );
}

function PartnerPhoto({ partner, sizes, className }: { partner: Partner; sizes: string; className: string }) {
  return (
    <Image
      src={partner.photo.src}
      alt={partner.photo.alt}
      width={720}
      height={720}
      sizes={sizes}
      className={`aspect-square rounded-2xl object-cover ${className}`}
    />
  );
}

// Homepage: short introductions that link to the full biographies on About.
export function PartnersSummary() {
  return (
    <section aria-labelledby="partners-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="partners-heading"
          eyebrow="Our Partners"
          title="Meet Dan and Bill."
          intro="Two complementary perspectives: business transformation experience and executive search discipline."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <li key={partner.id} className="flex flex-col rounded-3xl border border-brand-sand bg-white p-6 sm:p-8">
              <div className="flex items-center gap-5">
                <PartnerPhoto partner={partner} sizes="(min-width: 640px) 128px, 96px" className="h-24 w-24 shrink-0 sm:h-32 sm:w-32" />
                <div>
                  <h3 className="font-serif text-2xl text-brand-navy">{partner.name}</h3>
                  <p className="text-stone-700">{partner.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-olive">{partner.perspective}</p>
              <p className="mt-2 flex-1 leading-7 text-stone-700">{partner.intro}</p>
              <div className="mt-6 border-t border-brand-sand pt-5">
                <PartnerContact partner={partner} />
              </div>
              <Link
                href={`/about#${partner.id}`}
                className="mt-5 inline-block self-start py-1 font-semibold text-brand-navy underline decoration-brand-gold decoration-2 underline-offset-4 hover:decoration-brand-navy"
              >
                Read {partner.firstName}&rsquo;s full biography
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// About page: full biographies.
export function PartnerBios() {
  return (
    <section id="partners" aria-labelledby="partners-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="partners-heading"
          eyebrow="Our Partners"
          title="Meet Dan and Bill."
          intro="Two complementary perspectives: business transformation experience and executive search discipline."
        />
        <div className="mt-12 space-y-8">
          {partners.map((partner) => (
            <article
              key={partner.id}
              id={partner.id}
              aria-labelledby={`${partner.id}-name`}
              className="grid gap-8 rounded-3xl border border-brand-sand bg-white p-6 sm:p-10 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] lg:gap-12"
            >
              <div>
                <PartnerPhoto
                  partner={partner}
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 240px"
                  className="w-full max-w-60 md:max-w-none"
                />
              </div>
              <div>
                <h3 id={`${partner.id}-name`} className="font-serif text-3xl text-brand-navy">{partner.name}</h3>
                <p className="mt-1 text-lg text-stone-700">{partner.role}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brand-olive">{partner.perspective}</p>
                {partner.bio.map((paragraph) => (
                  <p key={paragraph} className="mt-5 leading-7 text-stone-700">{paragraph}</p>
                ))}
                <div className="mt-8 border-t border-brand-sand pt-6">
                  <PartnerContact partner={partner} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Renders only once approved testimonials exist in lib/content.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="testimonials-heading" className="border-t border-brand-sand bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading id="testimonials-heading" eyebrow="Client Perspectives" title="In their words." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.quote}>
              <figure className="h-full rounded-3xl bg-brand-cream p-8">
                <blockquote className="font-serif text-xl leading-8 text-brand-navy">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-stone-600">{t.attribution}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CandidateInvite() {
  return (
    <section aria-labelledby="candidate-heading" className="border-t border-brand-sand bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl bg-brand-cream p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow>For Candidates</Eyebrow>
            <h2 id="candidate-heading" className="mt-3 font-serif text-3xl tracking-tight text-brand-navy sm:text-4xl">
              Start with a conversation about what matters to you.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              Whether you are actively exploring or simply thinking about your next chapter, we
              welcome the chance to learn about your experience and the kind of organization where
              you can make your strongest contribution.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonLink href="/candidates" className="w-full sm:w-auto">
              Explore Your Next Move
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ClosingContact() {
  return (
    <section aria-labelledby="contact-heading" className="border-t border-brand-sand py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Get in Touch"
          title="Choose the way that suits you."
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          <li className="flex flex-col rounded-3xl border border-brand-sand bg-white p-8">
            <h3 className="font-serif text-2xl text-brand-navy">Hiring a leader</h3>
            <p className="mt-3 flex-1 leading-7 text-stone-700">
              Share a few details about the role and your priorities, and we will follow up to
              arrange a conversation.
            </p>
            <ButtonLink href="/contact" className="mt-6">Discuss a Hiring Need</ButtonLink>
          </li>
          <li className="flex flex-col rounded-3xl border border-brand-sand bg-white p-8">
            <h3 className="font-serif text-2xl text-brand-navy">Considering a move</h3>
            <p className="mt-3 flex-1 leading-7 text-stone-700">
              Introduce yourself and tell us what you are looking for in your next role.
            </p>
            <ButtonLink href="/candidates" variant="secondary" className="mt-6">
              Explore Your Next Move
            </ButtonLink>
          </li>
          <li className="flex flex-col rounded-3xl border border-brand-sand bg-white p-8">
            <h3 className="font-serif text-2xl text-brand-navy">Talk with us directly</h3>
            <ul className="mt-3 space-y-4 leading-7 text-stone-700">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <p className="font-semibold text-brand-navy">{partner.name}</p>
                  <a href={`mailto:${partner.email}`} aria-label={`Email ${partner.name} at ${partner.email}`} className={`inline-block py-1 [overflow-wrap:anywhere] ${contactLink.default}`}>
                    {partner.email}
                  </a>
                  <br />
                  <a href={partner.phoneHref} aria-label={`Call ${partner.name} at ${partner.phoneDisplay}`} className={`inline-block py-1 ${contactLink.default}`}>
                    {partner.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <GoogleCalendarButton />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
