import Link from "next/link";
import Image from "next/image";
import GoogleCalendarButton from "./components/GoogleCalendarButton";

export default function MinottiSawyerHomepage() {
  const brand = {
    name: 'Minotti | Sawyer',
    subtitle: 'Consultants in Executive Search',
    domain: 'www.minottisawyerassociates.com'
  };

  const services = [
    {
      title: 'Retained Executive Search',
      text: 'Exclusive search for mission-critical leadership roles where precision, discretion, and judgment matter.',
      details: [
        'Best for C-suite, GM, and critical VP hires',
        'Structured market mapping and direct outreach',
        'Partner-led process from kickoff through close'
      ]
    },
    {
      title: 'Engaged Search',
      text: 'A flexible model for important senior hires where clients want real search rigor with a more adaptable fee structure.',
      details: [
        'Ideal for director, VP, and priority functional roles',
        'Upfront commitment with aligned incentives',
        'More disciplined than a transactional contingency model'
      ]
    },
    {
      title: 'Embedded Talent Partner',
      text: 'Interim recruiting leadership and execution support for companies in periods of growth, transition, or transformation.',
      details: [
        'Useful during growth phases or leadership buildouts',
        'Supports hiring strategy, scorecards, and pipeline reviews',
        'Acts like an outsourced recruiting leader for a defined period'
      ]
    }
  ];

  const aboutPoints = [
    'We work with clients on leadership hires where judgment, discretion, and alignment matter.',
    'Our process is designed for quality of hire, not recruiting volume.',
    'We are especially well-suited to founder-led, investor-backed, and middle-market companies navigating growth, succession, or transformation.'
  ];

  const insights = [
    {
      title: 'Minnesota Executive Hiring Outlook',
      category: 'Local Market',
      text: 'A monthly perspective on Minnesota leadership hiring demand, notable business activity, and regional talent movement.'
    },
    {
      title: 'U.S. Leadership Talent Market Report',
      category: 'National Market',
      text: 'A concise view of national executive search conditions, functional demand, and broader market signals affecting leadership hiring.'
    },
    {
      title: 'Leadership Hiring Briefs',
      category: 'Advisory',
      text: 'Short insights for clients on compensation pressure, process design, market mapping, and how to run a stronger executive search.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#19273E]">
      <main>
        <div className="h-1 w-full bg-[#A68C5C]" />
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-[#D9D1C0] px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#49604A]">
              Boutique, partner-led, high-touch search
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#19273E] sm:text-5xl lg:text-6xl">
              Leadership hiring for companies that cannot afford to get it wrong.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563]">
              Minotti | Sawyer partners with founders, investors, boards, and executive teams on
              high-stakes leadership hires. Our work is built for roles where judgment,
              discretion, and process discipline materially shape the outcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-[#19273E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#243553]"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#D9D1C0] px-6 py-3 text-sm font-medium text-[#374151] transition hover:border-[#19273E] hover:text-[#19273E]"
              >
                Schedule a Conversation
              </Link>
            </div>
            <div className="mt-8 rounded-[1.75rem] border border-[#E7E0D2] bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-[#4B5563]">
                Whether you are hiring for a critical leadership role, building a confidential search strategy, or exploring the executive talent market, Minotti & Sawyer Associates offers a focused 30-minute introductory discussion.
              </p>
              <div className="mt-4">
                <GoogleCalendarButton />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#E7E0D2] bg-white p-8 shadow-sm">
            <div className="rounded-[1.5rem] border border-[#E7E0D2] bg-[#F8F6F2] p-10 flex items-center justify-center">
              <Image src="/minotti-sawyer-logo2.png" alt="Minotti | Sawyer — Consultants in Executive Search" width={400} height={400} className="w-full max-w-xs h-auto" />
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Services</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Search models built for high-stakes hiring.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We do not operate like a volume recruiting firm. Our work is structured,
                targeted, and designed for roles where judgment matters.
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[1.75rem] border border-stone-200 p-8 shadow-sm">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.text}</p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                    {service.details.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="focus" className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.2em] text-stone-500">Practice Focus</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for consequential hiring moments.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Premium executive search focused on Technology, Data & Analytics, AI, Finance & Supply Chain operations across a diverse set of industries.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {['Technology', 'Industrial & Manufacturing', 'Finance & Operations Leadership', 'Growth & Transformation'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 text-base font-medium text-slate-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-stone-500">About</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Executive search with a business-first point of view.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Minotti | Sawyer is built for leadership hires where the cost of getting it wrong is high.
                We partner with founders, investors, boards, and executive teams to identify, attract,
                assess, and close leaders for roles that shape pace, culture, execution quality, and
                enterprise value.
              </p>
            </div>
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-300">What distinguishes the firm</div>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-100">
                {aboutPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="insights" className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
              <div className="lg:col-span-1">
                <div className="text-sm uppercase tracking-[0.2em] text-stone-500">Insights</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Market intelligence that reinforces credibility.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  A future insights section can feature Minnesota and U.S. hiring trends, leadership
                  market commentary, and client-facing talent updates.
                </p>
              </div>
              {insights.slice(0, 2).map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.2em] text-stone-500">{item.category}</div>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[#E7E0D2] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="rounded-[2rem] bg-[#F8F6F2] p-10 shadow-sm">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Contact</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let's discuss your leadership hiring priorities.
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#4B5563]">
                  Whether you are making a C-suite hire, building out your leadership bench,
                  or need interim recruiting support, we would welcome the conversation.
                </p>
                <div className="mt-8 grid gap-4 text-base text-[#374151] sm:grid-cols-2">
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="mt-1 text-[#4B5563]">minottidjm@gmail.com</div>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="mt-1 text-[#4B5563]">704-414-0237</div>
                  </div>
                  <div>
                    <div className="font-medium">Website</div>
                    <div className="mt-1 text-[#4B5563]">{brand.domain}</div>
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="mt-1 text-[#4B5563]">Minnesota</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
