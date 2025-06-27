import type { WorkItem } from '../types';

export const SITE_CONFIG = {
  name: 'Luke Stevens Portfolio',
  title: 'Luke Stevens | Junior Front-End Developer Portfolio',
  description: 'Welcome to the portfolio of Luke Stevens, a junior front-end web developer based in Ipswich and actively seeking opportunities in Essex, Suffolk, and London.',
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
    title: 'NextGenTherapy',
    image: '/images/NextGen.jpg',
    description: 'Professional therapy website with booking system, SEO optimization, and Google Analytics integration.',
    technologies: ['Next.js', 'React', 'CSS Modules', 'Google Analytics', 'JSON-LD', 'Vercel'],
    link: 'https://next-gen-therapy-git-main-lukes-projects-f436770d.vercel.app/',
    githubLink: 'https://github.com/ls99555',
  },
  {
    title: 'Weather App',
    image: '/images/weather-app.jpg',
    description: 'Modern weather application with OpenWeatherMap API, dark/light themes, and real-time data.',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'CSS Modules', 'Dark Mode', 'Vercel'],
    link: 'https://weather-app-one-tau-91.vercel.app/',
    githubLink: 'https://github.com/ls99555',
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
