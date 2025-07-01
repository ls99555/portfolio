import React from 'react';
import styles from './loading.module.scss';

interface LoadingProps {
  type?: 'weather' | 'carousel' | 'form';
  message?: string;
}

export default function Loading({ type = 'carousel', message = 'Loading...' }: LoadingProps) {
  const containerClass = `${styles.loadingContainer} ${
    type === 'weather' ? styles.weatherLoading :
    type === 'carousel' ? styles.carouselLoading :
    styles.formLoading
  }`;

  return (
    <div className={containerClass}>
      <div className={styles.spinner}></div>
      <span>{message}</span>
    </div>
  );
}
