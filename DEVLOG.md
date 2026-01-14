# Cosmic Ocean Development Log

Personal website for José Angel (Gastlichu) — a liminal aesthetic where deep ocean meets outer space.

---

## Entry Format

```markdown
## YYYY-MM-DD — [Session Focus]
### What was built
### Files changed
### Technical notes
```

**Update frequency:** Per milestone or session, whichever comes first.

---

## Project Overview

**Stack:** Astro 5.x + Tailwind CSS 4.x
**Concept:** "Rooms" instead of pages, each with its own personality while sharing visual DNA
**Aesthetic:** Bioluminescent creatures or distant nebulae, plankton or stardust — the ambiguity is intentional

---

## 2025-01-13 — Initial Build Session

### Phase 1: Breathing Background

Created the first layer of the interactive background system.

**What was built:**
- Three animated gradient blobs using nebula, orchid, and abyss colors
- Slow drift animations (22-30 second cycles) with subtle scale breathing
- Fixed position behind all content
- Body background set to void (#0a0a14)
- GPU-optimized using CSS transforms and `will-change`
- Respects `prefers-reduced-motion`

**Files changed:**
- `src/layouts/Layout.astro` — Added blob elements and keyframe animations

---

### Phase 2: Particle System

Built the second and third layers of the background system.

**What was built:**
- Canvas-based particle field with 80 particles (40 on mobile, 20 if reduced motion)
- Particle colors: ember, spark, flare, stardust, bloom
- Slow drift (60-120 seconds to cross screen)
- Twinkle effect with individual rhythms per particle
- Multi-layer glow rendering (4 layers per particle)
- **Reactive layer:** Particles scatter away from cursor within 180px radius
- Touch support for mobile
- 2-second decay after cursor leaves

**Files created:**
- `src/components/ParticleField.astro` — Canvas + inline script for particle system

**Technical decisions:**
- Used canvas instead of DOM elements for performance with 80+ particles
- `is:inline` script with initialization guard to prevent re-initialization
- `transition:persist` to survive View Transitions

---

### Phase 3: Site Structure & Navigation

Built the constellation navigation and room pages.

**What was built:**
- **ConstellationNav component** — Interactive star map overlay
  - Toggle button (top-right) with constellation icon
  - Full-screen backdrop with blur
  - 5 stars positioned as a constellation shape
  - SVG lines connecting the stars
  - Staggered entrance animations (stars fade/scale in)
  - Active state glow for current page
  - Keyboard accessible (Escape to close)
  - Works with View Transitions

- **Room pages created:**
  - `/` (Home) — Hero with glowing name, cosmic tagline
  - `/blog` — Card list with purple glow vibe
  - `/gallery` — Grid layout with coral warmth
  - `/about` — Bio text with soft glow, pill-style links
  - `/style-guide` — Component reference page

- **Room-specific color vibes:**
  | Room | Blob 1 | Blob 2 | Blob 3 |
  |------|--------|--------|--------|
  | Home | nebula | orchid | abyss |
  | Blog | abyss | nebula | orchid |
  | Gallery | nebula | coral | abyss |
  | About | abyss | bloom | nebula |
  | Style Guide | wisteria | orchid | nebula |

- **View Transitions** enabled via Astro's `<ViewTransitions />`
  - Content fades between rooms
  - Background elements persist across navigation

**Files created:**
- `src/components/ConstellationNav.astro`
- `src/pages/blog.astro`
- `src/pages/gallery.astro`
- `src/pages/about.astro`
- `src/pages/style-guide.astro`

**Technical decisions:**
- Used `transition:persist` on background elements and nav to survive page transitions
- Active state managed via JavaScript (not props) to update after client-side navigation
- Constellation positions use percentage-based positioning for responsiveness

---

### Phase 4: Component Library

Built reusable UI components with both utility classes and Astro components.

**Utility classes added to `global.css`:**

| Category | Classes |
|----------|---------|
| Buttons | `.btn` `.btn-primary` `.btn-secondary` `.btn-ghost` `.btn-sm` `.btn-lg` |
| Cards | `.card` `.card-interactive` |
| Links | `.link` `.link-subtle` |
| Glow | `.glow` `.glow-subtle` `.glow-warm` `.glow-soft` |
| Inputs | `.input` `.input-error` |
| Badges | `.badge` `.badge-outline` `.badge-warm` |
| Typography | `.text-display` `.text-h1` `.text-h2` `.text-h3` `.text-body` `.text-small` `.text-micro` |

**Astro components created:**

| Component | Props | Description |
|-----------|-------|-------------|
| `Button` | variant, size, href, type, disabled | Primary interactive element |
| `Card` | interactive | Elevated surface container |
| `Link` | href, variant, external | Styled anchor with optional external indicator |
| `GlowText` | as, variant | Text with luminescent glow effect |
| `Input` | name, type, placeholder, error, multiline, rows | Form inputs |
| `Badge` | variant | Small labels/tags |

**Files created:**
- `src/components/ui/Button.astro`
- `src/components/ui/Card.astro`
- `src/components/ui/Link.astro`
- `src/components/ui/GlowText.astro`
- `src/components/ui/Input.astro`
- `src/components/ui/Badge.astro`
- `src/components/ui/index.ts` — Barrel export

**Files modified:**
- `src/styles/global.css` — Added all utility classes

---

### Phase 5: Style Guide Page

Created a comprehensive reference page for all design system components.

**Sections included:**
- Color palette with visual swatches (backgrounds, primary, accents, glow, particles)
- Typography scale examples (Display through Micro)
- Glow text variants
- Button variants and sizes
- Card examples (static and interactive)
- Link styles (default, subtle, external)
- Form inputs (text, email, error, textarea)
- Badge variants
- Utility class reference table

**Navigation updated:**
- Added 5th star to constellation for Style Guide
- Positioned at top-right, connected to Gallery

---

### Phase 6: Content Collections

Set up Astro content collections for blog posts and gallery items.

**What was built:**
- Content collection schemas with Zod validation
- Blog collection: title, description, date, tags, draft status
- Gallery collection: title, description, date, medium, tags, featured flag
- 3 sample blog posts with cosmic/gothic prose
- 6 sample gallery items (2 featured)
- Blog listing page with cards and tag badges
- Individual blog post pages with prose styling
- Gallery grid with featured section
- Individual artwork detail pages
- Dynamic routing via `[slug].astro` patterns

**Files created:**
- `src/content/config.ts` — Collection schemas
- `src/content/blog/*.md` — 3 blog posts
- `src/content/gallery/*.md` — 6 gallery items
- `src/pages/blog/index.astro` — Blog listing
- `src/pages/blog/[slug].astro` — Individual post pages
- `src/pages/gallery/index.astro` — Gallery grid
- `src/pages/gallery/[slug].astro` — Individual artwork pages

**Files removed:**
- `src/pages/blog.astro` — Replaced by `blog/index.astro`
- `src/pages/gallery.astro` — Replaced by `gallery/index.astro`

**Technical notes:**
- Using Astro's `getCollection()` for type-safe content queries
- `getStaticPaths()` generates routes at build time
- Prose styles scoped globally within blog posts
- Featured items displayed separately in gallery

---

## Current Project State

### File Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── GlowText.astro
│   │   ├── Input.astro
│   │   ├── Link.astro
│   │   └── index.ts
│   ├── ConstellationNav.astro
│   └── ParticleField.astro
├── content/
│   ├── blog/
│   │   ├── phosphorescent-paths.md
│   │   ├── the-stonework-remembers.md
│   │   └── vespertine-hollows.md
│   ├── gallery/
│   │   ├── abyssal-bloom.md
│   │   ├── chimeric-whispers.md
│   │   ├── coral-depths.md
│   │   ├── nebula-heart.md
│   │   ├── stardust-memory.md
│   │   └── the-waning-light.md
│   └── config.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── gallery/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── about.astro
│   ├── index.astro
│   └── style-guide.astro
└── styles/
    └── global.css
```

### What's Working
- [x] Breathing background with animated blobs
- [x] Particle field with cursor interaction
- [x] Constellation navigation with 5 rooms
- [x] View Transitions between pages
- [x] Room-specific color vibes
- [x] Component library (Button, Card, Link, GlowText, Input, Badge)
- [x] Typography scale
- [x] Style guide reference page
- [x] Mobile responsive
- [x] Accessibility (reduced motion, keyboard nav, ARIA)
- [x] Content collections for blog and gallery
- [x] Individual post/artwork pages with dynamic routing
- [x] Prose styling for blog content

### Not Yet Implemented
- [ ] Additional rooms (Webcomic, Games, Photos, Shop/Links)
- [ ] Directional particle drift during transitions
- [ ] Meta tags / SEO / Open Graph
- [ ] Favicon and branding assets
- [ ] Contact form integration
- [ ] Dark/light mode toggle (currently dark only)
- [ ] Image optimization for gallery
- [ ] RSS feed for blog

---

## Design System Reference

**Color palette:** See `src/styles/global.css` `@theme` block
**Typography:** Outfit (display) + DM Sans (body)
**Full design system:** `/Users/superdog/Documents/AppsDev/Web-Pages/Gastlichu.com/cosmic-ocean-design-system.md`

---

## Notes & Decisions

1. **View Transitions + Scripts:** Scripts don't re-run after client-side navigation. Solved with `is:inline` scripts and initialization guards, plus `astro:page-load` event listeners.

2. **Particle persistence:** Canvas element uses `transition:persist` so particles don't reset when navigating between rooms.

3. **Room colors:** Rather than animating blob colors (which would require JavaScript), using Tailwind classes with `transition-colors` for smooth CSS transitions when the page swaps.

4. **Component approach:** Built both utility classes AND Astro components. Classes for flexibility, components for convenience and props-based variants.

---

*Last updated: 2025-01-13*
