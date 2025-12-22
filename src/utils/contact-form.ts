/**
 * Contact form utilities
 * Handles form submission and message translation
 * 
 * This utility is element-based and supports cleanup to prevent memory leaks.
 */

import { getClientTranslation, getCurrentLang } from "./i18n/client-i18n";

interface FormElements {
  form: HTMLFormElement;
  submitButton: HTMLButtonElement;
  messageDiv: HTMLDivElement;
}

interface ContactFormInstance {
  destroy: () => void;
  updateMessageTranslation: (lang: string) => void;
}

// Track active instances to prevent duplicate initialization
const activeInstances = new WeakMap<HTMLFormElement, ContactFormInstance>();

/**
 * Validates that window.__TRANSLATIONS__ exists
 * Returns true if translations are available, false otherwise
 */
function validateTranslations(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  
  const translations = (window as any).__TRANSLATIONS__;
  if (!translations || typeof translations !== "object") {
    console.warn("Contact form: Translations not available. Form may not display messages correctly.");
    return false;
  }
  
  return true;
}

/**
 * Gets a safe translation with fallback
 */
function getSafeTranslation(lang: string, key: string, fallback?: string): string {
  if (!validateTranslations()) {
    return fallback || key;
  }
  
  try {
    return getClientTranslation(lang, key);
  } catch (error) {
    console.warn(`Contact form: Translation error for key "${key}":`, error);
    return fallback || key;
  }
}

/**
 * Validates and extracts form elements from a container
 * Throws descriptive errors if elements are missing or invalid
 */
function getFormElements(container: HTMLElement | string): FormElements {
  let containerElement: HTMLElement | null;
  
  if (typeof container === "string") {
    containerElement = document.querySelector(container);
    if (!containerElement) {
      throw new Error(`Contact form: Container selector "${container}" not found`);
    }
  } else {
    containerElement = container;
  }

  // Find form element
  const form = containerElement.querySelector("form");
  if (!form) {
    throw new Error("Contact form: Form element not found in container");
  }
  if (!(form instanceof HTMLFormElement)) {
    throw new Error("Contact form: Form element is not a valid HTMLFormElement");
  }

  // Find submit button
  const submitButton = form.querySelector('button[type="submit"]');
  if (!submitButton) {
    throw new Error("Contact form: Submit button not found in form");
  }
  if (!(submitButton instanceof HTMLButtonElement)) {
    throw new Error("Contact form: Submit button is not a valid HTMLButtonElement");
  }

  // Find message div - look for element with id="form-message" or data-role="form-message"
  let messageDiv = form.querySelector("#form-message") as HTMLDivElement;
  if (!messageDiv) {
    messageDiv = form.querySelector('[data-role="form-message"]') as HTMLDivElement;
  }
  if (!messageDiv) {
    throw new Error("Contact form: Message div not found. Add id='form-message' or data-role='form-message'");
  }
  if (!(messageDiv instanceof HTMLDivElement)) {
    throw new Error("Contact form: Message element is not a valid HTMLDivElement");
  }

  return { form, submitButton, messageDiv };
}

/**
 * Resets the form message display
 */
function resetMessage(messageDiv: HTMLDivElement): void {
  messageDiv.classList.add("hidden");
  messageDiv.classList.remove("text-green-600", "text-red-600");
}

/**
 * Shows a success message
 */
function showSuccessMessage(messageDiv: HTMLDivElement, lang: string): void {
  const successMsg = getSafeTranslation(lang, "contact.form.success", "Message sent successfully!");
  messageDiv.textContent = successMsg;
  messageDiv.setAttribute("data-message-type", "success");
  messageDiv.classList.remove("hidden");
  messageDiv.classList.add(
    "text-green-600",
    "p-3",
    "rounded-md",
    "bg-green-50",
    "border",
    "border-green-200"
  );
}

/**
 * Shows an error message
 */
function showErrorMessage(
  messageDiv: HTMLDivElement,
  lang: string,
  errorId?: string
): void {
  let errorMsg: string;
  if (errorId) {
    const errorKey = `contact.form.errors.${errorId}`;
    errorMsg = getSafeTranslation(lang, errorKey, "An error occurred. Please try again.");
  } else {
    errorMsg = getSafeTranslation(lang, "contact.form.error", "An error occurred. Please try again.");
  }

  messageDiv.textContent = errorMsg;
  messageDiv.setAttribute("data-message-type", "error");
  if (errorId) {
    messageDiv.setAttribute("data-error-id", errorId);
  } else {
    messageDiv.removeAttribute("data-error-id");
  }
  messageDiv.classList.remove("hidden");
  messageDiv.classList.add(
    "text-red-600",
    "p-3",
    "rounded-md",
    "bg-red-50",
    "border",
    "border-red-200"
  );
}

