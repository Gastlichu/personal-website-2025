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

### Phase 7: Bug Fixes & Enhanced Transitions

Polished the particle system and added directional drift during room transitions.

**What was built:**
- **Particle freeze fix:** Capped deltaTime to 50ms to prevent particle jumps when main thread is blocked (clicking, navigation)
- **Under construction banner:** Fixed banner at top of all pages with subtle orchid accent, persists across transitions
- **Directional particle drift:** Particles now drift in the direction of travel when navigating between rooms
  - Uses constellation positions to calculate direction vector
  - 800ms drift duration with smooth decay
  - Handles sub-pages (e.g., `/blog/some-post` maps to `/blog` room)
  - Respects `prefers-reduced-motion`

**Files modified:**
- `src/components/ParticleField.astro` — Added deltaTime cap, room positions, transition drift logic
- `src/layouts/Layout.astro` — Added under construction banner with `transition:persist`

**Technical notes:**
- Main thread blocking during click events was causing large deltaTime spikes; capping at 50ms ensures smooth animation resume
- Transition drift uses `astro:before-swap` event to detect navigation before page swap occurs
- Direction calculated from source room position to destination room position in constellation space

---

### Phase 8: Meta & SEO + Favicon & Branding

Added comprehensive SEO support and cosmic-themed branding assets.

**What was built:**

**SEO & Meta Tags:**
- Added `description`, `image`, and `article` props to Layout component
- Open Graph meta tags (og:title, og:description, og:image, og:url, og:type, og:site_name)
- Twitter Card meta tags (summary_large_image)
- Canonical URLs using Astro's `site` config
- Per-page descriptions for all rooms
- Blog posts marked as `article` type for better social sharing

