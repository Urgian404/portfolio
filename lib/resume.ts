/**
 * Card data for the horizontal slider sections: achievements,
 * internships & live projects, and academic projects & research.
 * Sourced from LinkedIn (headline, About, honors & awards, posts)
 * and the master resume.
 */

export type Card = {
  num: string;
  title: string;
  tag: string; // mono label — result / role / type
  points: string[]; // bullet points
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
    points: [
      "Top finish among 1,400+ participants worldwide",
      "One of eight teams to reach the finals at Cornell University, hosted with Corning Incorporated",
      "Team Carpe Diem, IIM Indore",
    ],
    year: "2025",
    image: "/achievements/cornell-emi.jpg",
    imageAlt:
      "IIM Indore congratulations post for Team Carpe Diem at the Cornell Corning EMI Case Competition 2025",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7385576707661119488/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A2",
    title: "BCG ReDEIsign Case Competition 2.0",
    tag: "National Top 5 · Awarded PPI by BCG",
    points: [
      "Policy case: welfare and inclusion of India's 135M-strong LGBTQ+ community",
      "Proposed 'Rainbow Credits' — a carbon-credit-style tradable credit nudging corporate investment in LGBTQ+ welfare via CSR/BRSR, regulated by a new LEEO body",
      "Backed by a shelter-and-schooling network for homeless trans teens across 56 cities, a ₹10,000 Cr 3-year budget and a 100-day action plan",
      "National top five of 1,500+ registrations across 11 MBA campuses · PPI with BCG",
    ],
    year: "2024",
    image: "/achievements/bcg-redeisign.jpg",
    imageAlt:
      "BCG event spotlight naming Urgian Padma, IIM Indore, among the top 5 teams",
    href: "https://www.linkedin.com/posts/deshna-jain-b5b5a5143_re-deisign-case-competition-20-bcg-india-activity-7228764126146150400-6LXS",
    hrefLabel: "Winners announcement",
  },
  {
    num: "A3",
    title: "L&T OutThink",
    tag: "National Second Runners-Up · Awarded PPI",
    points: [
      "Grand finale of Larsen & Toubro's national case competition",
      "Beat finalist teams from IIM Shillong, MDI Gurgaon and IMT Ghaziabad",
      "Team Kataklysm, IIM Indore",
    ],
    year: "2025",
    image: "/achievements/lnt-outthink.jpg",
    imageAlt:
      "L&T OutThink 2025 grand finale — second runners-up card with trophies and prize cheque",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7315244800448913408/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A4",
    title: "JSW Energy Case Challenge × ISB",
    tag: "National Second Runner-Up · Awarded PPI",
    points: [
      "Strategy case: how JSW Energy should enter offshore wind — a market India hasn't built yet (5 GW national target by 2030)",
      "Recommended 750 MW of floating offshore wind paired with green-hydrogen production as the storage play, meeting JSW's 40 GWh storage target",
      "Hybrid government–developer business model, LCOE cost structure, and a 5-year phased roadmap starting with a 200–300 MW pilot",
      "National second runner-up at ISB's Advaita 2024 · PPI with JSW Energy",
    ],
    year: "2024",
    image: "/achievements/jsw-energy-isb.jpg",
    imageAlt: "Receiving the JSW Energy case challenge trophy on stage",
    href: "https://www.linkedin.com/posts/prakritish-bailung-310073232_thrilled-to-share-that-my-team-maanav-rathore-ugcPost-7260521236655460352-nKwx",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A5",
    title: "Reckitt Career Compass — Finance Track",
    tag: "Campus Winner · Awarded PPI",
    points: [
      "Won the campus round on the finance track — Team Dissenter, IIM Indore",
      "Awarded a pre-placement interview with Reckitt",
    ],
    year: "2024",
    image: "/achievements/reckitt-career-compass.jpg",
    imageAlt:
      "Reckitt Career Compass 2024 campus winners — IIM Indore finance track, Team Dissenter with Urgian Padma",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7262400054005563392/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A6",
    title: "Juspay Namma Yatri Open Mobility Challenge",
    tag: "National Winner",
    points: [
      "Winner out of 70,980 participants — Driver Earnings Improvement, Driver Empowerment track",
      "Conceptualised a 'Co-pilot for Auto Drivers': an ML model using real-time population-density data to route drivers to high-demand zones",
      "Cut driver waiting time ~20%, raising rides per hour and earnings without longer shifts",
    ],
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
    tag: "National Second Runner-Up · Awarded internship",
    points: [
      "Third nationally out of 18,000+ participants",
      "User-base expansion challenge — awarded an internship with Unstop",
    ],
    year: "2024",
    image: "/achievements/unstop-talent-park.jpg",
    imageAlt: "Unstop Talent Park competition banner",
  },
  {
    num: "A8",
    title: "IMA Student Case Competition, India",
    tag: "National Second Runner-Up · CMA (US) scholarship",
    points: [
      "Podium at the Institute of Management Accountants' India finals — a pure finance case, taken on with no prior finance background",
      "A month of intensive prep with a newly formed team, guided by seniors and faculty",
      "Awarded a complete scholarship for both rounds of the CMA (US) program",
    ],
    year: "2024",
    image: "/achievements/ima-scc.jpg",
    imageAlt:
      "IMA Ace the Case 2024 India finals — second runner-up team on stage",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7167951231745736705/",
    hrefLabel: "Proof — LinkedIn post",
  },
  {
    num: "A9",
    title: "JSW Challenge",
    tag: "National Semi-Finalist — top 50 in India",
    points: [
      "Among the top 50 entries in India",
      "JSW Group's flagship B-school case challenge",
    ],
    year: "2024",
    image: "/achievements/jsw-challenge.jpg",
    imageAlt: "The JSW Challenge season 4 poster",
  },
  {
    num: "A10",
    title: "Samsung E.D.G.E. 9.0",
    tag: "Regional Finalist",
    points: [
      "Regional finalist in season nine of Samsung's flagship campus case program",
      "Contested across 40 premier campuses with 15,000+ students",
    ],
    year: "2024",
    image: "/achievements/samsung-edge.jpg",
    imageAlt: "Samsung storefront logo",
  },
  {
    num: "A11",
    title: "CMA & HP Government Merit Scholarships",
    tag: "₹150,000+ combined, on merit",
    points: [
      "CMA (Certified Management Accountant) scholarship — ₹75,000+ on merit",
      "Mukhya Mantri Protsahan Yojana scholarship by the Government of Himachal Pradesh — ₹75,000",
    ],
    year: "2023–24",
  },
  {
    num: "A12",
    title: "Tata Imagination Challenge",
    tag: "National Semi-Finalist",
    points: [
      "Semi-finalist out of 260,000+ participants",
      "Tata Group's flagship innovation challenge",
    ],
    year: "2023",
  },
];

