# Branding Assets

This folder contains the site's branding assets. PNG versions have been generated from the SVG sources.

## Generated Files

### From `favicon.svg`:
- `favicon-16x16.png` — 16×16px
- `favicon-32x32.png` — 32×32px
- `favicon-192x192.png` — 192×192px (for Android)
- `favicon-512x512.png` — 512×512px (for PWA)
- `apple-touch-icon.png` — 180×180px (for iOS)

### From `og-image.svg`:
- `og-image.png` — 1200×630px (for social sharing)

## How to Regenerate

If you update the SVG sources, regenerate PNGs with:

```bash
node scripts/generate-assets.mjs
```

This uses Sharp (bundled with Astro) to convert SVGs to PNGs at all required sizes.

## Color Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Void | #0a0a14 | Background |
| Nebula | #582870 | Primary purple |
| Orchid | #9048a0 | Accent purple |
| Stardust | #f8b0d8 | Star glow |
| Flare | #fff4e0 | Bright star center |

## Notes

- The SVG favicon works in modern browsers and is preferred
- PNG fallbacks are needed for older browsers and some platforms
- Apple Touch Icon should have no transparency (iOS adds rounded corners automatically)
- OG image must be PNG/JPG — SVG won't work for social sharing
