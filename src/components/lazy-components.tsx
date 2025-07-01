'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Loading } from './ui';

// Import types
interface WorkItem {
  title: string;
  image: string;
  description: string;
  technologies?: string[];
  link?: string;
  githubLink?: string;
}

interface WorkCarouselProps {
  items: WorkItem[];
}

// Lazy load components that are below the fold
const LazyWeatherWidget = dynamic(() => import('./sections/weather-widget'), {
  loading: () => <Loading type="weather" message="Loading weather..." />,
  ssr: false
});

const LazyWorkCarousel = dynamic(() => import('./sections/work-carousel/index'), {
  loading: () => <Loading type="carousel" message="Loading projects..." />,
  ssr: false
}) as ComponentType<WorkCarouselProps>;

const LazyContactForm = dynamic(() => import('./sections/contact-form'), {
  loading: () => <Loading type="form" message="Loading contact form..." />,
  ssr: false
});

export { LazyWeatherWidget, LazyWorkCarousel, LazyContactForm };