/**
 * Shows a network error message
 */
function showNetworkErrorMessage(messageDiv: HTMLDivElement, lang: string): void {
  const networkErrorMsg = getSafeTranslation(
    lang,
    "contact.form.networkError",
    "Network error. Please check your connection and try again."
  );
  messageDiv.textContent = networkErrorMsg;
  messageDiv.setAttribute("data-message-type", "networkError");
  messageDiv.classList.remove("hidden");
  messageDiv.classList.add(
    "text-red-600",
    "p-3",
    "rounded-md",
    "bg-red-50",
    "border",
    "border-red-200"
  );
}

/**
 * Creates a form submission handler bound to specific form elements
 */
function createFormSubmitHandler(elements: FormElements) {
  return async function handleContactFormSubmit(e: Event): Promise<void> {
    e.preventDefault();
    
    const { form, submitButton, messageDiv } = elements;
    const lang = getCurrentLang();

    // Validate form is still in DOM before proceeding
    if (!form.isConnected) {
      console.error("Contact form: Form element is no longer in the DOM");
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    // Reset message
    resetMessage(messageDiv);

    // Disable submit button and show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = getSafeTranslation(
      lang,
      "contact.form.submitting",
      "Submitting..."
    );

    try {
      // Validate form data before sending
      const nameStr = String(data.name || "").trim();
      const emailStr = String(data.email || "").trim();
      
      if (!nameStr || !emailStr) {
        showErrorMessage(messageDiv, lang);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailStr)) {
        showErrorMessage(messageDiv, lang, "invalidEmail");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameStr,
          email: emailStr,
        }),
      });

      // Handle non-JSON responses gracefully
      let result: any;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        try {
          result = await response.json();
        } catch (parseError) {
          console.error("Failed to parse JSON response:", parseError);
          showNetworkErrorMessage(messageDiv, lang);
          return;
        }
      } else {
        // Non-JSON response - treat as error
        const text = await response.text();
        console.error("Unexpected response format:", text);
        showNetworkErrorMessage(messageDiv, lang);
        return;
      }

      if (response.ok) {
        // Success
        showSuccessMessage(messageDiv, lang);
        form.reset();
      } else {
        // Error from API
        const errorId = result?.errorId || result?.error?.errorId;
        showErrorMessage(messageDiv, lang, errorId);
      }
    } catch (error) {
      // Network, timeout, or other error
      if (error instanceof TypeError && error.message.includes("fetch")) {
        // Network error (offline, CORS, etc.)
        showNetworkErrorMessage(messageDiv, lang);
      } else {
        // Other unexpected errors
        console.error("Form submission error:", error);
        showNetworkErrorMessage(messageDiv, lang);
      }
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText || getSafeTranslation(
        lang,
        "contact.form.submit",
        "Submit"
      );
    }
  };
}

/**
 * Updates form message translation when language changes
 */
function createUpdateMessageTranslationHandler(messageDiv: HTMLDivElement) {
  return function updateFormMessageTranslation(lang: string): void {
    // Validate messageDiv is still in DOM and accessible
    if (!messageDiv || !messageDiv.isConnected || messageDiv.classList.contains("hidden")) {
      return;
    }

    // Validate lang parameter
    if (!lang || typeof lang !== "string") {
      console.warn("Contact form: Invalid language parameter for translation update");
      return;
    }

    const messageType = messageDiv.getAttribute("data-message-type");
    if (!messageType) {
      return;
    }

    let translatedMessage: string;

    // For error messages, check if we have a stored errorId to re-translate
    if (messageType === "error") {
      const errorId = messageDiv.getAttribute("data-error-id");
      if (errorId) {
        const errorKey = `contact.form.errors.${errorId}`;
        translatedMessage = getSafeTranslation(lang, errorKey, "An error occurred. Please try again.");
      } else {
        translatedMessage = getSafeTranslation(lang, "contact.form.error", "An error occurred. Please try again.");
      }
    } else {
      // For success and networkError, use the standard translation key
      const translationKey = `contact.form.${messageType}`;
      const fallback = messageType === "success" 
        ? "Message sent successfully!" 
        : "Network error. Please check your connection and try again.";
      translatedMessage = getSafeTranslation(lang, translationKey, fallback);
    }

    messageDiv.textContent = translatedMessage;
  };
}

/**
 * Initializes the contact form
 * 
 * @param container - HTMLFormElement, HTMLElement containing the form, or CSS selector string
 * @returns Object with destroy function and updateMessageTranslation function, or null if initialization fails
 * 
 * @example
 * // Using element reference
 * const form = document.getElementById("contact-form");
 * const instance = initContactForm(form);
 * 
 * // Using selector
 * const instance = initContactForm("#contact-form");
 * 
 * // Cleanup when done
 * instance?.destroy();
 */
