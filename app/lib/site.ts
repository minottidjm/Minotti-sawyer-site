import type { Metadata } from "next";

// Public contact details approved by Dan and Bill. Each partner's own details are in
// lib/content.ts. The website domain stays minottisawyerassociates.com; email uses minottisawyer.com.
export const site = {
  name: "Minotti & Sawyer Associates",
  shortName: "Minotti | Sawyer",
  tagline: "Consultants in Executive Search",
  url: "https://www.minottisawyerassociates.com",
  domain: "www.minottisawyerassociates.com",
  // Main contact address, used for the prepared-email fallback (Dan).
  email: "dan@minottisawyer.com",
  location: "Minnesota",
  description:
    "Executive search for technology, data and AI, finance, and supply chain leadership. Direct access to experienced search partners and personal attention throughout the search.",
};

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Minotti & Sawyer Associates, Consultants in Executive Search",
};

// Child pages replace the parent's openGraph object, so build it in full each time.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}
