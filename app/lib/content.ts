// Site copy that is reused across pages. Anything marked "pending review" in
// REVIEW-CHECKLIST.md must be confirmed by Dan and Bill before launch.

export type Service = {
  id: string;
  title: string;
  summary: string;
  situation: string;
  includes: string[];
  fits: string[];
  nextStep: string;
  note?: string;
};

export const services: Service[] = [
  {
    id: "retained-executive-search",
    title: "Retained Executive Search",
    summary:
      "Dedicated, exclusive search for critical executive and senior leadership appointments.",
    situation:
      "You are filling a role that will shape the direction of the business: a C-suite seat, a general manager, or a senior leader whose decisions carry across the organization. The right person may not be looking, and the search needs discretion.",
    includes: [
      "Working sessions with your leadership team to define the role, priorities, and what success looks like",
      "Market mapping and direct outreach to leaders who are not actively looking",
      "Structured assessment of experience, leadership style, and fit with your culture",
      "A curated shortlist, interview coordination, and support through offer and acceptance",
      "Partner involvement from the first conversation through the final decision",
    ],
    fits: [
      "Executive and senior leadership appointments",
      "Confidential searches, including replacements and successions",
      "Roles where the candidate pool is small or hard to reach",
    ],
    nextStep:
      "Start with a conversation about the role and your priorities. We will recommend whether a retained search is the right fit.",
  },
  {
    id: "engaged-search",
    title: "Engaged Search",
    summary:
      "Focused recruiting for important senior and functional hires, with an upfront commitment and a more flexible engagement structure.",
    situation:
      "You have an important senior or functional hire, such as a director, vice president, or specialist leader, and you want a disciplined search without the full scope of a retained engagement.",
    includes: [
      "A clear role profile built with the hiring manager",
      "Targeted outreach across our network and the relevant market",
      "Screening and assessment before candidates reach your team",
      "Regular updates on progress and market feedback",
    ],
    fits: [
      "Senior functional and director-to-vice-president hires",
      "Teams that want search discipline with a more flexible structure",
      "Priority roles that have been hard to fill through job postings",
    ],
    nextStep:
      "Tell us about the role. We will discuss scope and structure and agree on the engagement before work begins.",
  },
  {
    id: "embedded-talent-partnership",
    title: "Embedded Talent Partnership",
    summary:
      "Recruiting leadership and execution support for a defined period during growth, transition, or a leadership buildout.",
    situation:
      "You need to hire several leaders or build out a team over the coming months, and you do not have the internal recruiting leadership to run it well.",
    includes: [
      "Hiring strategy and prioritization across open roles",
      "Role scorecards and a consistent interview process",
      "Sourcing, outreach, and pipeline management",
      "Regular pipeline reviews with your leadership team",
    ],
    fits: [
      "Periods of growth or leadership buildout",
      "Organizational transitions that need focused hiring support",
      "Companies without a senior internal recruiting leader",
    ],
    nextStep:
      "Share what you need to hire and over what period. We will discuss the scope and length of support that fits.",
    note: "This is recruiting support delivered by our team. It is not the placement of a fractional or interim executive.",
  },
];

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
  name: string;
  role: string;
  bio: string[];
  photo?: { src: string; alt: string };
  linkedin?: string;
};

// The partner section stays hidden until verified bios are added here.
// See REVIEW-CHECKLIST.md for what is needed.
export const partners: Partner[] = [];

export type Testimonial = { quote: string; attribution: string };

// Add only approved testimonials or search examples, with written permission.
export const testimonials: Testimonial[] = [];
