/**
 * Environment variables validation and type safety
 */

interface EnvironmentVariables {
  NEXT_PUBLIC_WEATHER_API_KEY: string;
  RESEND_API_KEY: string;
  NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
  // Add other env vars as needed
}

function validateEnvironmentVariables(): EnvironmentVariables {
  const requiredVars = {
    NEXT_PUBLIC_WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  return requiredVars as EnvironmentVariables;
}

// Validate on startup (server-side only)
let env: EnvironmentVariables | null = null;

export function getEnvironmentVariables(): EnvironmentVariables {
  if (!env) {
    env = validateEnvironmentVariables();
  }
  return env;
}

// Client-side safe access to public env vars
export function getPublicEnvironmentVariables() {
  return {
    WEATHER_API_KEY: process.env.NEXT_PUBLIC_WEATHER_API_KEY || '',
    GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  };
}
