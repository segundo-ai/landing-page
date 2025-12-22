export interface Agent {
  id: string;
  name: string;
  description: string;
}

export interface Founder {
  name: string;
  title: string;
  bio: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

// Agent structure - IDs only. Translations are in src/config/i18n.ts
export const agents: Agent[] = [
  { id: "form-filling", name: "", description: "" },
  { id: "report-writing", name: "", description: "" },
  { id: "fraud-flagging", name: "", description: "" },
  { id: "contract-analyst", name: "", description: "" },
  { id: "inventory-forecast", name: "", description: "" },
  { id: "sales-outbound", name: "", description: "" },
  { id: "anomaly-detection", name: "", description: "" },
  { id: "internet-scraper", name: "", description: "" },
];

export const founders: Founder[] = [
  {
    name: "José Murillo",
    title: "CO-CEO, FOUNDER",
    bio: [ "", "", "", ],
  },
  {
    name: "Santiago Buenahora",
    title: "CTO, FOUNDER",
    bio: [ "", "", "", ],
  },
  {
    name: "Andrés Rosales",
    title: "CO-CEO, FOUNDER",
    bio: [ "", "", "", ],
  },
];

// FAQ structure - used for array length/index only. Translations are in src/config/i18n.ts
export const faqs: FAQ[] = [
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
];

export const integrations = [
  "SAP",
  "AWS",
  "Microsoft Dynamics",
  "NetSuite",
  "Oracle",
];

export const alliesLogos = [
  "Artu",
  "Branli",
  "Cruji Nola",
  "Elysian",
  "Holacasa",
  "Keto Kare",
  "Macloud",
  "Moons",
  "Pola",
  "Rintin",
  "Tracsa",
  "Verde Valle",
];

