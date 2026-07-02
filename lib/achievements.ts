export type Achievement = {
  num: string;
  title: string;
  result: string;
  detail: string;
  team: string;
  image: string;
  imageAlt: string;
  proofUrl: string;
};

export const achievements: Achievement[] = [
  {
    num: "A1",
    title: "Cornell Corning EMI Case Competition 2025",
    result: "International Finalist — top 8 of 1,400+",
    detail:
      "Selected as an international finalist at the Cornell Corning Emerging Markets Institute Case Competition, hosted by Cornell University with Corning Incorporated. Out of more than 1,400 participants worldwide, only eight teams made the finals at Cornell.",
    team: "Team Carpe Diem, IIM Indore",
    image: "/achievements/cornell-emi.jpg",
    imageAlt:
      "IIM Indore congratulations post for Team Carpe Diem, Cornell Corning EMI Case Competition 2025 international finalists",
    proofUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7385576707661119488/",
  },
  {
    num: "A2",
    title: "L&T OutThink 2025",
    result: "Second Runners-Up — national grand finale",
    detail:
      "Second runners-up at Larsen & Toubro's OutThink 2025 national case competition, reaching the grand finale against finalist teams from IIM Shillong, MDI Gurgaon and IMT Ghaziabad.",
    team: "Team Kataklysm, IIM Indore",
    image: "/achievements/lnt-outthink.jpg",
    imageAlt:
      "L&T OutThink 2025 grand finale — second runners-up award with trophies and prize cheque",
    proofUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7312452427079675909/",
  },
];
