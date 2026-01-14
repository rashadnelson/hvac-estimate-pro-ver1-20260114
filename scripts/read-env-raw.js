import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const envPath = join(__dirname, '..', '.env');
  const contents = readFileSync(envPath, 'utf8');
  
  console.log('='.repeat(60));
  console.log('RAW .ENV FILE CONTENTS:');
  console.log('='.repeat(60));
  console.log(contents);
  console.log('='.repeat(60));
  console.log(`\nFile length: ${contents.length} characters`);
  console.log(`Number of lines: ${contents.split('\n').length}`);
  
  // Parse manually to show what's detected
  const lines = contents.split('\n').filter(line => {
    const trimmed = line.trim();
    return trimmed && !trimmed.startsWith('#') && trimmed.includes('=');
  });
  
  console.log(`Valid key=value lines found: ${lines.length}`);
  
  if (lines.length > 0) {
    console.log('\nDetected variables:');
    lines.forEach(line => {
      const [key] = line.split('=');
      console.log(`  - ${key.trim()}`);
    });
  }
  
} catch (error) {
  console.error('Error reading .env file:', error.message);
  process.exit(1);
}
