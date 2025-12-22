/**
 * Utility function to run code when DOM is ready
 * Handles both cases: DOM already loaded or still loading
 */
export function onDOMReady(callback: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

