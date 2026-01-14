# Gallery Images

Place artwork images in this directory. Astro will automatically optimize them.

## How to Add Images

1. **Add image file** to this directory (e.g., `nebula-heart.jpg`)

2. **Reference in frontmatter** of the gallery markdown file:

```yaml
---
title: "Nebula Heart"
date: 2024-08-15
medium: Digital
image: ../../../assets/gallery/nebula-heart.jpg
featured: true
tags: ["cosmic", "digital"]
---
```

## Supported Formats

- **JPG/JPEG** — Best for photographs and complex artwork
- **PNG** — Best for artwork with transparency
- **WebP** — Modern format, good compression (Astro converts to this automatically)
- **AVIF** — Most efficient (Astro can convert to this)

## Recommended Sizes

- **Source images:** At least 1200px on the longest edge for high-quality display
- Astro will generate optimized versions automatically:
  - Thumbnails for gallery grid
  - Full-size for detail pages
  - WebP/AVIF variants for modern browsers

## Image Optimization

Astro's `<Image />` component automatically:
- Converts to modern formats (WebP/AVIF)
- Generates responsive srcsets
- Lazy loads images
- Adds proper width/height to prevent layout shift

No manual optimization needed — just add high-quality source images.
