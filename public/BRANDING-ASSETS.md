# Branding Assets

This folder contains the source SVG files for the site's branding. PNG versions need to be generated for full browser/platform support.

## Files to Generate

### From `favicon.svg`:
- `favicon-16x16.png` — 16×16px
- `favicon-32x32.png` — 32×32px
- `favicon-192x192.png` — 192×192px (for Android)
- `favicon-512x512.png` — 512×512px (for PWA)
- `apple-touch-icon.png` — 180×180px (for iOS)

### From `og-image.svg`:
- `og-image.png` — 1200×630px (for social sharing)

## How to Generate

### Option 1: Online Tools
- [RealFaviconGenerator](https://realfavicongenerator.net/) — Upload the SVG, generates all sizes
- [Favicon.io](https://favicon.io/) — Simple favicon generator

### Option 2: Command Line (using Inkscape or ImageMagick)
```bash
# Using Inkscape
inkscape favicon.svg -w 32 -h 32 -o favicon-32x32.png
inkscape favicon.svg -w 180 -h 180 -o apple-touch-icon.png
inkscape og-image.svg -w 1200 -h 630 -o og-image.png

# Using ImageMagick (may need to install rsvg for SVG support)
convert -background none -resize 32x32 favicon.svg favicon-32x32.png
```

### Option 3: Figma/Design Tool
1. Import the SVG files
2. Export at the required sizes

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
