import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import StructuredData from '../components/structured-data';
import SkipNavigation from '../components/skip-navigation';
import BackToTop from '../components/back-to-top';
import ErrorBoundary from '../components/error-boundary';
import GoogleAnalytics from '../components/google-analytics';
import { getPublicEnvironmentVariables } from '../utils/env';
import { Roboto_Slab } from 'next/font/google';
import { Caprasimo } from 'next/font/google';

const caprasimo = Caprasimo({ weight: '400', subsets: ['latin'], variable: '--font-caprasimo' });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto-slab' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lstevens.dev'),
  title: 'Luke Stevens | Junior Front-End Developer Portfolio',
  description:
    'Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London. Specializing in React, Next.js, TypeScript. View projects, skills & CV.',
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
      'Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London. View projects, skills & download CV.',
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
    google: 'your-google-verification-code', // Add when you set up Google Search Console
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
    <html lang="en" className={`${caprasimo.variable} ${robotoSlab.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <ErrorBoundary>
          <SkipNavigation />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ErrorBoundary>
      </body>
    </html>
  );
}
