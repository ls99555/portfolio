import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({ href, children, target, rel, className, ...props }: ButtonProps) {
  // Check if it's a downloadable file (PDF, DOC, etc.) - treat as external link
  const isDownloadableFile = href && (href.endsWith('.pdf') || href.endsWith('.doc') || href.endsWith('.docx'));
  
  // Internal link (Next.js routing) - but not for downloadable files
  if (href && href.startsWith('/') && !isDownloadableFile) {
    return (
      <Link href={href} className={`${styles.button} ${className || ''}`}>
        {children}
      </Link>
    );
  }

  // External link (http/https) or downloadable files
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.button} ${className || ''}`}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  // Regular button
  return (
    <button className={`${styles.button} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
