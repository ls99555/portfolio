'use client';

import { useState, useEffect, useRef } from 'react';
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
    <header className={styles.header}>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.logo}>
          <a href="#about" onClick={closeMenu}>
            <h1>Luke Stevens</h1>
          </a>
        </div>
        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
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
