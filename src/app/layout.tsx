import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import StructuredData from '../components/structured-data';
import SkipNavigation from '../components/skip-navigation';
import { Roboto_Slab } from 'next/font/google';
import { Caprasimo } from 'next/font/google';

const caprasimo = Caprasimo({ weight: '400', subsets: ['latin'], variable: '--font-caprasimo' });
const robotoSlab = Roboto_Slab({ subsets: ['latin'], variable: '--font-roboto-slab' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lstevens.dev'),
  title: 'Luke Stevens | Junior Front-End Developer Portfolio',
  description:
    'Welcome to the portfolio of Luke Stevens, a junior front-end web developer based in Ipswich and actively seeking opportunities in Essex, Suffolk, and London. Explore my latest projects, technical and soft skills, work experience, and download my CV. I am passionate about building accessible, responsive, and user-friendly web applications using React, Next.js, TypeScript, and modern CSS/SCSS. Open to junior developer roles and freelance work in the UK.',
  openGraph: {
    title: 'Luke Stevens | Junior Front-End Developer Portfolio',
    description:
      'Luke Stevens is a junior front-end developer based in Ipswich, looking for work in Essex, Suffolk, and London. View projects, skills, and contact details. Download CV and connect for web development opportunities.',
    url: 'https://lstevens.dev',
    images: [
      {
        url: '/images/default-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Luke Stevens Portfolio Open Graph Image',
      },
    ],
    type: 'website',
    locale: 'en_GB',
    siteName: 'Luke Stevens Portfolio',
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
  ],
  alternates: {
    canonical: 'https://lstevens.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${robotoSlab.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <SkipNavigation />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
