export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical above-the-fold styles with notch coverage */
        html {
          margin: 0;
          padding: 0;
          background: var(--color-background);
          /* Ensure background extends into safe areas */
          padding-top: env(safe-area-inset-top);
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
          padding-bottom: env(safe-area-inset-bottom);
          min-height: 100vh;
          min-height: 100dvh; /* Dynamic viewport height for better mobile support */
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: var(--font-roboto-slab), sans-serif;
          background: var(--color-background);
          color: var(--color-text);
          min-height: 100vh;
          min-height: 100dvh;
          /* Content area padding to avoid safe areas */
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
          padding-bottom: env(safe-area-inset-bottom);
        }
        
        /* Ensure all content respects safe areas */
        #__next {
          min-height: 100vh;
          min-height: 100dvh;
        }
        
        /* Banner critical styles */
        .banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 1rem;
          min-height: 400px;
        }
        
        /* Profile image container */
        .bannerImage {
          flex-shrink: 0;
          width: 160px;
          height: 160px;
        }
        
        /* Prevent layout shift */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Header critical styles with proper notch handling */
        header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--color-background);
          /* Extend header background into top safe area */
          margin-top: calc(-1 * env(safe-area-inset-top));
          padding-top: env(safe-area-inset-top);
        }
      `
    }} />
  );
}
