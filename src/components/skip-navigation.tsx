import styles from './skip-navigation.module.scss';

export default function SkipNavigation() {
  return (
    <a 
      href="#main-content" 
      className={styles.skipLink}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
    >
      Skip to main content
    </a>
  );
}
