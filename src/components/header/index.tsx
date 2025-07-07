'use client';

import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '../ui';
import styles from './header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ''}`}>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.navTop}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <a href="#about" onClick={closeMenu}>
                <h1>
                  <span className={styles.fullName}>Luke Stevens</span>
                  <span className={styles.initials}>LS</span>
                </h1>
              </a>
            </div>
            <ThemeToggle />
          </div>
          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          <li className={styles.navItem}>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#cv" onClick={closeMenu}>
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
