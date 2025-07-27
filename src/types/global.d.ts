declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      RESEND_API_KEY: string;
      NEXT_PUBLIC_WEATHER_API_KEY: string;
      NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
      NEXT_PUBLIC_GOOGLE_VERIFICATION?: string;
      OPENWEATHER_API_KEY: string;
      VERCEL_URL?: string;
      VALIDATE_ENV?: string;
    }
  }
}

export {};
