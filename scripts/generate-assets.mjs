/**
 * Generate PNG assets from SVG sources
 * Run with: node scripts/generate-assets.mjs
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

// Read SVG files
const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
const ogImageSvg = readFileSync(join(publicDir, 'og-image.svg'));

// Favicon sizes to generate
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateFavicons() {
  console.log('Generating favicons...');

  for (const { name, size } of faviconSizes) {
    await sharp(faviconSvg, { density: 300 })
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name));

    console.log(`  ✓ ${name} (${size}x${size})`);
  }
}

async function generateOgImage() {
  console.log('Generating OG image...');

  await sharp(ogImageSvg, { density: 150 })
    .resize(1200, 630)
    .png()
    .toFile(join(publicDir, 'og-image.png'));

  console.log('  ✓ og-image.png (1200x630)');
}

async function main() {
  try {
    await generateFavicons();
    await generateOgImage();
    console.log('\nAll assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
