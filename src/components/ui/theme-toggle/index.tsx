'use client';

import { useState, useEffect } from 'react';
import styles from './theme-toggle.module.scss';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Always default to dark mode, only switch if user has saved preference for light
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      // Default to dark mode regardless of system preference
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`${styles.toggleTrack} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.toggleThumb}>
          <span className={styles.icon}>
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  );
}
