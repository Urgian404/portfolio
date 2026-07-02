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
      "Top finish among 1,400+ participants worldwide \u2014 one of eight teams to reach the finals at Cornell University, hosted with Corning Incorporated. Team Carpe Diem, IIM Indore.",
    year: "2025",
    image: "/achievements/cornell-emi.jpg",
    imageAlt:
      "IIM Indore congratulations post for Team Carpe Diem at the Cornell Corning EMI Case Competition 2025",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7385576707661119488/",
    hrefLabel: "Proof \u2014 LinkedIn post",
  },
  {
    num: "A2",
    title: "BCG ReDEIsign Case Competition 2.0",
    tag: "National Top 5 \u00b7 Awarded PPI by BCG",
    detail:
      "Placed in the national top five of Boston Consulting Group India's Re-DEIsign Case Competition 2.0 \u2014 and earned a pre-placement interview with BCG.",
    year: "2024",
    image: "/achievements/bcg-redeisign.jpg",
    imageAlt: "BCG Re-DEIsign Case Competition 2.0 event graphic",
    href: "https://www.linkedin.com/posts/deshna-jain-b5b5a5143_re-deisign-case-competition-20-bcg-india-activity-7228764126146150400-6LXS",
    hrefLabel: "Competition brief",
  },
  {
    num: "A3",
    title: "L&T OutThink",
    tag: "National Second Runners-Up \u00b7 Awarded PPI",
    detail:
      "Grand finale of Larsen & Toubro's national case competition, against finalist teams from IIM Shillong, MDI Gurgaon and IMT Ghaziabad. Team Kataklysm, IIM Indore.",
    year: "2025",
    image: "/achievements/lnt-outthink.jpg",
    imageAlt:
      "L&T OutThink 2025 grand finale \u2014 second runners-up card with trophies and prize cheque",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7315244800448913408/",
    hrefLabel: "Proof \u2014 LinkedIn post",
  },
  {
    num: "A4",
    title: "JSW Energy Case Challenge \u00d7 ISB",
    tag: "National Second Runner-Up \u00b7 Awarded PPI",
    detail:
      "Podium finish in Energize, JSW Energy's case challenge hosted with ISB's Advaita 2024 \u2014 and earned a pre-placement interview with JSW Energy.",
    year: "2024",
    image: "/achievements/jsw-energy-isb.jpg",
    imageAlt: "JSW Energy Case Challenge poster, ISB Advaita 2024",
    href: "https://unstop.com/competitions/jsw-energy-case-challenge-advaita-2024-indian-school-of-business-isb-1168747",
    hrefLabel: "Competition page",
  },
  {
    num: "A5",
    title: "Reckitt Career Compass \u2014 Finance Track",
    tag: "Campus Winner \u00b7 Awarded PPI",
    detail:
      "Won the campus round of Reckitt's Career Compass case competition on the finance track \u2014 and earned a pre-placement interview with Reckitt.",
    year: "2024",
    image: "/achievements/reckitt-career-compass.jpg",
    imageAlt: "Reckitt Career Compass 2024 case competition brief",
  },
  {
    num: "A6",
    title: "Juspay Namma Yatri Open Mobility Challenge",
    tag: "National Winner",
    detail:
      "Winner \u2014 Driver Earnings Improvement, Driver Empowerment track \u2014 out of 70,980 participants from premier institutes across India. Conceptualised the Co-pilot for Auto Drivers model.",
    year: "2023",
    image: "/achievements/namma-yatri.jpg",
    imageAlt:
      "Official Namma Yatri winners list showing Urgian Padma as track winner",
    href: "https://www.nammayatri.in/challenge",
    hrefLabel: "Challenge page",
  },
  {
    num: "A7",
    title: "Unstop Talent Park (Non-Tech)",
    tag: "National Second Runner-Up \u00b7 Awarded internship",
    detail:
      "Placed third nationally out of 18,000+ participants in the user-base expansion challenge \u2014 awarded an internship with Unstop.",
    year: "2024",
    image: "/achievements/unstop-talent-park.jpg",
    imageAlt: "Unstop Talent Park competition banner",
  },
  {
    num: "A8",
    title: "IMA Student Case Competition, India",
    tag: "National Second Runner-Up \u00b7 CMA (US) scholarship",
    detail:
      "Podium at the Institute of Management Accountants' India finals \u2014 awarded a complete scholarship for both rounds of the CMA (US) program.",
    year: "2024",
    image: "/achievements/ima-scc.jpg",
    imageAlt: "IMA Student Case Competition 2024 graphic",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7171114570688712704/",
    hrefLabel: "Proof \u2014 LinkedIn post",
  },
  {
    num: "A9",
    title: "JSW Challenge",
    tag: "National Semi-Finalist \u2014 top 50 in India",
    detail:
      "Among the top 50 entries in India in JSW Group's flagship B-school case challenge.",
    year: "2024",
    image: "/achievements/jsw-challenge.jpg",
    imageAlt: "The JSW Challenge season 4 poster",
  },
  {
    num: "A10",
    title: "Samsung E.D.G.E. 9.0",
    tag: "Regional Finalist",
    detail:
      "Regional finalist in season nine of Samsung's flagship campus case program, contested across 40 premier campuses with 15,000+ students.",
    year: "2024",
    image: "/achievements/samsung-edge.jpg",
    imageAlt: "Samsung storefront logo",
  },
  {
    num: "A11",
    title: "CMA & HP Government Merit Scholarships",
    tag: "\u20b9150,000+ combined, on merit",
    detail:
      "Awarded the CMA (Certified Management Accountant) scholarship and the Mukhya Mantri Protsahan Yojana scholarship by the Government of Himachal Pradesh \u2014 each worth \u20b975,000+.",
    year: "2023\u201324",
  },
  {
    num: "A12",
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
