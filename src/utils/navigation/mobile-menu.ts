/**
 * Auto-close mobile menu when navigation links are clicked
 */

export function initMobileMenuAutoClose(): void {
  // Find all navigation links inside the mobile Sheet
  // The SheetContent has data-slot="sheet-content" attribute
  const sheetContent = document.querySelector('[data-slot="sheet-content"]');
  const backdrop = document.querySelector('[data-slot="dialog-backdrop"]');
  
  if (!sheetContent || !backdrop) return;

  if (backdrop.parentElement !== document.body) {
    document.body.appendChild(backdrop);
  }
  
  // Find all anchor links inside the sheet content
  const mobileNavLinks = sheetContent.querySelectorAll('a[href^="#"]');
  
  // Add the starwind-dialog-close class to each link
  // This leverages the existing DialogHandler's close button detection
  mobileNavLinks.forEach((link) => {
    link.classList.add('starwind-dialog-close');
    
    // Also add a direct click handler to ensure the dialog closes
    // This handles cases where the DialogHandler might have initialized before the class was added
    link.addEventListener('click', () => {
      // Find the dialog element (parent of sheetContent)
      const dialog = sheetContent.closest('dialog');
      if (dialog && dialog.hasAttribute('open')) {
        // Find the close button and trigger its click
        const closeButton = dialog.querySelector('[data-slot="sheet-close"]') as HTMLButtonElement;
        if (closeButton) {
          closeButton.click();
        }
      }
    });
  });
}

