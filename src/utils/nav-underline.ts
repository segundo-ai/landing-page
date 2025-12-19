/**
 * Interactive header underline animation utility
 */

export function initNavUnderline(): void {
  const navLinks = document.querySelectorAll('.nav-link');
  const underline = document.getElementById('nav-underline');
  const sections = ['#top', '#agents', '#platform', '#process', '#about-us', '#faq', '#contact'];
  
  if (!underline || navLinks.length === 0) return;

  // Track current active section
  let currentActiveSection: string = '#top';
  // Flag to temporarily disable IntersectionObserver updates during programmatic scrolls
  let isProgrammaticScroll: boolean = false;
  // Store timeout ID so we can clear it on rapid clicks
  let scrollTimeoutId: ReturnType<typeof setTimeout> | null = null;

  // Function to update underline position
  function updateUnderline(activeHref: string) {
    if (!underline) return;
    
    const activeLink = Array.from(navLinks).find(link => 
      link.getAttribute('data-nav-href') === activeHref
    ) as HTMLElement;
    
    if (activeLink) {
      const navContainer = activeLink.parentElement as HTMLElement;
      
      if (navContainer) {
        // Use offsetLeft to get position relative to parent container
        const left = activeLink.offsetLeft;
        const width = activeLink.offsetWidth;
        
        if (underline) {
          underline.style.left = `${left}px`;
          underline.style.width = `${width}px`;
          underline.style.opacity = '1';
        }
      }
    } else if (activeHref === '#top' && underline) {
      // Hide underline when at top
      underline.style.opacity = '0';
    }
  }

  // IntersectionObserver to detect active section
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    // Ignore IntersectionObserver updates during programmatic scrolls
    if (isProgrammaticScroll) {
      return;
    }
    
    // Find the section that's most visible
    let mostVisible: IntersectionObserverEntry | null = null;
    let maxRatio = 0;

    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        mostVisible = entry;
      }
    });

    if (mostVisible) {
      const entry = mostVisible as IntersectionObserverEntry;
      const target = entry.target as Element;
      const sectionId = '#' + target.id;
      
      currentActiveSection = sectionId;
      updateUnderline(sectionId);
    }
  }, observerOptions);

  // Observe all sections
  sections.forEach(sectionId => {
    // For #top, specifically target the section element (Hero), not the header
    let section: Element | null = null;
    if (sectionId === '#top') {
      section = document.querySelector('section#top');
    } else {
      section = document.querySelector(sectionId);
    }
    
    if (section) {
      observer.observe(section);
    }
  });

  // Handle scroll to top
  function handleScroll() {
    if (window.scrollY < 100) {
      currentActiveSection = '#top';
      updateUnderline('#top');
    }
  }

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('data-nav-href');
      if (href) {
        // Clear any existing timeout from previous click
        if (scrollTimeoutId !== null) {
          clearTimeout(scrollTimeoutId);
          scrollTimeoutId = null;
        }
        
        currentActiveSection = href;
        // Disable IntersectionObserver updates during programmatic scroll
        isProgrammaticScroll = true;
        
        // Update underline immediately to target position
        updateUnderline(href);
        
        // Re-enable IntersectionObserver after scroll completes
        scrollTimeoutId = setTimeout(() => {
          isProgrammaticScroll = false;
          scrollTimeoutId = null;
          // Final update to ensure we're on the correct section
          const targetSection = document.querySelector(href);
          if (targetSection) {
            const rect = targetSection.getBoundingClientRect();
            // Only update if we're actually at the target section
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
              updateUnderline(href);
            }
          }
        }, 1200);
      }
    });
  });

  // Initial check
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Handle window resize to recalculate positions
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const currentSection = sections.find(sectionId => {
        let section: Element | null = null;
        if (sectionId === '#top') {
          section = document.querySelector('section#top');
        } else {
          section = document.querySelector(sectionId);
        }
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
      });
      if (currentSection) {
        currentActiveSection = currentSection;
        updateUnderline(currentSection);
      }
    }, 150);
  }, { passive: true });
  
  // Function to recalculate underline position (for language changes)
  function recalculateUnderline() {
    // Small delay to ensure DOM has updated with new text
    setTimeout(() => {
      updateUnderline(currentActiveSection);
    }, 50);
  }
  
  // Expose recalculate function globally so language system can call it
  (window as any).recalculateNavUnderline = recalculateUnderline;
}

