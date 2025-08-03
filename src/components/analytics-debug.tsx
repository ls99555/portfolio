'use client';

import { useEffect } from 'react';

// Type assertion for process.env
declare const process: NodeJS.Process & { env: NodeJS.ProcessEnv };

export default function AnalyticsDebug() {
  useEffect(() => {
    // Check if Google Analytics is loaded
    if (typeof window !== 'undefined') {
      console.log('🔍 Analytics Debug:');
      console.log('- Environment:', process.env.NODE_ENV);
      console.log('- GA_MEASUREMENT_ID:', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'Not set');
      console.log('- gtag function:', typeof window.gtag);
      console.log('- dataLayer:', window.dataLayer);
      
      // Check Vercel Analytics
      const vercelScript = document.querySelector('script[src*="va.vercel-scripts.com"]') || 
                          document.querySelector('script[src*="vercel.live"]');
      console.log('- Vercel Analytics script:', vercelScript ? 'Loaded' : 'Not found');
      
      // Log analytics status
      const hasGA = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && 
                   process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';
      console.log('📊 Analytics Status:');
      console.log('  - Google Analytics:', hasGA ? 'Configured' : 'Not configured');
      console.log('  - Vercel Analytics:', 'Always active in production');
    }
  }, []);

  const hasGA = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && 
               process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

  return process.env.NODE_ENV === 'development' ? (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: '#333',
      color: 'white',
      padding: '12px',
      fontSize: '11px',
      borderRadius: '6px',
      zIndex: 9999,
      maxWidth: '200px',
      fontFamily: 'monospace'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>📊 Analytics Status</div>
      <div>Google Analytics: {hasGA ? '✅ Active' : '❌ Setup needed'}</div>
      <div>Vercel Analytics: ✅ Ready</div>
      <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.7 }}>
        Check console for details
      </div>
    </div>
  ) : null;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
