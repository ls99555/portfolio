import styles from './loading.module.scss';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function LoadingSpinner({ size = 'medium', className }: LoadingSpinnerProps) {
  return (
    <div 
      className={`${styles.spinner} ${styles[size]} ${className || ''}`}
      aria-label="Loading..."
      role="status"
    >
    </div>
  );
}

interface LoadingSkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  className?: string;
}

export function LoadingSkeleton({ variant = 'rectangular', className }: LoadingSkeletonProps) {
  return (
    <div 
      className={`${styles.skeleton} ${styles[variant]} ${className || ''}`}
      aria-label="Loading content..."
    />
  );
}

export default LoadingSpinner;