export function initContactForm(
  container: HTMLFormElement | HTMLElement | string = "#contact-form"
): ContactFormInstance | null {
  // Validate container parameter
  if (!container) {
    console.error("Contact form: Container parameter is required");
    return null;
  }

  // Validate we're in a browser environment
  if (typeof window === "undefined" || typeof document === "undefined") {
    console.error("Contact form: Must be initialized in a browser environment");
    return null;
  }

  try {
    // Get form elements with validation
    let formElement: HTMLFormElement;
    let elements: FormElements;
    
    if (container instanceof HTMLFormElement) {
      // Validate form is in DOM
      if (!container.isConnected) {
        throw new Error("Contact form: Form element is not in the DOM");
      }
      
      formElement = container;
      // When container IS the form, extract elements directly
      const submitButton = formElement.querySelector('button[type="submit"]');
      const messageDiv = formElement.querySelector("#form-message") || formElement.querySelector('[data-role="form-message"]');
      
      if (!submitButton || !(submitButton instanceof HTMLButtonElement)) {
        throw new Error("Contact form: Submit button not found in form");
      }
      if (!messageDiv || !(messageDiv instanceof HTMLDivElement)) {
        throw new Error("Contact form: Message div not found. Add id='form-message' or data-role='form-message'");
      }
      
      elements = { form: formElement, submitButton, messageDiv };
    } else {
      elements = getFormElements(container);
      formElement = elements.form;
      
      // Validate form is in DOM
      if (!formElement.isConnected) {
        throw new Error("Contact form: Form element is not in the DOM");
      }
    }

    // Check if already initialized
    if (activeInstances.has(formElement)) {
      console.warn("Contact form: Form already initialized. Returning existing instance.");
      return activeInstances.get(formElement)!;
    }

    const { form, submitButton, messageDiv } = elements;

    // Create handlers bound to this form instance
    const submitHandler = createFormSubmitHandler(elements);
    const updateMessageHandler = createUpdateMessageTranslationHandler(messageDiv);

    // Set up form submission handler
    form.addEventListener("submit", submitHandler);

    // Set up language change listener
    // Use AbortController for proper cleanup
    const abortController = new AbortController();
    const languageChangeHandler = (event: Event) => {
      try {
        // Validate event structure
        if (!event || !(event instanceof CustomEvent)) {
          return;
        }

        const customEvent = event as CustomEvent<{ value: string; selectId?: string }>;
        const target = event.target as HTMLElement | null;

        // Check if this is the language select
        let selectElement: HTMLSelectElement | null = null;
        if (target?.tagName === "SELECT" && (target as HTMLSelectElement).name === "language") {
          selectElement = target as HTMLSelectElement;
        } else {
          selectElement = document.querySelector('select[name="language"]') as HTMLSelectElement;
        }

        // Only proceed if we found the language select
        if (!selectElement || selectElement.name !== "language") return;

        const selectedLang = customEvent.detail?.value;
        if (selectedLang && typeof selectedLang === "string") {
          updateMessageHandler(selectedLang);
        }
      } catch (error) {
        // Silently handle errors in language change handler to prevent breaking the form
        console.warn("Contact form: Error in language change handler:", error);
      }
    };

    document.addEventListener("starwind-select:change", languageChangeHandler, {
      signal: abortController.signal,
    });

    // Create cleanup function
    const destroy = () => {
      try {
        // Only remove listener if form is still in DOM
        if (form.isConnected) {
          form.removeEventListener("submit", submitHandler);
        }
        abortController.abort(); // Removes the language change listener
        activeInstances.delete(formElement);
      } catch (error) {
        console.error("Contact form: Error during cleanup:", error);
        // Still try to remove from active instances
        activeInstances.delete(formElement);
      }
    };

    // Create instance object
    const instance: ContactFormInstance = {
      destroy,
      updateMessageTranslation: updateMessageHandler,
    };

    // Store instance for duplicate prevention
    activeInstances.set(formElement, instance);

    return instance;
  } catch (error) {
    console.error("Contact form initialization failed:", error);
    // Show user-visible error if possible
    if (error instanceof Error) {
      const messageDiv = document.querySelector("#form-message, [data-role='form-message']") as HTMLDivElement;
      if (messageDiv) {
        messageDiv.textContent = `Form initialization error: ${error.message}`;
        messageDiv.classList.remove("hidden");
        messageDiv.classList.add("text-red-600", "p-3", "rounded-md", "bg-red-50", "border", "border-red-200");
      }
    }
    return null;
  }
}

/**
 * Convenience function for backward compatibility
 * Initializes form using default selector "#contact-form"
 * @deprecated Use initContactForm() with explicit container parameter
 */
export function initContactFormDefault(): ContactFormInstance | null {
  return initContactForm("#contact-form");
}
