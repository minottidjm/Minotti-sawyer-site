export default function Footer() {
  return (
    <footer className="border-t border-[#E7E0D2] bg-[#19273E]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[#A68C5C]">Start the Conversation</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Schedule a Confidential 30-Minute Discussion
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
              Whether you are hiring for a critical leadership role, building a confidential search strategy, or exploring the executive talent market, Minotti & Sawyer Associates offers a focused 30-minute introductory discussion.
            </p>
          </div>
          <a
            href="https://calendar.app.google/aktDGw5varJkS6HU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-full bg-[#A68C5C] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#8f7649]"
          >
            Schedule a Confidential 30-Minute Discussion
          </a>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Minotti & Sawyer Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
