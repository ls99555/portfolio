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
  // Internal link (Next.js routing)
  if (href && href.startsWith('/')) {
    return (
      <Link href={href} className={`${styles.button} ${className || ''}`}>
        {children}
      </Link>
    );
  }

  // External link (http/https)
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
