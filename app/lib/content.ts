// Site copy that is reused across pages. Anything marked "pending review" in
// REVIEW-CHECKLIST.md must be confirmed by Dan and Bill before launch.

export type Service = {
  id: string;
  title: string;
  // One-line description for the homepage card.
  summary: string;
  // Approved description (confirmed by Dan and Bill).
  description: string;
  // Key terms restated from the approved description. Do not add fees, periods, or guarantees.
  terms: string[];
  // Earlier anchor IDs that should still land on this service.
  legacyIds?: string[];
};

// Applies to every engagement model.
export const engagementTerms =
  "For every engagement, scope, fees, and responsibilities are agreed before work begins.";

export const services: Service[] = [
  {
    id: "retained-search",
    title: "Retained Search",
    summary:
      "A dedicated engagement for critical leadership appointments, with fees paid at agreed stages.",
    description:
      "A dedicated engagement for critical leadership appointments. Clients retain Minotti & Sawyer to conduct a focused search, with fees paid at agreed stages. Dan and Bill guide the process from defining the role through candidate assessment and selection.",
    terms: [
      "A dedicated, focused search for a critical leadership appointment",
      "Fees paid at agreed stages",
      "Dan and Bill guide the process from defining the role through assessment and selection",
    ],
    legacyIds: ["retained-executive-search"],
  },
  {
    id: "contingent-search",
    title: "Contingent Search",
    summary:
      "Recruiting support on a non-exclusive basis, with payment due upon a successful hire.",
    description:
      "Recruiting support on a non-exclusive basis, with payment due upon a successful hire. We identify and engage candidates aligned with the client’s requirements while the client remains free to work with other recruiting partners.",
    terms: [
      "Non-exclusive: you remain free to work with other recruiting partners",
      "Payment due upon a successful hire",
      "We identify and engage candidates aligned with your requirements",
    ],
  },
  {
    id: "exclusive-search",
    title: "Exclusive Search",
    summary:
      "Minotti & Sawyer as your sole recruiting partner for an agreed period, with payment due upon a successful hire.",
    description:
      "Minotti & Sawyer serves as the sole recruiting partner for an agreed period, with payment due upon a successful hire.",
    terms: [
      "Minotti & Sawyer is your sole recruiting partner for an agreed period",
      "Payment due upon a successful hire",
    ],
  },
];

// Anchors from the previous service lineup with no direct successor. They land on the
// top of the service list so old links still resolve.
export const retiredServiceIds = ["engaged-search", "embedded-talent-partnership"];

export type FocusArea = {
  id: string;
  title: string;
  challenges: string;
};

export const focusAreas: FocusArea[] = [
  {
    id: "technology-transformation",
    title: "Technology & Business Transformation",
    challenges:
      "Modernizing systems, changing operating models, and delivering large programs take leaders who can connect technology decisions to business results and bring people along with the change.",
  },
  {
    id: "data-analytics-ai",
    title: "Data, Analytics & AI",
    challenges:
      "Turning data into decisions and putting AI to practical use need leaders who can build capable teams, set sound governance, and show measurable value to the business.",
  },
  {
    id: "finance-leadership",
    title: "Finance Leadership",
    challenges:
      "Growth, investment, and transition put pressure on planning, reporting, and controls. Finance leaders need to be trusted partners to the CEO and board as well as strong operators.",
  },
  {
    id: "supply-chain-operations",
    title: "Supply Chain & Operations",
    challenges:
      "Cost pressure, disruption, and scale demand operations leaders who can strengthen resilience, improve performance, and lead teams across sites and partners.",
  },
];

export const processSteps = [
  {
    title: "Understand the business",
    text: "We start with your priorities, the challenges the role must address, and the culture the leader will join.",
  },
  {
    title: "Define the role",
    text: "Together we agree on the responsibilities, experience, and leadership qualities that matter most.",
  },
  {
    title: "Reach the market",
    text: "We map the market and reach out directly to leaders, including people who are not actively looking.",
  },
  {
    title: "Assess and present",
    text: "We assess candidates carefully and present a focused slate with our candid perspective on each.",
  },
  {
    title: "Support the decision",
    text: "We coordinate interviews, gather feedback, and help both sides through offer and acceptance.",
  },
];

export type Partner = {
  id: string;
  name: string;
  firstName: string;
  role: string;
  perspective: string;
  // Short introduction for the homepage.
  intro: string;
  // Full biography for the About page.
  bio: string[];
  photo: { src: string; alt: string };
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  linkedin: string;
};

// Biographies are condensed from the partners' own introduction materials (pending final
// copy review). Placement counts, program values, and revenue figures are intentionally omitted.
export const partners: Partner[] = [
  {
    id: "dan-minotti",
    name: "Dan Minotti",
    firstName: "Dan",
    role: "Co-Founder & Partner",
    perspective: "Business and transformation perspective",
    intro:
      "Dan brings 27 years of consulting experience at Accenture and EY, advising senior executives and leading complex SAP, technology, and business transformations.",
    bio: [
      "Dan Minotti is a co-founder and partner of Minotti & Sawyer Associates. He brings 27 years of consulting experience advising senior executives and leading complex business and technology transformations.",
      "Dan spent more than two decades at Accenture, where he served as a Managing Director and led the Midwest Consumer Goods and Agribusiness practice. He later served as a Technology Partner at EY. His work includes SAP and cloud transformations spanning supply chain, manufacturing, procurement, finance, and commercial operations, working directly with C-suite leaders to connect technology investments with business priorities.",
      "That experience shapes his approach to search. Having led the kinds of programs clients hire executives to deliver, Dan knows how to evaluate leadership judgment, execution capability, and the ability to build effective teams.",
    ],
    photo: { src: "/partners/dan-minotti.jpg", alt: "Portrait of Dan Minotti" },
    email: "dan@minottisawyer.com",
    phoneDisplay: "704-414-0237",
    phoneHref: "tel:+17044140237",
    linkedin: "https://www.linkedin.com/in/daniel-minotti-57905b3/",
  },
  {
    id: "bill-sawyer",
    name: "Bill Sawyer",
    firstName: "Bill",
    role: "Co-Founder & Partner",
    perspective: "Executive search and talent perspective",
    intro:
      "Bill brings more than 25 years of experience recruiting senior executives, across executive search firms, corporate talent leadership, and EY Consulting.",
    bio: [
      "Bill Sawyer is a co-founder and partner of Minotti & Sawyer Associates. He brings more than 25 years of experience identifying, attracting, and recruiting senior executives.",
      "Before co-founding Minotti & Sawyer, Bill served as an Executive Talent Acquisition Leader for EY Consulting, where he led recruiting strategy for Partner, Principal, and Managing Director roles across SAP, supply chain and operations, cybersecurity, AI and digital, and technology transformation. Earlier in his career, he held leadership roles with Grant Thornton, Carlson Companies, and executive search firms.",
      "Having worked on both sides of executive search, inside corporations and with search firms, Bill understands what clients need from a search partner and what candidates expect from the process. He combines market knowledge and leadership assessment with a clear sense of what motivates accomplished executives to consider a new opportunity.",
    ],
    photo: { src: "/partners/bill-sawyer.jpg", alt: "Portrait of Bill Sawyer" },
    email: "bill@minottisawyer.com",
    phoneDisplay: "952-738-1531",
    phoneHref: "tel:+19527381531",
    linkedin: "https://www.linkedin.com/in/sawyerbill/",
  },
];

export type Testimonial = { quote: string; attribution: string };

// Add only approved testimonials or search examples, with written permission.
export const testimonials: Testimonial[] = [];
