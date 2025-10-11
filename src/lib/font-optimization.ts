/**
 * Font Loading Optimization
 * Prevents FOUT (Flash of Unstyled Text) and improves performance
 */

export function optimizeFontLoading() {
  if (typeof window === 'undefined') return;

  // Add font-display: swap to Google Fonts
  const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  fontLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && !href.includes('display=')) {
      link.setAttribute('href', `${href}&display=swap`);
    }
  });

  // Preload critical fonts
  const criticalFonts = [
    '/fonts/inter-var.woff2',
    // Add your critical font paths here
  ];

  criticalFonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = font;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Check if fonts are loaded
 */
export async function waitForFonts(timeout = 3000): Promise<void> {
  if (typeof document === 'undefined' || !('fonts' in document)) {
    return Promise.resolve();
  }

  try {
    await Promise.race([
      document.fonts.ready,
      new Promise((resolve) => setTimeout(resolve, timeout)),
    ]);
  } catch (error) {
    console.warn('Font loading timeout', error);
  }
}
