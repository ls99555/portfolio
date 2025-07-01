/**
 * Validates environment variables at build time
 * Add this to ensure all required env vars are present
 */

const requiredEnvVars = [
  'RESEND_API_KEY',
  'OPENWEATHER_API_KEY',
] as const;

const optionalEnvVars = [
  'NODE_ENV',
  'VERCEL_URL',
  'NEXT_PUBLIC_GA_MEASUREMENT_ID',
  'NEXT_PUBLIC_GOOGLE_VERIFICATION',
] as const;

export function validateEnvVars() {
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    );
  }
  
  return {
    required: Object.fromEntries(
      requiredEnvVars.map(key => [key, process.env[key]!])
    ),
    optional: Object.fromEntries(
      optionalEnvVars.map(key => [key, process.env[key]])
    ),
  };
}

// Only validate in production or when explicitly requested
if (process.env.NODE_ENV === 'production' || process.env.VALIDATE_ENV === 'true') {
  validateEnvVars();
}
