import type { Language } from "../config/i18n";
import { ui, defaultLang } from "../config/i18n";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Get the current language from Astro.url
 * This is a convenience wrapper around getLangFromUrl for use in Astro components
 */
export function getLanguage(url: URL): Language {
  return getLangFromUrl(url);
}

export function useTranslations(lang: Language) {
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

export function getRouteFromUrl(url: URL): string {
  const pathname = new URL(url).pathname;
  const parts = pathname.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return "/";
  }

  return path === defaultLang ? "/" : `/${path}`;
}

