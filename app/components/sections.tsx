import Image from "next/image";
import Link from "next/link";
import { focusAreas, partners, processSteps, services, testimonials } from "../lib/content";
import { site } from "../lib/site";
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
          intro="Each engagement is shaped around the role, your timing, and how much support your team needs."
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

// Renders only once verified partner bios exist in lib/content.ts.
export function Partners() {
  if (partners.length === 0) return null;
  return (
    <section aria-labelledby="partners-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading id="partners-heading" eyebrow="Our Partners" title="Meet Dan and Bill." />
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {partners.map((partner) => (
            <li key={partner.name} className="rounded-3xl border border-brand-sand bg-white p-8">
              {partner.photo && (
                <Image
                  src={partner.photo.src}
                  alt={partner.photo.alt}
                  width={160}
                  height={160}
                  className="h-32 w-32 rounded-full object-cover"
                />
              )}
              <h3 className="mt-6 font-serif text-2xl text-brand-navy">{partner.name}</h3>
              <p className="text-brand-olive">{partner.role}</p>
              {partner.bio.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-stone-700">{paragraph}</p>
              ))}
              {partner.linkedin && (
                <a
                  href={partner.linkedin}
                  className="mt-6 inline-block font-semibold text-brand-navy underline underline-offset-4"
                >
                  {partner.name} on LinkedIn
                </a>
              )}
            </li>
          ))}
        </ul>
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
            <ul className="mt-3 space-y-2 leading-7 text-stone-700">
              <li>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="inline-block break-all py-1 font-semibold text-brand-navy underline underline-offset-4">
                  {site.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={site.phoneHref} className="inline-block py-1 font-semibold text-brand-navy underline underline-offset-4">
                  {site.phoneDisplay}
                </a>
              </li>
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
