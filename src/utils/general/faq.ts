export interface FAQ {
  question: string;
  answer: string;
}

// FAQ count - used for array length/index only. Translations are in src/config/i18n.ts
export const FAQ_COUNT = 7;

// Create array of indices for mapping over FAQs
export const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => i);

