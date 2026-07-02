/**
 * Card data for the horizontal slider sections: achievements,
 * internships & live projects, and academic projects & research.
 * Sourced from LinkedIn (headline, About, posts) and the master resume.
 */

export type Card = {
  num: string;
  title: string;
  tag: string; // mono label — result / role / type
  detail: string;
  year: string;
  image?: string;
  imageAlt?: string;
  href?: string; // proof link or internal case-study link
  hrefLabel?: string;
};

export const achievements: Card[] = [
  {
    num: "A1",
    title: "Cornell Corning EMI Case Competition",
    tag: "International Runner-Up",
    detail:
      "Top finish among 1,400+ participants worldwide — one of eight teams to reach the finals at Cornell University, hosted with Corning Incorporated. Team Carpe Diem, IIM Indore.",
    year: "2025",
    image: "/achievements/cornell-emi.jpg",
    imageAlt:
      "IIM Indore congratulations post for Team Carpe Diem at the Cornell Corning EMI Case Competition 2025",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7385576707661119488/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A2",
    title: "L&T OutThink",
    tag: "National Second Runners-Up",
    detail:
      "Grand finale of Larsen & Toubro's national case competition, against finalist teams from IIM Shillong, MDI Gurgaon and IMT Ghaziabad. Team Kataklysm, IIM Indore.",
    year: "2025",
    image: "/achievements/lnt-outthink.jpg",
    imageAlt:
      "L&T OutThink 2025 grand finale — second runners-up card with trophies and prize cheque",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7312452427079675909/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A3",
    title: "Pre-Placement Interviews — BCG, Reckitt, JSW Energy, L&T",
    tag: "Awarded via case competitions",
    detail:
      "Earned pre-placement interviews at Boston Consulting Group, Reckitt, JSW Energy and Larsen & Toubro through corporate case-competition performances — the highest count of corporate case-competition wins at IIM Indore.",
    year: "2024–25",
  },
  {
    num: "A4",
    title: "Juspay Namma Yatri Open Mobility Challenge",
    tag: "National Winner",
    detail:
      "Won outright out of 70,980 teams and 170,000+ participants in Juspay's open mobility case challenge.",
    year: "2023",
  },
  {
    num: "A5",
    title: "IMA Ace the Case",
    tag: "National Second Runner-Up",
    detail:
      "Podium finish in the Institute of Management Accountants (IMA) India national case competition.",
    year: "2024",
  },
  {
    num: "A6",
    title: "Unstop Talent Park",
    tag: "National Second Runner-Up",
    detail:
      "Placed third nationally out of 18,000+ participants in the user-base expansion challenge (non-tech track).",
    year: "2024",
  },
  {
    num: "A7",
    title: "CMA & HP Government Merit Scholarships",
    tag: "₹150,000+ combined, on merit",
    detail:
      "Awarded the CMA (Certified Management Accountant) scholarship and the Mukhya Mantri Protsahan Yojana scholarship by the Government of Himachal Pradesh — each worth ₹75,000+.",
    year: "2023–24",
  },
  {
    num: "A8",
    title: "Tata Imagination Challenge",
    tag: "National Semi-Finalist",
    detail:
      "Semi-finalist out of 260,000+ participants in the Tata Group's flagship innovation challenge.",
    year: "2023",
  },
];

export const internships: Card[] = [
  {
    num: "I1",
    title: "Plum Insurance",
    tag: "Growth / referral systems",
    detail:
      "Built and shipped a production referral engine for the B2C insurance brand — webhooks, attribution, reward automation, WhatsApp journeys.",
    year: "2026",
    href: "/work/plum-referral-engine",
    hrefLabel: "Case study",
  },
  {
    num: "I2",
    title: "Unstop — Marketing & Growth",
    tag: "Live project",
    detail:
      "Worked on marketing models for Unstop Bridge and co-created a case-competition course: 4+ modules, 25+ videos, 10+ strategic frameworks. Analysed tier- and region-wise users, growth drivers and marketing KPIs.",
    year: "2024",
  },
  {
    num: "I3",
    title: "Suzlon Foundation",
    tag: "CSR intern",
    detail:
      "Authored the water-conservation domain report for the FY 2022–23 sustainability report, ran quantitative analysis across 6+ states, and documented the impact of 150+ CSR activities reaching 30,000+ people.",
    year: "2023",
  },
  {
    num: "I4",
    title: "LippaLama Palliative Care",
    tag: "Founder's office intern",
    detail:
      "Co-created and launched the NGO's official website with SEO baked in, built its payment gateway — establishing the trust's primary funding channel — and handled government compliance.",
    year: "2023",
  },
  {
    num: "I5",
    title: "Finlatics",
    tag: "Startup strategy + IB analyst",
    detail:
      "Case-based projects on launching and scaling startups; investment-banking analyst work covering company profiling, convertible-note investing, CLV and CAC modelling, and exit-strategy analysis.",
    year: "2024",
  },
];

export const research: Card[] = [
  {
    num: "R1",
    title: "Growth Gap between India & Africa",
    tag: "Econometrics",
    detail:
      "Analysed growth disparities with a focus on digital technology — cointegration tests and the ARDL approach across internet penetration, ICT exports and trade.",
    year: "2024",
  },
  {
    num: "R2",
    title: "Website Layout & Consumer Behaviour",
    tag: "2⁴ factorial experiment",
    detail:
      "Led a full factorial experiment on product-page design: emotional appeal vs. utility, colour, and layout structure against purchase decisions.",
    year: "2023",
  },
  {
    num: "R3",
    title: "Public Procurement via Smart Contracts",
    tag: "Systems design",
    detail:
      "Designed a public-tender system on smart contracts to eliminate unfair allotment practices, with working code demonstrating feasibility.",
    year: "2023",
  },
  {
    num: "R4",
    title: "Pradhan Mantri Awaas Yojana — Grameen",
    tag: "Policy analysis",
    detail:
      "Evaluated the scheme's implementation across 28 states with year-over-year outcome analysis, SWOT, and four strategic recommendations.",
    year: "2023",
  },
  {
    num: "R5",
    title: "Crowd Conformity & Consumer Behaviour",
    tag: "Research methodology",
    detail:
      "Designed an experiment on conformity effects in purchasing — hypothesis formulation, variable isolation, literature review and ethics evaluation.",
    year: "2022",
  },
];
