/**
 * Initializes a mouse-following spotlight effect on an element.
 * The spotlight is a radial gradient that follows the cursor position.
 * 
 * @param element - The container element to attach the spotlight effect to
 * @param overlaySelector - CSS selector for the overlay element (defaults to '.spotlight-overlay')
 */
export function initSpotlightEffect(element: HTMLElement, overlaySelector: string = '.spotlight-overlay'): void {
  const overlay = element.querySelector(overlaySelector) as HTMLElement;
  if (!overlay) return;

  let lastX = 50;
  let lastY = 50;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    lastX = x;
    lastY = y;
    
    overlay.style.setProperty('--mouse-x', `${x}%`);
    overlay.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleMouseLeave = () => {
    // Don't reset position - just let it fade out at current position
    // This prevents the jarring jump back to center
    // Position will be reset naturally on next mouse enter
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Initialize position to center if not already set
  if (!overlay.style.getPropertyValue('--mouse-x')) {
    overlay.style.setProperty('--mouse-x', '50%');
    overlay.style.setProperty('--mouse-y', '50%');
  }
}

/**
 * Initializes spotlight effects for all elements with the spotlight-container class.
 * Call this after DOM is ready.
 */
export function initAllSpotlightEffects(selector: string = '.spotlight-container'): void {
  const containers = document.querySelectorAll(selector);
  containers.forEach((container) => {
    initSpotlightEffect(container as HTMLElement);
  });
}

