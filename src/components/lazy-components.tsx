'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';

// Lazy load components that are below the fold
const LazyWeatherWidget = dynamic(() => import('./weather-widget/index'), {
  loading: () => <Loading type="weather" message="Loading weather..." />,
  ssr: false
});

const LazyWorkCarousel = dynamic(() => import('./work-carousel'), {
  loading: () => <Loading type="carousel" message="Loading projects..." />,
  ssr: false
});

const LazyContactForm = dynamic(() => import('./contact-form/index'), {
  loading: () => <Loading type="form" message="Loading contact form..." />,
  ssr: false
});

export { LazyWeatherWidget, LazyWorkCarousel, LazyContactForm };
