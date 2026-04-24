const contactDetails = [
  { label: "Email", value: "minottidjm@gmail.com" },
  { label: "Phone", value: "704-414-0237" },
  { label: "Website", value: "www.minottisawyerassociates.com" },
  { label: "Location", value: "Minnesota" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#F8F6F2]">
      {/* Hero */}
      <section className="border-b border-[#E7E0D2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Contact</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#19273E] sm:text-5xl">
            Let's discuss your leadership hiring priorities.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B5563]">
            Whether you are making a C-suite hire, building out your leadership bench,
            or need interim recruiting support, we would welcome the conversation.
          </p>
          <div className="mt-8 max-w-2xl rounded-[1.75rem] border border-[#E7E0D2] bg-[#F8F6F2] p-6">
            <p className="text-sm leading-7 text-[#4B5563]">
              Whether you are hiring for a critical leadership role, building a confidential search strategy, or exploring the executive talent market, Minotti & Sawyer Associates offers a focused 30-minute introductory discussion.
            </p>
            <a
              href="https://calendar.google.com/YOUR-BOOKING-LINK-HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[#A68C5C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8f7649]"
            >
              Schedule a Confidential 30-Minute Discussion
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Contact Details */}
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Reach Us</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#19273E]">
              Get in touch
            </h2>
            <div className="mt-8 space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-medium text-[#19273E]">{item.label}</div>
                  <div className="mt-1 text-base text-[#4B5563]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-[1.75rem] bg-[#19273E] p-8 text-white shadow-sm">
              <div className="text-sm uppercase tracking-[0.2em] text-[#D9D1C0]">Good to know</div>
              <p className="mt-4 text-base leading-7 text-slate-100">
                All conversations are held in strict confidence. We are happy to discuss your
                situation before you decide whether to engage.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2rem] border border-[#E7E0D2] bg-white p-10 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-[#49604A]">Send a Message</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#19273E]">
              Start the conversation
            </h2>
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-[#374151]">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="mt-2 block w-full rounded-xl border border-[#E7E0D2] bg-[#F8F6F2] px-4 py-3 text-sm text-[#19273E] placeholder-[#A09680] focus:border-[#19273E] focus:outline-none focus:ring-1 focus:ring-[#19273E]"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-[#374151]">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="mt-2 block w-full rounded-xl border border-[#E7E0D2] bg-[#F8F6F2] px-4 py-3 text-sm text-[#19273E] placeholder-[#A09680] focus:border-[#19273E] focus:outline-none focus:ring-1 focus:ring-[#19273E]"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#374151]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-xl border border-[#E7E0D2] bg-[#F8F6F2] px-4 py-3 text-sm text-[#19273E] placeholder-[#A09680] focus:border-[#19273E] focus:outline-none focus:ring-1 focus:ring-[#19273E]"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#374151]">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 block w-full rounded-xl border border-[#E7E0D2] bg-[#F8F6F2] px-4 py-3 text-sm text-[#19273E] placeholder-[#A09680] focus:border-[#19273E] focus:outline-none focus:ring-1 focus:ring-[#19273E]"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#374151]">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 block w-full rounded-xl border border-[#E7E0D2] bg-[#F8F6F2] px-4 py-3 text-sm text-[#19273E] placeholder-[#A09680] focus:border-[#19273E] focus:outline-none focus:ring-1 focus:ring-[#19273E]"
                  placeholder="Tell us about the role or situation you're navigating..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#19273E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#243553]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
