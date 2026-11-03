import { connection } from "next/server";
import Link from "next/link";
import { submitClientInquiry } from "../actions";
import GoogleCalendarButton from "../components/GoogleCalendarButton";
import InquiryForm from "../components/InquiryForm";
import { PartnerContact } from "../components/sections";
import { Container, SectionHeading } from "../components/ui";
import { isDeliveryConfigured } from "../lib/delivery";
import { partners } from "../lib/content";
import { clientFields } from "../lib/forms";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: "Discuss a Hiring Need",
  description:
    "Tell Minotti & Sawyer Associates about a leadership hire. Share the role and your priorities, and the partners will follow up to arrange a conversation.",
  path: "/contact",
});

export default async function ContactPage() {
  // Check delivery settings per request; they are runtime configuration, not build output.
  await connection();
  const deliveryConfigured = isDeliveryConfigured();

  return (
    <>
      <section className="border-b border-brand-sand bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="For Clients"
            title="Discuss a hiring need."
            intro={
              <p>
                Tell us about the leadership role you are filling and what matters most to your
                business. Dan and Bill will review your note and follow up to arrange a conversation.
              </p>
            }
          />
        </Container>
      </section>

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr]">
        <section aria-labelledby="inquiry-heading" className="rounded-3xl border border-brand-sand bg-white p-6 sm:p-10">
          <h2 id="inquiry-heading" className="font-serif text-2xl text-brand-navy sm:text-3xl">
            Tell us about the role
          </h2>
          <div className="mt-6">
            <InquiryForm
              formId="client-inquiry"
              fields={clientFields}
              action={submitClientInquiry}
              submitLabel="Discuss My Hiring Need"
              emailSubject="Hiring inquiry"
              successTitle="Thank you. Your message has been sent."
              successBody="Dan and Bill will review your note and reply by email to arrange a conversation. If your need is time-sensitive, you are welcome to call us as well."
              deliveryConfigured={deliveryConfigured}
            />
          </div>
          <p className="mt-6 text-sm leading-6 text-stone-600">
            We use the information you share only to respond to your inquiry.
          </p>
        </section>

        <aside aria-labelledby="direct-heading" className="space-y-8">
          <div className="rounded-3xl bg-brand-navy p-8 text-white">
            <h2 id="direct-heading" className="font-serif text-2xl">Prefer to reach us directly?</h2>
            <p className="mt-3 leading-7 text-slate-300">
              You are welcome to contact either partner by email, phone, or LinkedIn.
            </p>
            <ul className="mt-6 space-y-6">
              {partners.map((partner) => (
                <li key={partner.id} className="border-t border-white/15 pt-5">
                  <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                  <p className="mb-3 text-sm text-slate-300">{partner.role}</p>
                  <PartnerContact partner={partner} tone="dark" />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-sand bg-white p-8">
            <h2 className="font-serif text-2xl text-brand-navy">Book a time</h2>
            <p className="mt-3 leading-7 text-stone-700">
              Choose a time for a 30-minute introductory conversation.
            </p>
            <div className="mt-5">
              <GoogleCalendarButton />
            </div>
          </div>
          <p className="leading-7 text-stone-700">
            Exploring your own next role?{" "}
            <Link href="/candidates" className="font-semibold text-brand-navy underline underline-offset-4">
              Introduce yourself here
            </Link>
            .
          </p>
        </aside>
      </Container>
    </>
  );
}
