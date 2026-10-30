import type { Metadata } from "next";

// Verified public contact details (already published on the current site).
export const site = {
  name: "Minotti & Sawyer Associates",
  shortName: "Minotti | Sawyer",
  tagline: "Consultants in Executive Search",
  url: "https://www.minottisawyerassociates.com",
  domain: "www.minottisawyerassociates.com",
  email: "minottidjm@gmail.com",
  phoneDisplay: "704-414-0237",
  phoneHref: "tel:+17044140237",
  location: "Minnesota",
  description:
    "Executive search for technology, data and AI, finance, and supply chain leadership. Direct access to experienced search partners and personal attention throughout the search.",
};

export function mailto(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

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
