import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

export default function Button({ href, children, ...props }: ButtonProps) {
  // Only allow internal navigation to prevent open redirects
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  // Render a button (can be used as submit/reset/button)
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}