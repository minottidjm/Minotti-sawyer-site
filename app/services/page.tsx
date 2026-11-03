import { ClosingContact, FocusAreas } from "../components/sections";
import { ButtonLink, Container, SectionHeading } from "../components/ui";
import { engagementTerms, retiredServiceIds, services } from "../lib/content";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Retained, contingent, and exclusive search from Minotti & Sawyer Associates. For every engagement, scope, fees, and responsibilities are agreed before work begins.",
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
            title="Three ways to work with us."
            intro={
              <>
                <p>
                  Whether you are making a critical leadership appointment or want recruiting
                  support paid on a successful hire, we will talk through the role and recommend the
                  approach that fits.
                </p>
                <p className="mt-4 font-semibold text-brand-navy">{engagementTerms}</p>
              </>
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

      <Container className="relative space-y-8 py-16 sm:py-20">
        {/* Anchors from the previous service lineup land at the top of the list. */}
        {retiredServiceIds.map((id) => (
          <span key={id} id={id} aria-hidden="true" className="absolute top-0" />
        ))}
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className="relative rounded-3xl border border-brand-sand bg-white p-6 sm:p-10"
          >
            {service.legacyIds?.map((id) => (
              <span key={id} id={id} aria-hidden="true" className="absolute top-0" />
            ))}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <h2 id={`${service.id}-heading`} className="font-serif text-3xl text-brand-navy">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-700">{service.description}</p>
              </div>
              <div className="rounded-2xl bg-brand-cream p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">
                  At a glance
                </h3>
                <ul className="mt-3 space-y-2 leading-7 text-stone-700">
                  {service.terms.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <div className="flex flex-col gap-4 rounded-3xl bg-brand-navy p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-slate-200">
            <strong className="text-white">Not sure which model fits?</strong> Tell us about the role,
            and we will talk through the options with you before anything is agreed.
          </p>
          <ButtonLink href="/contact" variant="light" className="shrink-0">
            Discuss a Hiring Need
          </ButtonLink>
        </div>
      </Container>

      <div className="border-t border-brand-sand">
        <FocusAreas />
      </div>
      <ClosingContact />
    </>
  );
}
