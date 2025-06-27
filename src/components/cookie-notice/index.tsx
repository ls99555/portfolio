'use client';

import { useState, useEffect } from 'react';
import Button from '../button';
import styles from './cookie-notice.module.scss';

export default function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      setShowNotice(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowNotice(false);
  };

  if (!showNotice) {
    return null;
  }

  return (
    <div className={styles.cookieNotice} role="banner" aria-label="Cookie notice">
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            This website uses cookies to improve your experience and analyze site usage. 
            By continuing to browse, you agree to our use of cookies.
          </p>
          <a 
            href="/privacy" 
            className={styles.privacyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more in our Privacy Policy
          </a>
        </div>
        <div className={styles.actions}>
          <Button 
            onClick={acceptCookies}
            aria-label="Accept cookies and close notice"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
