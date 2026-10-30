import { connection } from "next/server";
import Link from "next/link";
import { submitCandidateIntroduction } from "../actions";
import InquiryForm from "../components/InquiryForm";
import { Container, SectionHeading } from "../components/ui";
import { isDeliveryConfigured } from "../lib/delivery";
import { candidateFields } from "../lib/forms";
import { mailto, pageMetadata, site } from "../lib/site";

export const metadata = pageMetadata({
  title: "Explore Your Next Move",
  description:
    "Introduce yourself to Minotti & Sawyer Associates. Share your experience and career interests for a conversation about your next chapter.",
  path: "/candidates",
});

const followUp = [
  "Dan and Bill read each introduction personally.",
  "When your background and interests align with a current or upcoming search, we will contact you to arrange a conversation.",
  "We keep your information confidential and use it only for search-related conversations with you.",
];

export default async function CandidatesPage() {
  // Check delivery settings per request; they are runtime configuration, not build output.
  await connection();
  const deliveryConfigured = isDeliveryConfigured();

  return (
    <>
      <section className="border-b border-brand-sand bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="For Candidates"
            title="Start with a conversation about what matters to you."
            intro={
              <p>
                You may be actively exploring opportunities or simply thinking about your next
                chapter. We welcome the chance to understand your experience, interests, and the
                kind of organization where you can make your strongest contribution.
              </p>
            }
          />
        </Container>
      </section>

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr]">
        <section aria-labelledby="intro-heading" className="rounded-3xl border border-brand-sand bg-white p-6 sm:p-10">
          <h2 id="intro-heading" className="font-serif text-2xl text-brand-navy sm:text-3xl">
            Introduce yourself
          </h2>
          <p className="mt-3 leading-7 text-stone-700">
            Please do not attach or paste a résumé. If there is a fit, we will ask how you would
            like to share it.
          </p>
          <div className="mt-6">
            <InquiryForm
              formId="candidate-intro"
              fields={candidateFields}
              action={submitCandidateIntroduction}
              submitLabel="Introduce Myself"
              emailSubject="Candidate introduction"
              successTitle="Thank you for introducing yourself."
              successBody="Your note has been sent to Dan and Bill. If your background aligns with a current or upcoming search, we will be in touch. We may not be able to reply to every introduction individually."
              deliveryConfigured={deliveryConfigured}
            />
          </div>
        </section>

        <aside className="space-y-8">
          <section aria-labelledby="next-heading" className="rounded-3xl bg-brand-navy p-8 text-white">
            <h2 id="next-heading" className="font-serif text-2xl">What happens next</h2>
            <ul className="mt-5 space-y-4 leading-7 text-slate-200">
              {followUp.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              We cannot respond to every introduction individually or guarantee a specific
              opportunity, but we value every note we receive.
            </p>
          </section>
          <section aria-labelledby="email-heading" className="rounded-3xl border border-brand-sand bg-white p-8">
            <h2 id="email-heading" className="font-serif text-2xl text-brand-navy">Prefer email?</h2>
            <p className="mt-3 leading-7 text-stone-700">
              Write to{" "}
              <a
                href={mailto("Candidate introduction")}
                className="break-all font-semibold text-brand-navy underline underline-offset-4"
              >
                {site.email}
              </a>{" "}
              with a short note about your interests.
            </p>
          </section>
          <p className="leading-7 text-stone-700">
            Hiring for your organization?{" "}
            <Link href="/contact" className="font-semibold text-brand-navy underline underline-offset-4">
              Discuss a hiring need
            </Link>
            .
          </p>
        </aside>
      </Container>
    </>
  );
}
