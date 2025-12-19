import type { Language } from "../config/i18n";
import { ui, defaultLang } from "../config/i18n";

/**
 * Get translations function for server-side rendering.
 * Language switching is handled client-side via localStorage.
 * On server-side, always uses defaultLang.
 */
export function useTranslations(lang: Language = defaultLang) {
  return function t(key: string) {
    const keys = key.split(".");
    let value: any = ui[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    // Development warning for missing translations
    if (import.meta.env.DEV && (value === undefined || value === null)) {
      console.warn(`[i18n] Missing translation key: "${key}" for language: "${lang}"`);
    }

    return value || key;
  };
}

