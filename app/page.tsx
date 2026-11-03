import Image from "next/image";
import {
  CandidateInvite,
  ClosingContact,
  FocusAreas,
  HowWeWork,
  PartnersSummary,
  ServicesOverview,
  Testimonials,
} from "./components/sections";
import { ButtonLink, Container } from "./components/ui";
import { pageMetadata, site } from "./lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Executive Search",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} | Executive Search` },
};

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading">
        <div className="h-1 w-full bg-brand-gold" aria-hidden="true" />
        <Container className="grid gap-12 py-10 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-24">
          {/* Source order matches the mobile layout (buttons right after the intro);
              on large screens the buttons move below the second paragraph. */}
          <div className="flex flex-col">
            <h1
              id="hero-heading"
              className="font-serif text-4xl leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl"
            >
              The right leaders for what comes next.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700 sm:mt-6 sm:text-xl sm:leading-9">
              Minotti &amp; Sawyer Associates helps companies find leaders who can guide growth, lead
              transformation, and strengthen business performance.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:order-last lg:mt-10">
              <ButtonLink href="/contact">Discuss a Hiring Need</ButtonLink>
              <ButtonLink href="/candidates" variant="secondary">
                Explore Your Next Move
              </ButtonLink>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:mt-8 lg:mt-4">
              Our focus spans technology, data and AI, finance, and supply chain operations. You work
              directly with Dan and Bill through a search shaped around your business priorities,
              leadership needs, and culture.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/minotti-sawyer-logo2.png"
              alt=""
              width={480}
              height={480}
              className="mx-auto h-auto w-full max-w-sm mix-blend-darken"
              priority
            />
          </div>
        </Container>
      </section>

      <ServicesOverview />
      <FocusAreas />
      <HowWeWork />
      <PartnersSummary />
      <Testimonials />
      <CandidateInvite />
      <ClosingContact />
    </>
  );
}
