import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from project root
const result = dotenv.config({ path: join(__dirname, '..', '.env') });

if (result.error) {
  console.error('❌ Error loading .env file:', result.error.message);
  process.exit(1);
}

console.log('✅ .env file loaded successfully\n');
console.log('Environment variables found:');
console.log('─'.repeat(50));

const envVars = [
  'DATABASE_URL',
  'DATABASE_URL_DIRECT',
  'BETTER_AUTH_SECRET',
  'BETTER_AUTH_URL',
  'FRONTEND_URL',
  'RESEND_API_KEY',
  'RESEND_FROM_EMAIL',
  'STRIPE_SECRET_KEY',
  'STRIPE_PUBLISHABLE_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'STRIPE_PAYMENT_LINK_MONTHLY',
  'STRIPE_PAYMENT_LINK_ANNUAL',
  'VITE_STRIPE_PAYMENT_LINK_MONTHLY',
  'VITE_STRIPE_PAYMENT_LINK_ANNUAL',
];

envVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    // Mask sensitive values, show first/last few characters
    const masked = value.length > 20 
      ? `${value.substring(0, 10)}...${value.substring(value.length - 10)}`
      : value.substring(0, 20) + '...';
    console.log(`✓ ${varName}: ${masked}`);
  } else {
    console.log(`✗ ${varName}: NOT SET`);
  }
});

console.log('─'.repeat(50));
console.log(`\nTotal environment variables loaded: ${Object.keys(result.parsed || {}).length}`);
