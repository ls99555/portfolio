// API Response Types
export interface WeatherApiResponse {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
    };
  };
  location: {
    name: string;
    country: string;
    tz_id: string;
  };
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface WorkItem {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  githubLink: string;
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

// Form State Types
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
