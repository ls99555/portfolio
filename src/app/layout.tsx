import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/header/index';
import Footer from '../components/footer';
import { StructuredData, CriticalCSS, ThemeMeta } from '../components/layout';
import { SkipNavigation, BackToTop } from '../components/ui';
import ErrorBoundary from '../components/error-boundary/index';
import GoogleAnalytics from '../components/google-analytics';
import CookieNotice from '../components/cookie-notice/index';
import { getPublicEnvironmentVariables } from '../utils/env';
import { Analytics } from "@vercel/analytics/next";

// Use system fonts instead of Google Fonts for now

export const metadata: Metadata = {
  metadataBase: new URL('https://lstevens.dev'),
  title: 'Luke Stevens | Junior Front-End Developer Portfolio',
  description:
    'Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London. React, Next.js, TypeScript specialist.',
  authors: [{ name: 'Luke Stevens', url: 'https://lstevens.dev' }],
  creator: 'Luke Stevens',
  publisher: 'Luke Stevens',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Luke Stevens | Junior Front-End Developer Portfolio',
    description:
      'Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London. React, Next.js, TypeScript specialist.',
    url: 'https://lstevens.dev',
    siteName: 'Luke Stevens Portfolio',
    images: [
      {
        url: '/images/default-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Luke Stevens - Junior Front-End Developer Portfolio',
        type: 'image/png',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luke Stevens | Junior Front-End Developer',
    description: 'Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London.',
    images: ['/images/default-social-share.png'],
    creator: '@your-twitter-handle', // Add your actual Twitter handle
  },
  keywords: [
    'Luke Stevens',
    'Front-End Developer',
    'Junior Developer',
    'Web Developer',
    'Portfolio',
    'Ipswich',
    'Essex',
    'Suffolk',
    'London',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'CSS',
    'SCSS',
    'Job Search',
    'Hire',
    'Web Development',
    'UI/UX',
    'Responsive Design',
    'API Integration',
  ],
  alternates: {
    canonical: 'https://lstevens.dev',
  },
  verification: {
    google: getPublicEnvironmentVariables().GOOGLE_VERIFICATION || undefined,
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { GA_MEASUREMENT_ID } = getPublicEnvironmentVariables();

  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="dark-content" />
        <link rel="preload" as="image" href="/images/profile.jpg" />
        <CriticalCSS />
        <StructuredData />
      </head>
      <body>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <ThemeMeta />
        <ErrorBoundary>
          <SkipNavigation />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <CookieNotice />
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