**Favicon & Branding:**
- Custom SVG favicon with constellation design (4 stars + center accent)
- Uses cosmic color palette (void background, stardust/orchid stars)
- Web manifest for PWA-ready setup
- Theme color set to void (#0a0a14)
- OG image template (SVG) with full cosmic branding

**Files created:**
- `public/favicon.svg` — Constellation icon with cosmic gradients
- `public/og-image.svg` — Social share image template (1200×630)
- `public/site.webmanifest` — PWA manifest
- `public/BRANDING-ASSETS.md` — Guide for generating PNG versions

**Files modified:**
- `astro.config.mjs` — Added `site: 'https://gastlichu.com'`
- `src/layouts/Layout.astro` — Full SEO meta tags, favicon links, theme color
- All page files — Added SEO descriptions

**Technical notes:**
- SVG favicon works in modern browsers; PNG fallbacks documented for older browsers
- OG images must be raster (PNG/JPG) — SVG provided as template for conversion
- Canonical URLs require `Astro.site` which needs `site` in astro.config.mjs

---

### Phase 9: Image Optimization

Set up Astro's built-in image optimization for the gallery.

**What was built:**
- Updated content schema to use Astro's `image()` helper for automatic optimization
- Gallery pages now use `<Image />` component with:
  - Automatic format conversion (WebP/AVIF)
  - Responsive sizing
  - Lazy loading for thumbnails, eager loading for detail pages
  - Smooth hover zoom transitions
- Graceful fallback to star placeholder when no image is set
- Created `src/assets/gallery/` directory for artwork images

**Files modified:**
- `src/content/config.ts` — Updated schema to use `image()` from `astro:schema`
- `src/pages/gallery/index.astro` — Added `<Image />` component for thumbnails
- `src/pages/gallery/[slug].astro` — Added `<Image />` component for full artwork

**Files created:**
- `src/assets/gallery/README.md` — Guide for adding artwork images

**How to add artwork images:**
1. Place image in `src/assets/gallery/` (e.g., `nebula-heart.jpg`)
2. Reference in frontmatter: `image: ../../../assets/gallery/nebula-heart.jpg`
3. Astro automatically optimizes on build

---

### Phase 10: Additional Rooms

Added three new content rooms: Games, Webcomic, and Photos.

**What was built:**

**Games Room:**
- Content collection for game projects (released, in development, prototypes, jam entries)
- Schema: title, description, date, status, platform, image, playUrl, sourceUrl, tags, featured
- Grid layout with featured games section
- Individual game pages with play/source buttons
- Aurora-tinted room vibe (bg-aurora, bg-bloom, bg-abyss)
- 3 sample game entries

**Webcomic Room:**
- Content collection for webcomic pages organized by chapters
- Schema: title, chapter, page number, date, image, thumbnail, transcript
- Chapter-based listing with thumbnail grid
- Comic reader with prev/next navigation
- Click-based navigation on comic images (left/right thirds)
- Transcript accordion for accessibility
- Wisteria-tinted room vibe (bg-wisteria, bg-abyss, bg-orchid)
- 2 sample webcomic pages

**Photos Room:**
- Content collection for photography
- Schema: title, description, date, location, camera, image, tags, featured
- Gallery grid with featured photos section
- Individual photo pages with metadata (date, location, camera)
- Ember-tinted room vibe (bg-ember, bg-spark, bg-deep)
- 3 sample photo entries

**Constellation Navigation:**
- Expanded from 5 to 8 stars
- New layout: Games (top-left), Home (top-center), Style Guide (top-right), Blog (mid-left), Gallery (mid-right), Webcomic (lower-left), Photos (lower-right), About (bottom-center)
- Each star has its own color matching its room vibe
- Updated constellation lines to connect all 8 rooms
- Updated animation delays for staggered entrance

**Room Vibes added to Layout:**
| Room | Blob 1 | Blob 2 | Blob 3 |
|------|--------|--------|--------|
| Games | aurora | bloom | abyss |
| Webcomic | wisteria | abyss | orchid |
| Photos | ember | spark | deep |

**Files created:**
- `src/content/games/*.md` — 3 game entries (Echoes of the Void, Bioluminescent, Constellation Keeper)
- `src/content/webcomic/*.md` — 2 comic pages (Chapter 1, pages 1-2)
- `src/content/photos/*.md` — 3 photo entries (Midnight Tide, Forest Fog, Desert Stars)
- `src/pages/games/index.astro` — Games listing
- `src/pages/games/[slug].astro` — Individual game pages
- `src/pages/webcomic/index.astro` — Comic chapter listing
- `src/pages/webcomic/[slug].astro` — Comic reader
- `src/pages/photos/index.astro` — Photo gallery
- `src/pages/photos/[slug].astro` — Individual photo pages

**Files modified:**
- `src/content/config.ts` — Added games, webcomic, photos collections
- `src/layouts/Layout.astro` — Added games, webcomic, photos room vibes
- `src/components/ConstellationNav.astro` — Expanded to 8 stars with new positions
- `src/components/ParticleField.astro` — Updated room positions for transition drift

**Technical notes:**
- Each room has unique accent colors in constellation (aurora for games, orchid for webcomic, ember for photos)
- Webcomic reader supports keyboard navigation hints
- Photos schema supports camera metadata for photography enthusiasts
- Particle drift now works with all 8 room positions
- **Astro 5.x schema fix:** The `image()` helper must be accessed via schema callback (`schema: ({ image }) => z.object({...})`) rather than imported from `astro:schema`

---

### Phase 11: Links Room

Added a linktree-style Links room for external links, shop items, and social profiles.

**What was built:**

**Links Room:**
- Content collection for external links with categories
- Schema: title, description, url (required), category (shop/social/portfolio/support/other), icon, image, order, featured
- Linktree-style single-page layout with category groupings
- Featured links displayed prominently at top
- Hover effects with warm coral/spark accents
- All links open in new tabs
- 6 sample link entries (shop, social, portfolio, support)

**Constellation Navigation:**
- Expanded from 8 to 9 stars
- Links positioned at center (50%, 52%) as a connecting hub
- Connected to Blog, Gallery, Webcomic, and Photos via constellation lines
- Spark/coral colored star matching room vibe

**Room Vibe:**
| Room | Blob 1 | Blob 2 | Blob 3 |
|------|--------|--------|--------|
| Links | coral | spark | nebula |

**Files created:**
- `src/content/links/*.md` — 6 sample links (shop-prints, shop-commissions, social-bluesky, social-github, portfolio-itch, support-kofi)
- `src/pages/links/index.astro` — Links listing page

**Files modified:**
- `src/content/config.ts` — Added links collection
- `src/layouts/Layout.astro` — Added links room vibe
- `src/components/ConstellationNav.astro` — Added 9th star for Links
- `src/components/ParticleField.astro` — Added /links room position

**Technical notes:**
- Links room uses category-based grouping for organization
- Featured links shown separately at top for emphasis
- No individual [slug] pages needed — all links are external
- Order field allows manual sorting within categories

---

### Phase 12: Transition Optimization & Loading States

Optimized page transitions for snappier navigation and added a subtle loading overlay for slow connections.

**What was built:**

**Faster Transitions:**
- Content fade reduced from default ~300ms to **150ms**
- Blob color transitions reduced from 1000ms to **300ms**
- Particle drift duration reduced from 800ms to **400ms**
- Overall perceived transition time cut from ~1s to ~150-300ms

**Smart Loading Overlay:**
- Only appears if transition takes longer than **150ms threshold**
- Fast navigations skip the overlay entirely (no visual glitch)
- Subtle **backdrop blur** (4px) instead of solid background
- Soft **pulsing orchid glow** in center
- Quick 150ms fade in/out
- Respects `prefers-reduced-motion`

**Files modified:**
- `src/layouts/Layout.astro` — Added custom fade duration, faster blob transitions, loading overlay with smart timing
- `src/components/ParticleField.astro` — Reduced transition drift duration

**Technical notes:**
- Uses Astro's `fade({ duration: '150ms' })` for custom transition timing
- Overlay controlled via `astro:before-preparation` and `astro:after-swap` events
- Timer-based threshold ensures overlay only shows for genuinely slow loads
- Backdrop-filter blur provides dreamy effect without heavy visuals

---

### Phase 13: Real Games & iOS Fix

Added actual game projects and fixed a mobile-specific particle bug.

**What was built:**

**Real Games Added:**
- **Rocket Upgrade** — Space adventure with ship customization, multi-planet progression, resource collection
  - Links to: `https://gastlichu.com/games/Build_a_Rocket/index.html`
  - Tags: space, shooter, customization, arcade
- **Séance Sphere** — Supernatural digital pet simulation (gothic Tamagotchi)
  - Links to: `https://gastlichu.com/games/seance-sphere/seance-sphere.html`
  - Tags: virtual pet, tamagotchi, supernatural, casual
- Both games have preview images in `src/assets/games/`
- Removed all placeholder games (Echoes of the Void, Bioluminescent, Constellation Keeper)

**iOS Particle Fix:**
- Fixed bug where stars would reset constantly when scrolling on iOS
- Cause: iOS Safari's address bar hide/show triggers `resize` events, which was reinitializing all particles
- Fix: Only reinitialize particles when viewport **width** changes (actual resize/orientation), not height-only changes from address bar

**Files created:**
- `src/content/games/rocket-upgrade.md` — Real game entry
- `src/content/games/seance-sphere.md` — Real game entry
- `src/assets/games/rocket-upgrade.png` — Game preview image
- `src/assets/games/seance-sphere.png` — Game preview image

**Files removed:**
- `src/content/games/echoes-of-the-void.md`
- `src/content/games/bioluminescent.md`
- `src/content/games/constellation-keeper.md`

**Files modified:**
- `src/components/ParticleField.astro` — Added width tracking to prevent iOS resize resets
- `src/assets/games/README.md` — Updated path instructions

**Technical notes:**
- Image paths from content files use `../../assets/games/` (two levels up from `src/content/games/` to `src/assets/games/`)
- Astro auto-optimizes game images on build (e.g., 1253KB → 35KB for seance-sphere)
- iOS address bar resize only changes height; tracking width prevents false positives

---

### Phase 14: Dual-Mode Navigation & Performance Polish

Overhauled the navigation system with dual menu modes and added numerous performance and visual refinements.

**What was built:**

**Dual-Mode Navigation System:**
- Created new `Navigation.astro` component replacing `ConstellationNav.astro`
- **Kebab mode (default):** Traditional dropdown menu with 8 navigation items
- **Constellation mode:** Full-screen star map overlay (original design)
- Toggle button to switch between modes
- Preference stored in localStorage and persists across sessions
- Style Guide removed from navigation (still accessible via direct URL)

**Constellation Menu Animations:**
- SVG lines now animate with undulating/floating motion using bezier curves
- Navigation stars have subtle floating animation (bounce effect)
- Added twinkling starfield background (24 decorative stars)
- Darkened backdrop when overlay is open for better contrast
- Fixed alignment issue: menu items now properly connect to constellation points
  - Changed SVG from `preserveAspectRatio="xMidYMid meet"` to `preserveAspectRatio="none"`
  - SVG coordinates now map directly to percentage positions

**Performance Optimizations:**
- Removed backdrop-blur from loading overlay (was causing lag on Chrome)
- Particle canvas fades to 0% opacity during transitions (reduces render load while animation loop continues)
- Added `content-auto` class using `content-visibility: auto` for off-screen content
- Particle count increased from 50/25 to **65/30** (desktop/mobile) after initial reduction made page look empty
- Glow layers increased from 2 to **3** for richer particle rendering

**Content & Accessibility:**
- Created `ContentContainer.astro` component for readable prose sections
  - Max-width constraint, comfortable padding
  - Accessible line lengths and spacing
- Replaced all placeholder blog posts with real content:
  - "Building Cosmic Ocean: A Human-AI Collaboration Report" (3,500+ words)
  - Documents the human-AI collaboration process that built this site
- Removed placeholder posts (phosphorescent-paths, stonework-remembers, vespertine-hollows)

**Files created:**
- `src/components/Navigation.astro` — New dual-mode navigation component
- `src/components/ContentContainer.astro` — Readable content wrapper
- `src/content/blog/building-cosmic-ocean.md` — Real blog post about the project

**Files removed:**
- `src/components/ConstellationNav.astro` — Replaced by Navigation.astro
- `src/content/blog/phosphorescent-paths.md` — Placeholder removed
- `src/content/blog/the-stonework-remembers.md` — Placeholder removed
- `src/content/blog/vespertine-hollows.md` — Placeholder removed

**Files modified:**
- `src/layouts/Layout.astro` — Switched to Navigation component, removed backdrop-blur from overlay
- `src/components/ParticleField.astro` — Particle count 65/30, 3 glow layers, canvas fade during transitions, removed style-guide from room positions
- `src/pages/blog/[slug].astro` — Uses ContentContainer for article content

**Technical notes:**
- Navigation mode stored as `navMode` in localStorage ('kebab' or 'constellation')
- SVG constellation uses `<path>` with quadratic bezier curves instead of `<line>` for animation flexibility
- CSS animations use `--delay` custom properties for staggered entrance effects
- Background stars use `--size` and `--delay` custom properties for variety
- All animations respect `prefers-reduced-motion`
- Starfield is `aria-hidden="true"` for accessibility

**CSS Animation Highlights:**
```css
/* Line undulation - subtle wave motion */
@keyframes line-undulate {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(0.3%); }
}

/* Star floating - gentle bounce */
@keyframes star-float {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  25% { transform: translate(-50%, calc(-50% - 3px)) scale(1); }
  75% { transform: translate(-50%, calc(-50% + 3px)) scale(1); }
}

/* Background star twinkling */
@keyframes star-twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
}
```

---

## 2026-01-14 — Polish Session

### Phase 15: Theme System, Bug Fixes & Quick Wins

Major polish session adding dark/light mode, fixing navigation bugs, and completing previously deferred tasks.

**What was built:**

**Dark/Light Mode (Twilight Theme):**
- Full theme system with CSS custom properties
- **Cosmic (dark):** Original deep space aesthetic — default
- **Twilight (light):** Softer, muted cosmic colors — dusty lavenders, soft purples, dreamy pastels
- Theme toggle in kebab menu dropdown
- **Sun/Eclipse toggle in constellation menu:**
  - Cosmic mode: Eclipsed sun with glowing corona ring
  - Twilight mode: Pulsating golden sun with animated rays
  - Pure CSS state transitions (no JavaScript animation needed)
- Theme persists via localStorage
- Ignores OS preference — cosmic is intentional default, twilight is opt-in
- Updated ParticleField with twilight-specific particle colors (lavender, dusty rose, pearl, mist, blush)

**Bug Fixes:**
- **Room colors not updating during navigation:** Blob colors weren't changing when traveling between rooms. Added JavaScript listener for `astro:after-swap` that updates blob classes based on current path.
- **Theme resetting on navigation:** Theme would revert to cosmic when navigating. Script wasn't re-running after View Transitions replaced DOM. Fixed by listening for `astro:after-swap` and re-applying theme from localStorage.
- **Mobile close hint:** Constellation menu said "press Esc" which doesn't work on mobile. Now shows "Tap a star or tap outside to close" on small screens using responsive Tailwind classes.

**Quick Wins:**
- **PNG Favicons:** Generated via Sharp script — 16x16, 32x32, 192x192, 512x512
- **Apple Touch Icon:** 180x180
- **Open Graph Image:** 1200x630 PNG for social sharing
- **RSS Feed:** `/rss.xml` endpoint using `@astrojs/rss`
- **Text Shadows for Readability:** Replaced heavy content containers with `.text-readable` class using layered text shadows. Maintains floating-in-space aesthetic while ensuring text is legible over breathing background.

**404 Page:**
- "Lost in the Void" themed error page
- Floating 404 with subtle animation
- Orbit ring with small star circling the number
- "Return Home" and "Go Back" navigation options
- Poetic message: *"Even stars sometimes wander from their constellations."*

**Files created:**
- `src/pages/404.astro` — Lost in space error page
- `src/pages/rss.xml.ts` — RSS feed endpoint
- `scripts/generate-assets.mjs` — Sharp script for PNG generation
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/favicon-192x192.png`
- `public/favicon-512x512.png`
- `public/apple-touch-icon.png`
- `public/og-image.png`

**Files modified:**
- `src/styles/global.css` — Added Twilight theme color palette, `.text-readable` class
- `src/layouts/Layout.astro` — Flash prevention script, blob IDs for JavaScript manipulation
- `src/components/Navigation.astro` — Theme toggle in menu, sun/eclipse toggle in constellation, twilight CSS overrides, mobile close hint
- `src/components/ParticleField.astro` — Twilight particle colors, theme change listener
- `public/site.webmanifest` — Updated with PNG icon references

**Technical notes:**
- Theme flash prevention uses inline script in `<head>` that runs before body renders
- CSS-only theme switching via `[data-theme="twilight"]` selector
- Sun/eclipse animation uses CSS transitions on `opacity` and `transform` — no JavaScript animation
- RSS feed uses Astro's content collections API for type-safe blog queries
- Text shadows use multiple layers with varying blur/opacity for depth

**CSS Highlights:**
```css
/* Text readability over breathing background */
.text-readable {
  text-shadow:
    0 0 20px rgba(10, 10, 20, 0.9),
    0 0 40px rgba(10, 10, 20, 0.7),
    0 2px 4px rgba(0, 0, 0, 0.8);
}

/* Twilight theme override */
[data-theme="twilight"] .text-readable {
  text-shadow:
    0 0 20px rgba(240, 236, 248, 0.9),
    0 0 40px rgba(232, 228, 240, 0.7),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Sun/Eclipse state transitions */
[data-theme="twilight"] .eclipse-sun { opacity: 0; transform: scale(0.75); }
[data-theme="twilight"] .pulsating-sun { opacity: 1; transform: scale(1); }
```

---

### Phase 16: Navigation UX & Typography Improvements

Refined navigation behavior and improved readability across the site.

**What was built:**

**Navigation Button Improvements:**
- Main toggle button enlarged: 48px → **56px** (`w-14 h-14`)
- Mode toggle button enlarged: 40px → **48px** (`w-12 h-12`)
- Changed kebab (vertical dots) to **hamburger** (horizontal lines) icon
- Added `backdrop-blur-sm` for depth
- Better hover states with stardust glow on star button

**Dual Menu Behavior (Breaking Change):**
- Removed "mode switching" concept entirely
- Now two separate buttons that each open their own menu:
  - **☰ Hamburger button** → Opens dropdown menu
  - **★ Star button** → Opens constellation overlay
- **Mutual exclusivity:** Opening one menu automatically closes the other
- No more localStorage for nav mode — simpler mental model

**Typography Scale Increase:**
| Element | Before | After |
|---------|--------|-------|
| Display | 48px (3rem) | **56px (3.5rem)** |
| H1 | 36px (2.25rem) | **40px (2.5rem)** |
| H2 | 28px (1.75rem) | **32px (2rem)** |
| H3 | 20px (1.25rem) | **24px (1.5rem)** |
| Body | 16px (1rem) | **18px (1.125rem)** |
| Small | 14px (0.875rem) | **16px (1rem)** |
| Micro | 12px (0.75rem) | **14px (0.875rem)** |

- Constellation star labels: `text-sm` → `text-base`
- Menu items: Added `text-lg` and increased padding
- Close hint text: `text-sm` → `text-base`
- Improved line heights for better readability

**Loading Overlay Timing:**
- Threshold lowered: 150ms → **30ms**
- Now shows on almost all transitions for consistent feel across devices
- Previously only visible on mobile (slower connections)

**Files modified:**
- `src/components/Navigation.astro` — New dual-button behavior, larger buttons, hamburger icon, updated JavaScript
- `src/styles/global.css` — Increased typography scale
- `src/layouts/Layout.astro` — Lowered overlay threshold

**Technical notes:**
- Removed `navMode` localStorage — no longer needed
- Each button has its own toggle function that closes the other menu first
- Simplified ARIA: each button controls its own menu via `aria-controls`

---

## Current Project State

### File Structure
```
public/
├── favicon.svg
├── og-image.svg
├── site.webmanifest
└── BRANDING-ASSETS.md

src/
├── assets/
│   ├── gallery/
│   │   └── README.md
│   └── games/
│       ├── README.md
│       ├── rocket-upgrade.png
│       └── seance-sphere.png
├── components/
│   ├── ui/
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── GlowText.astro
│   │   ├── Input.astro
│   │   ├── Link.astro
│   │   └── index.ts
│   ├── ContentContainer.astro
│   ├── Navigation.astro
│   └── ParticleField.astro
├── content/
│   ├── blog/
│   │   └── building-cosmic-ocean.md
│   ├── gallery/
│   │   ├── abyssal-bloom.md
│   │   ├── chimeric-whispers.md
│   │   ├── coral-depths.md
│   │   ├── nebula-heart.md
│   │   ├── stardust-memory.md
│   │   └── the-waning-light.md
│   ├── games/
│   │   ├── rocket-upgrade.md
│   │   └── seance-sphere.md
│   ├── photos/
│   │   ├── desert-stars.md
│   │   ├── forest-fog.md
│   │   └── midnight-tide.md
│   ├── webcomic/
│   │   ├── chapter-1-page-1.md
│   │   └── chapter-1-page-2.md
│   ├── links/
│   │   ├── shop-prints.md
│   │   ├── shop-commissions.md
│   │   ├── social-bluesky.md
│   │   ├── social-github.md
│   │   ├── portfolio-itch.md
│   │   └── support-kofi.md
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
│   ├── games/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── photos/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── webcomic/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── links/
│   │   └── index.astro
│   ├── about.astro
│   ├── index.astro
│   └── style-guide.astro
└── styles/
    └── global.css
```

### What's Working
- [x] Breathing background with animated blobs
- [x] Particle field with cursor interaction
- [x] Navigation with 8 rooms (kebab dropdown + constellation overlay modes)
- [x] View Transitions between pages
- [x] Room-specific color vibes (9 rooms including hidden style-guide, each with unique palette)
- [x] Component library (Button, Card, Link, GlowText, Input, Badge)
- [x] Typography scale
- [x] Style guide reference page
- [x] Mobile responsive
- [x] Accessibility (reduced motion, keyboard nav, ARIA)
- [x] Content collections for blog, gallery, games, webcomic, photos, links
- [x] Individual post/artwork/game/comic/photo pages with dynamic routing
- [x] Prose styling for blog content
- [x] Directional particle drift during room transitions
- [x] Under construction banner
- [x] Meta tags / SEO / Open Graph
- [x] Favicon and branding assets (SVG + templates)
- [x] Image optimization (Astro `<Image />` component)
- [x] Games room with project showcase
- [x] Webcomic room with chapter navigation and reader
- [x] Photos room with photography gallery
- [x] Links room (linktree-style external links directory)
- [x] Optimized transitions (150ms content fade, 300ms blob transitions)
- [x] Smart loading overlay (only appears for slow loads >150ms)
- [x] Real game entries with preview images (Rocket Upgrade, Séance Sphere)
- [x] iOS scroll stability (particle field no longer resets on address bar changes)
- [x] Dual-mode navigation (kebab dropdown + constellation overlay)
- [x] Navigation mode persistence via localStorage
- [x] Animated constellation lines (undulating bezier curves)
- [x] Floating star animations with twinkling starfield background
- [x] Content container component for readable prose
- [x] Real blog content (Building Cosmic Ocean collaboration report)
- [x] Performance: particle fade during transitions, no backdrop-blur
- [x] Dark/light mode (Cosmic ↔ Twilight themes)
- [x] Theme toggle in kebab menu + sun/eclipse toggle in constellation
- [x] PNG favicon variants (16, 32, 192, 512)
- [x] Apple touch icon (180x180)
- [x] Open Graph image (1200x630)
- [x] RSS feed (`/rss.xml`)
- [x] Text shadows for readability (replaces content containers)
- [x] 404 "Lost in the Void" error page
- [x] Room color transitions fixed (blob colors update during navigation)
- [x] Theme persistence across View Transitions
- [x] Mobile-friendly close hint in constellation menu
- [x] Dual-button navigation (hamburger + constellation, mutually exclusive)
- [x] Larger, more readable typography scale
- [x] Consistent loading overlay across devices

### Not Yet Implemented
- [ ] Contact form integration
- [ ] Footer (attempted, removed — broke floating-in-space aesthetic)

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

5. **iOS resize events:** iOS Safari triggers `resize` events when the address bar hides/shows during scroll. This only changes viewport height, not width. Track width to distinguish real resizes from address bar changes.

6. **Dual navigation modes:** Users can toggle between traditional kebab dropdown and constellation overlay. Preference stored in localStorage as `navMode`. Default is kebab for familiarity, with constellation as an easter egg/aesthetic option.

7. **SVG alignment for constellation:** Using `preserveAspectRatio="none"` allows SVG coordinates to map directly to percentage-positioned DOM elements. Without this, the SVG would maintain aspect ratio and coordinates wouldn't align with menu items.

---

*Last updated: 2026-01-16 (Phase 16)*
