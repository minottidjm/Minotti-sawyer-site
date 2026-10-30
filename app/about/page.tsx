import { CandidateInvite, HowWeWork, Partners } from "../components/sections";
import { ButtonLink, Container, SectionHeading } from "../components/ui";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Minotti & Sawyer Associates is an executive search firm where clients and candidates work directly with the partners, Dan and Bill.",
  path: "/about",
});

const values = [
  {
    title: "Discretion",
    text: "Every engagement is handled with confidentiality. We protect clients and candidates alike throughout the process.",
  },
  {
    title: "Judgment",
    text: "We assess fit across leadership style, organizational context, and business stage, not just credentials.",
  },
  {
    title: "Process discipline",
    text: "Structured market mapping, direct outreach, and careful assessment, applied consistently to every search.",
  },
  {
    title: "Partnership",
    text: "You work directly with the partners from the first conversation through the final decision.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-sand bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="A search firm built on direct partner involvement."
            intro={
              <>
                <p>
                  Minotti &amp; Sawyer Associates helps companies find leaders who can guide growth,
                  lead transformation, and strengthen business performance.
                </p>
                <p className="mt-4">
                  We keep our practice focused so that every client works directly with Dan and Bill,
                  and every candidate gets the same personal attention.
                </p>
              </>
            }
          />
        </Container>
      </section>

      <HowWeWork />
      <Partners />

      <section aria-labelledby="values-heading" className="py-20 sm:py-24">
        <Container>
          <SectionHeading id="values-heading" eyebrow="Our Principles" title="What guides every engagement." />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="rounded-3xl border border-brand-sand bg-white p-8">
                <h3 className="font-serif text-2xl text-brand-navy">{value.title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{value.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/contact">Discuss a Hiring Need</ButtonLink>
          </div>
        </Container>
      </section>

      <CandidateInvite />
    </>
  );
}
