export interface Agent {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Founder {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Integration {
  name: string;
  icon: string;
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
    image: "/images/founders/jose-murillo.jpg",
    bio: [
      "Studied Economics and Computer Science at Harvard",
      "Worked at Facebook and Goldman Sachs",
      "CEO at Samsam (raised $2.5m from General Catalyst and Neo)",
    ],
  },
  {
    name: "Santiago Buenahora",
    title: "CTO, FOUNDER",
    image: "/images/founders/santiago-buenahora.jpg",
    bio: [
      "Studied Computer Science at the University of Pennsylvania",
      "Worked at Robinhood and Microsoft",
      "CEO at MarcoPolo (backed by Y Combinator)",
    ],
  },
  {
    name: "Andrés Rosales",
    title: "CO-CEO, FOUNDER",
    image: "/images/founders/andres-rosales.jpg",
    bio: [
      "Studied Math and Physics at Harvard",
      "Worked at McKinsey and 8VC",
      "CEO at Keto Kare (sold to Nestlé)",
    ],
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

export const integrations: Integration[] = [
  {
    name: "SAP",
    icon: "/images/integrations/sap.svg",
  },
  {
    name: "AWS",
    icon: "/images/integrations/aws.svg",
  },
  {
    name: "Microsoft Dynamics",
    icon: "/images/integrations/microsoft-dynamics.svg",
  },
  {
    name: "NetSuite",
    icon: "/images/integrations/netsuite.svg",
  },
  {
    name: "Oracle",
    icon: "/images/integrations/oracle.svg",
  },
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

