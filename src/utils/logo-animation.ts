/**
 * Logo scroll animation - shrinks from 150% to 100% size as user scrolls
 */

export function initLogoScrollAnimation(): void {
  const logoContainer = document.getElementById('header-logo');
  
  if (!logoContainer) return;

  const SCROLL_THRESHOLD = 200; // pixels
  // On lg+ screens, baseline is h-8/text-xl. Animation scales from 150% to 100%
  const INITIAL_SCALE = 1.5; // 150% of baseline size (h-8/text-xl)
  const FINAL_SCALE = 1.0; // 100% of baseline size (no scaling, keep h-8/text-xl)

  // Check if screen is wide enough to avoid overlap (only apply on lg+ screens)
  function shouldApplyAnimation(): boolean {
    return window.innerWidth >= 1024; // lg breakpoint
  }

  let rafId: number | null = null;
  let isInitialLoad = true; // Track if this is the initial page load

  function updateLogoSize(allowTransition: boolean = false) {
    if (!logoContainer) return;
    
    const scrollY = window.scrollY;
    
    // Only apply animation on wider screens to prevent overlap
    if (!shouldApplyAnimation()) {
      // On smaller/medium screens, remove any transform - responsive classes handle the size
      logoContainer.style.transform = '';
      logoContainer.style.transformOrigin = '';
      logoContainer.style.transition = '';
      return;
    }
    
    let scale: number;
    if (scrollY <= 0) {
      scale = INITIAL_SCALE;
    } else if (scrollY >= SCROLL_THRESHOLD) {
      scale = FINAL_SCALE;
    } else {
      // Linear interpolation between INITIAL_SCALE and FINAL_SCALE
      const progress = scrollY / SCROLL_THRESHOLD;
      scale = INITIAL_SCALE - (INITIAL_SCALE - FINAL_SCALE) * progress;
    }

    // Apply transform scale to entire logo container (image + text together)
    logoContainer.style.transformOrigin = 'left center';
    
    // On initial load, disable transition to avoid aggressive animation
    // After initial load, remove inline transition to allow CSS class to handle it
    if (!allowTransition) {
      logoContainer.style.transition = 'none';
    } else {
      // Remove inline style to let CSS class (transition-all duration-300 ease-out) handle transitions
      logoContainer.style.transition = '';
    }
    
    logoContainer.style.transform = `scale(${scale})`;
    
    rafId = null;
  }

  function handleScroll() {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        updateLogoSize(!isInitialLoad);
      });
    }
  }

  // Handle window resize
  function handleResize() {
    updateLogoSize(!isInitialLoad);
  }

  // Initial update - set scale immediately without transition based on current scroll position
  // This ensures no aggressive animation on page load or refresh
  updateLogoSize(false);
  
  // Mark initial load as complete after a short delay to allow DOM to settle
  // This ensures smooth transitions only happen after the initial positioning
  setTimeout(() => {
    isInitialLoad = false;
  }, 150);
  
  // Listen to scroll events
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
}

