'use client';

import Script from 'next/script';

// Type assertion for process.env
declare const process: NodeJS.Process & { env: NodeJS.ProcessEnv };

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  if (!measurementId || measurementId === '' || measurementId === 'G-XXXXXXXXXX') {
    console.log('📊 Google Analytics: No measurement ID provided - skipping GA setup');
    return null;
  }

  console.log('📊 Google Analytics: Initializing with ID:', measurementId);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            debug_mode: ${process.env.NODE_ENV === 'development'}
          });
          console.log('📊 Google Analytics: Configured successfully');
        `}
      </Script>
    </>
  );
}
