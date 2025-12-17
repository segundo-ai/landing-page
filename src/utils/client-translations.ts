/**
 * Client-side translation utilities
 * These functions are used in browser/client-side scripts
 */

/**
 * Gets translation value from nested object structure
 * @param translations - Translation object (from window.__TRANSLATIONS__)
 * @param lang - Language code
 * @param key - Translation key (dot-separated path)
 * @returns Translated string or key if not found
 */
export function getTranslation(
  translations: Record<string, any>,
  lang: string,
  key: string
): string {
  const keys = key.split(".");
  let value: any = translations[lang];
  if (!value) return key;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return key;
  }
  return value || key;
}

