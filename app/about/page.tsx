import Link from "next/link";

const differentiators = [
  "We work with clients on leadership hires where judgment, discretion, and alignment matter.",
  "Our process is designed for quality of hire, not recruiting volume.",
  "We are especially well-suited to founder-led, investor-backed, and middle-market companies navigating growth, succession, or transformation.",
];

const values = [
  {
    title: "Discretion",
    text: "Every engagement is handled with confidentiality. We protect clients and candidates alike throughout the process.",
  },
  {
    title: "Judgment",
    text: "We assess fit across leadership style, organizational context, and business stage — not just credentials.",
  },
  {
    title: "Process Discipline",
    text: "Structured market mapping, direct outreach, and a rigorous assessment process designed for consequential hires.",
  },
  {
    title: "Partnership",
    text: "Partner-led from kickoff through close. You will always work directly with a senior member of the firm.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F2]">
      {/* Hero */}
      <section className="border-b border-[#E7E0D2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">About</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#19273E] sm:text-5xl">
            Executive search with a business-first point of view.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563]">
            Minotti | Sawyer is built for leadership hires where the cost of getting it wrong is high.
            We partner with founders, investors, boards, and executive teams to identify, attract,
            assess, and close leaders for roles that shape pace, culture, execution quality, and
            enterprise value.
          </p>
        </div>
      </section>

      {/* What Distinguishes the Firm */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Our Approach</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#19273E] sm:text-4xl">
              Built for companies that cannot afford to get it wrong.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4B5563]">
              Most executive search firms are built for volume. We are not. Minotti | Sawyer is a boutique firm
              designed for the searches where process discipline, market knowledge, and a genuine understanding
              of the business context make a material difference in outcome.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#4B5563]">
              We work across industries but have deep experience in private equity portfolio companies,
              industrial and manufacturing businesses, and founder-led growth companies.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#19273E] p-8 text-white shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-[#D9D1C0]">What distinguishes the firm</div>
            <ul className="mt-6 space-y-4 text-base leading-7 text-slate-100">
              {differentiators.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#E7E0D2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">How We Work</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#19273E] sm:text-4xl">
            The principles behind every engagement.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.75rem] border border-[#E7E0D2] bg-[#F8F6F2] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#19273E]">{value.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#4B5563]">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E7E0D2] bg-[#F8F6F2]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-[#E7E0D2] bg-[#F8F6F2] p-10 shadow-sm">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#19273E] sm:text-4xl">
                Let's start a conversation.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#4B5563]">
                If you are navigating a leadership hire where the stakes are high, we would welcome the conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#19273E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#243553]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-[#D9D1C0] px-6 py-3 text-sm font-medium text-[#374151] transition hover:border-[#19273E] hover:text-[#19273E]"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
