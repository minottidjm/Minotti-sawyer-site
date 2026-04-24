import Link from "next/link";
import GoogleCalendarButton from "../components/GoogleCalendarButton";

const services = [
  {
    title: "Retained Executive Search",
    text: "Exclusive search for mission-critical leadership roles where precision, discretion, and judgment matter.",
    details: [
      "Best for C-suite, GM, and critical VP hires",
      "Structured market mapping and direct outreach",
      "Partner-led process from kickoff through close",
    ],
  },
  {
    title: "Engaged Search",
    text: "A flexible model for important senior hires where clients want real search rigor with a more adaptable fee structure.",
    details: [
      "Ideal for director, VP, and priority functional roles",
      "Upfront commitment with aligned incentives",
      "More disciplined than a transactional contingency model",
    ],
  },
  {
    title: "Embedded Talent Partner",
    text: "Interim recruiting leadership and execution support for companies in periods of growth, transition, or transformation.",
    details: [
      "Useful during growth phases or leadership buildouts",
      "Supports hiring strategy, scorecards, and pipeline reviews",
      "Acts like an outsourced recruiting leader for a defined period",
    ],
  },
];

const focusAreas = [
  "Business & Technology Transformation",
  "Data & Analytics",
  "AI",
  "Finance & Supply Chain Operations",
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F6F2]">
      {/* Hero */}
      <section className="border-b border-[#E7E0D2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Services</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#19273E] sm:text-5xl">
            Search models built for high-stakes hiring.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563]">
            We do not operate like a volume recruiting firm. Our work is structured, targeted,
            and designed for roles where judgment matters.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-[#E7E0D2] bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-[#19273E]">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-[#4B5563]">{service.text}</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4B5563]">
                {service.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Focus */}
      <section className="border-t border-[#E7E0D2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Practice Focus</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#19273E] sm:text-4xl">
            Built for consequential hiring moments.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4B5563]">
            Premium executive search focused on Technology, Data & Analytics, AI, Finance & Supply Chain operations across a diverse set of industries.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#E7E0D2] bg-[#F8F6F2] p-6 text-base font-medium text-[#19273E] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E7E0D2] bg-[#F8F6F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-[#19273E] p-10 text-white shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to discuss a search?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#D9D1C0]">
              Whether you need a retained search, an engaged model, or embedded recruiting support,
              we would welcome the conversation.
            </p>
            <div className="mt-8">
              <GoogleCalendarButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