export const internships: Card[] = [
  {
    num: "I1",
    title: "Plum Insurance",
    tag: "Growth / referral systems",
    points: [
      "Built and shipped a production referral engine for the B2C insurance brand",
      "Webhooks, attribution, reward automation, WhatsApp journeys",
    ],
    year: "2026",
    href: "/work/plum-referral-engine",
    hrefLabel: "Case study",
  },
  {
    num: "I2",
    title: "Unstop — Marketing & Growth",
    tag: "Live project",
    points: [
      "Worked on marketing models for Unstop Bridge",
      "Co-created a case-competition course: 4+ modules, 25+ videos, 10+ strategic frameworks",
      "Analysed tier- and region-wise users, growth drivers and marketing KPIs",
    ],
    year: "2024",
  },
  {
    num: "I3",
    title: "Suzlon Foundation",
    tag: "CSR intern",
    points: [
      "Authored the water-conservation domain report for the FY 2022–23 sustainability report",
      "Quantitative analysis of transport and personnel data across 6+ states",
      "Documented the impact of 150+ CSR activities reaching 30,000+ people",
    ],
    year: "2023",
  },
  {
    num: "I4",
    title: "LippaLama Palliative Care",
    tag: "Founder's office intern",
    points: [
      "Co-created and launched the NGO's official website with SEO baked in",
      "Built its payment gateway — the trust's primary funding channel",
      "Handled government compliance for the charitable trust",
    ],
    year: "2023",
  },
  {
    num: "I5",
    title: "Finlatics",
    tag: "Startup strategy + IB analyst",
    points: [
      "Case-based projects on launching and scaling startups",
      "Company profiling, convertible-note investing, CLV and CAC modelling",
      "Analysed exit strategies across multiple valuation metrics",
    ],
    year: "2024",
  },
];

export const research: Card[] = [
  {
    num: "R1",
    title: "Growth Gap between India & Africa",
    tag: "Econometrics",
    points: [
      "Analysed growth disparities with a focus on digital technology",
      "Cointegration tests and ARDL across internet penetration, ICT exports and trade",
    ],
    year: "2024",
  },
  {
    num: "R2",
    title: "Website Layout & Consumer Behaviour",
    tag: "2⁴ factorial experiment",
    points: [
      "Led a full factorial experiment on product-page design",
      "Emotional appeal vs. utility, colour and layout vs. purchase decisions",
    ],
    year: "2023",
  },
  {
    num: "R3",
    title: "Public Procurement via Smart Contracts",
    tag: "Systems design",
    points: [
      "Designed a public-tender system on smart contracts to eliminate unfair allotments",
      "Working code demonstrating feasibility, with a step-by-step rollout path",
    ],
    year: "2023",
  },
  {
    num: "R4",
    title: "Pradhan Mantri Awaas Yojana — Grameen",
    tag: "Policy analysis",
    points: [
      "Evaluated implementation across 28 states with year-over-year outcomes",
      "SWOT analysis and four strategic recommendations",
    ],
    year: "2023",
  },
  {
    num: "R5",
    title: "Crowd Conformity & Consumer Behaviour",
    tag: "Research methodology",
    points: [
      "Designed an experiment on conformity effects in purchasing",
      "Hypothesis formulation, variable isolation, literature review, ethics evaluation",
    ],
    year: "2022",
  },
];
