/**
 * Smooth scroll utility for anchor links
 */

let smoothScrollInitialized = false;
let scrollResetTimeoutId: ReturnType<typeof setTimeout> | null = null;

export function initSmoothScroll(): void {
  // Prevent duplicate initialization
  if (smoothScrollInitialized) {
    return;
  }
  smoothScrollInitialized = true;
  
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = (anchor as HTMLAnchorElement).getAttribute("href");
      
      if (href && href !== "#") {
        e.preventDefault();
        
        // Clear any existing scroll reset timeout from previous click
        if (scrollResetTimeoutId !== null) {
          clearTimeout(scrollResetTimeoutId);
          scrollResetTimeoutId = null;
        }
        
        // Special case for #top - scroll to 0 immediately
        if (href === "#top") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          // Set timeout to track when scroll completes
          scrollResetTimeoutId = setTimeout(() => {
            scrollResetTimeoutId = null;
          }, 1000);
          return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          
          // Set timeout to track when scroll completes
          scrollResetTimeoutId = setTimeout(() => {
            scrollResetTimeoutId = null;
          }, 1000);
        }
      }
    });
  });
}

