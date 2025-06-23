import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="mailto:luke@lstevens@dev" aria-label="Email">
          <Image src="/images/email.jpg" alt="Email" width={48} height={48} />
        </a>
        <a
          href="https://github.com/ls99555"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Image src="/images/github.jpg" alt="GitHub" width={48} height={48} />
        </a>
        <a
          href="https://www.linkedin.com/in/luke-stevens-a117bab5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Image src="/images/linkedin.jpg" alt="LinkedIn" width={48} height={48} />
        </a>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Luke Stevens. All rights reserved.
      </div>
    </footer>
  );
}
