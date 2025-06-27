import styles from './skip-navigation.module.scss';

export default function SkipNavigation() {
  return (
    <a 
      href="#main-content" 
      className={styles.skipNavigation}
    >
      Skip to main content
    </a>
  );
}