import { ClosingContact, FocusAreas } from "../components/sections";
import { ButtonLink, Container, SectionHeading } from "../components/ui";
import { services } from "../lib/content";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Retained executive search, engaged search, and embedded talent partnership from Minotti & Sawyer Associates, each shaped around your role, timing, and priorities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Search support shaped around your situation."
            intro={
              <p>
                Whether you are appointing an executive, making an important functional hire, or
                building out a leadership team, we will recommend the approach that fits. Each
                engagement is agreed with you before work begins.
              </p>
            }
          />
          <nav aria-label="Services on this page" className="mt-8">
            <ul className="flex flex-wrap gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="inline-block rounded-full border border-brand-sand bg-brand-cream px-4 py-2 font-medium text-brand-navy hover:border-brand-navy"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <Container className="space-y-10 py-16 sm:py-20">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className="rounded-3xl border border-brand-sand bg-white p-6 sm:p-10"
          >
            <h2 id={`${service.id}-heading`} className="font-serif text-3xl text-brand-navy">
              {service.title}
            </h2>
            <p className="mt-3 text-lg leading-8 text-stone-700">{service.summary}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">
                  The situation
                </h3>
                <p className="mt-3 leading-7 text-stone-700">{service.situation}</p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">
                  When it fits
                </h3>
                <ul className="mt-3 space-y-2 leading-7 text-stone-700">
                  {service.fits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">
                  What the engagement includes
                </h3>
                <ul className="mt-3 space-y-2 leading-7 text-stone-700">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <p className="mt-6 rounded-2xl bg-brand-cream p-4 leading-7 text-stone-700">
                    <strong className="text-brand-navy">Please note:</strong> {service.note}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-brand-sand pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl leading-7 text-stone-700">
                <strong className="text-brand-navy">Next step:</strong> {service.nextStep}
              </p>
              <ButtonLink href="/contact" className="shrink-0">
                Discuss a Hiring Need
              </ButtonLink>
            </div>
          </section>
        ))}
      </Container>

      <div className="border-t border-brand-sand">
        <FocusAreas />
      </div>
      <ClosingContact />
    </>
  );
}
