/**
 * Client-side i18n utilities
 * Functions for handling language switching and translations in the browser
 */

/**
 * Gets translation value from nested object structure
 */
function getTranslation(
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

/**
 * Renders hero title with special formatting for array-based titles
 */
function renderHeroTitle(
  element: HTMLElement,
  titleArray: Array<{ pref: string; bolded: string; suff: string }>
): void {
  element.innerHTML = titleArray
    .map((line) => {
      const parts: string[] = [];
      if (line.pref) parts.push(`<span class="nohemi-extralight">${line.pref}</span>`);
      if (line.bolded) parts.push(`<span class="nohemi-regular">${line.bolded}</span>`);
      if (line.suff) parts.push(`<span class="nohemi-extralight">${line.suff}</span>`);
      return `<span class="block">${parts.join("")}</span>`;
    })
    .join("");
}

/**
 * Updates all elements with data-i18n attribute with translations for the given language
 */
export function updatePageLanguage(lang: string): void {
  const translations = (window as any).__TRANSLATIONS__ || {};
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const format = el.getAttribute("data-i18n-format");
    
    if (!key) return;
    
    const translation = getTranslation(translations, lang, key);
    
    // Handle array format (for hero.title)
    if (format === "array" && Array.isArray(translation)) {
      renderHeroTitle(el as HTMLElement, translation);
      return;
    }
    
    // Handle bio-item format (for founder bio items which are array elements)
    if (format === "bio-item") {
      // The translation should be a string from the bio array
      if (typeof translation === "string") {
        el.textContent = translation;
        return;
      }
    }
    
    // Handle regular strings and numbers
    if (typeof translation === "string" || typeof translation === "number") {
      el.textContent = String(translation);
      return;
    }
    
    // Fallback: try to convert to string
    el.textContent = String(translation || key);
  });
}

/**
 * Initializes the language switcher for Select component
 */
export function initLanguageSwitcher(): void {
  const defaultLang = "en";
  const savedLang = localStorage.getItem("preferred-lang") || defaultLang;
  
  // Apply saved language immediately if different from default
  if (savedLang && savedLang !== defaultLang) {
    updatePageLanguage(savedLang);
    
    // Programmatically set the Select value to match saved language
    document.dispatchEvent(
      new CustomEvent("starwind-select:select", {
        detail: {
          selectName: "language",
          value: savedLang,
        },
      })
    );
  }
  
  // Language selector - handle language selection from Select component
  document.addEventListener("starwind-select:change", ((event: Event) => {
    const customEvent = event as CustomEvent<{ value: string }>;
    const target = event.target as HTMLSelectElement;
    
    // Only handle events for the language select
    if (!target || target.tagName !== "SELECT" || target.name !== "language") return;
    
    const selectedLang = customEvent.detail?.value;
    if (selectedLang) {
      // Store language preference
      localStorage.setItem("preferred-lang", selectedLang);
      // Update all translatable content on the page
      updatePageLanguage(selectedLang);
      // Recalculate underline position after language change
      if ((window as any).recalculateNavUnderline) {
        (window as any).recalculateNavUnderline();
      }
    }
  }) as EventListener);
}

