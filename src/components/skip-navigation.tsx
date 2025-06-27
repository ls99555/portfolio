'use client';

import styles from './skip-navigation.module.scss';

export default function SkipNavigation() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a 
      href="#main-content" 
      className={styles.skipLink}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      Skip to main content
    </a>
  );
}
