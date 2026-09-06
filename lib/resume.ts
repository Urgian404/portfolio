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
      "Vaccine market-entry case: Africa imports 99% of its vaccines — how does a local manufacturer scale to 60% domestic production by 2040?",
      "Proposed modular manufacturing pods, cold-chain-as-a-service with solar storage and drone last-mile delivery, and blended finance to close a $180M funding gap",
      "Plan cut CapEx 57% versus traditional plants and projected 4× revenue by 2040",
      "International Runner-Up among 1,400+ participants worldwide, presented at Cornell University",
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
      "Market-entry case: should L&T enter medical implants, and how?",
      "Recommended metal-based, pre-designed orthopedic implants — the segment where L&T's metallurgy and precision-manufacturing strengths transfer directly — with a Gujarat plant for port access",
      "Backed by demand forecasts, a ₹1,500 Cr phased investment plan (NPV-positive, ~28% IRR) and a risk-mitigation roadmap",
      "National Second Runners-Up at the grand finale · Awarded PPI",
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
      "Finance case: fix the pricing and portfolio strategy of a Reckitt stain-removal brand losing ground in India, using real sell-out data",
      "Built the recovery plan and presented it as a 5-slide recommendation to the brand's Indian GM",
      "Won the campus round on the finance track · Awarded a pre-placement interview with Reckitt",
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
      "Conceptualised 'Copilot Rickshaw': an ML model using real-time population-density data to route drivers to high-demand zones",
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
      "Growth case: find Unstop's next big user base beyond engineering and MBA students",
      "Pitched the medical-college market — 13L+ students across 2,250+ colleges with no platform for their competitions, mentorship or hiring — reachable through big college fests like AIIMS Pulse",
      "Third nationally out of 18,000+ participants · Awarded an internship with Unstop",
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
      "Worked on how a company should account for a 12% stake in its key supplier — fair value or the equity method — and what that choice does to its valuation and financials",
      "Showed the board that real influence matters more than the 20% ownership rule, and recommended the equity method for a truer picture of the business",
      "National second runner-up at the India finals, with a full CMA (US) scholarship awarded",
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
      "Sustainability case: how can JSW Steel get greener when it already recycles 99.77% of its waste?",
      "Recommended recycling iron-bearing wastes — mill scale, BOF sludge, ESP and bag-filter dust — into metallic iron using Thyssenkrupp's OxyCup shaft furnace, which handles the zinc and alkali impurities that block conventional recycling",
      "Sized at ~1,500 tonnes of waste a day, producing pig iron worth ~₹18 Cr daily on existing infrastructure",
      "National semi-finalist — top 50 in India",
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
      "Strategy case: how does Samsung SmartThings make smart homes a standard for all in India, not a luxury for a few?",
      "Proposed a B2B2C route — builders pre-install SmartThings suites in premium apartments — plus a bank-partnership model where the upgrade cost rolls into home-loan EMIs and is paid off from the ~20% energy savings the devices generate",
      "Made it financially self-funding: products sold at cost, margins recovered through the EMI financing and pay-per-use energy savings, with loan securitization to de-risk defaults",
      "Regional finalist among ~15,000 registrants in season nine of Samsung's flagship campus case program",
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
