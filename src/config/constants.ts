import type { WorkItem } from '../types';

export const SITE_CONFIG = {
  name: 'Luke Stevens Portfolio',
  title: 'Luke Stevens | Junior Front-End Developer Portfolio',
  description:
    'Welcome to the portfolio of Luke Stevens, a junior front-end web developer based in Ipswich and actively seeking opportunities in Essex, Suffolk, and London.',
  url: 'https://lstevens.dev',
  author: {
    name: 'Luke Stevens',
    email: 'luke@lstevens.dev',
    location: 'Ipswich, UK',
  },
  social: {
    github: 'https://github.com/ls99555',
    linkedin: 'https://linkedin.com/in/luke-stevens-dev',
  },
} as const;

export const WORK_ITEMS: WorkItem[] = [
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.jpg',
    description:
      'Responsive portfolio showcasing modern web development skills. Built with Next.js 14, TypeScript, and advanced CSS. Features include Google Analytics, contact form integration, and comprehensive SEO.',
    technologies: ['Next.js 14', 'TypeScript', 'SCSS', 'Google Analytics', 'Resend API'],
    link: 'https://lstevens.dev',
    githubLink: 'https://github.com/ls99555/portfolio',
  },
  {
    title: 'Weather Dashboard',
    image: '/images/weather-app.jpg',
    description:
      'Real-time weather application with location search and detailed forecasts. Integrates OpenWeatherMap API with responsive design and error handling.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'Luxon', 'CSS Modules'],
    link: 'https://weather-app-one-tau-91.vercel.app/',
    githubLink: 'https://github.com/ls99555/weather-app',
  },
  {
    title: 'NextGen Therapy',
    image: '/images/nextgen-therapy.jpg',
    description:
      'Professional therapy practice website with modern design and optimized user experience. Features responsive layout and performance optimization.',
    technologies: ['Next.js', 'React', 'CSS Modules', 'SEO Optimization', 'Responsive Design'],
    link: 'https://nextgentherapy.co.uk/',
    githubLink: 'https://github.com/ls99555/NextGenTherapy',
  },
  {
    title: 'Catan Map Generator',
    image: '/images/catan-map-generator.svg',
    description:
      'Free online tool for creating balanced Settlers of Catan maps. Generates fair resource distribution and number placement with support for 3-6 players and statistical analysis.',
    technologies: ['Next.js', 'TypeScript', 'SVG', 'Responsive Design', 'Game Logic'],
    link: 'https://www.catanmapgenerator.app/',
    githubLink: 'https://github.com/ls99555/catan-map-generator',
  },
] as const;

export const TECHNICAL_SKILLS = [
  'HTML & CSS (including SCSS/SASS)',
  'JavaScript (ES6+), TypeScript',
  'React & Next.js',
  'API Integration (REST, CRUD)',
  'Responsive Design (Flexbox, Grid, Media Queries)',
  'Accessibility (ARIA, semantic HTML)',
  'Form Handling & Validation',
  'Version Control (Git & GitHub)',
  'Node.js & Environment Variables',
  'Component-based Architecture',
  'Package Managers (npm/yarn)',
  'Command Line Usage',
  'Build Tools & Deployment (Next.js, Vercel)',
] as const;

export const SOFT_SKILLS = [
  'Clear Communication',
  'Teamwork & Collaboration',
  'Problem Solving',
  'Adaptability & Willingness to Learn',
  'Attention to Detail',
  'Time Management',
  'Receiving & Acting on Feedback',
  'Proactive Attitude',
  'Critical Thinking',
] as const;

// Scroll and animation constants
export const SCROLL_THRESHOLD = 300;
export const DEBOUNCE_DELAY = 100;
