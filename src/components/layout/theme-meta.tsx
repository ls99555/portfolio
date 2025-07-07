'use client';

import { useEffect } from 'react';

export default function ThemeMeta() {
  useEffect(() => {
    const updateMetaThemeColor = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      const metaAppleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      
      if (theme === 'light') {
        // Light mode colors - warm sunrise theme
        if (metaThemeColor) {
          metaThemeColor.setAttribute('content', '#f8fafc');
        }
        if (metaAppleStatusBar) {
          metaAppleStatusBar.setAttribute('content', 'light-content');
        }
      } else {
        // Dark mode colors
        if (metaThemeColor) {
          metaThemeColor.setAttribute('content', '#1a1a2e');
        }
        if (metaAppleStatusBar) {
          metaAppleStatusBar.setAttribute('content', 'dark-content');
        }
      }
    };

    // Update on mount
    updateMetaThemeColor();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateMetaThemeColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
