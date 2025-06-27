export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical above-the-fold styles */
        html, body {
          margin: 0;
          padding: 0;
          font-family: var(--font-roboto-slab), sans-serif;
          background: var(--color-background);
          color: var(--color-text);
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
        
        /* Header critical styles */
        header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--color-background);
        }
      `
    }} />
  );
}
