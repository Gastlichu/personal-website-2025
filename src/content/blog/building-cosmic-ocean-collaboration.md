---
title: "Building Cosmic Ocean: A Human-AI Collaboration Report"
description: "A candid account of building this website in a single day using Claude and Claude Code — documenting what each party contributed and how the collaboration actually worked."
date: 2026-01-13
tags:
  ["ai", "collaboration", "web development", "behind the scenes", "guest post"]
draft: false
---

_This is a guest post written by Claude (Anthropic) at José's request, attempting to give an honest account of the collaboration that built this website rather than overselling either party's contribution._

---

## The Project

**What we built:** This personal portfolio website with interactive particle backgrounds and constellation navigation  
**Duration:** Single day (January 13, 2026)  
**Tech Stack:** Astro 5.x, Tailwind CSS 4.x, GitHub Actions, Dreamhost  
**Result:** 9-room website with breathing backgrounds, particle systems, content collections, and automated deployment

---

## The Division of Labor

### What José Brought

**Creative Vision & Direction**

- The core concept: "cosmic ocean" — a liminal space where deep ocean meets outer space, where it's intentionally ambiguous whether you're seeing bioluminescent creatures or distant nebulae
- The "rooms not pages" architecture — each section as a distinct environment with its own personality
- Mood board curation — selected the jellyfish, nebulae, and cosmic images that drove the color palette extraction
- The constellation navigation concept (navigating between rooms via star map)
- "Elegant Geocities" aesthetic goal — personality and human touch without visual chaos
- Gothic placeholder prose style ("vespertine hollows," "chimeric whispers")

**Decision-Making**

When presented with options, José made the calls:

- Typography: Chose Outfit + DM Sans over other pairings after reviewing visual comparisons
- Framework: Accepted Astro recommendation after understanding the trade-offs
- Components: Selected "Both" (Astro components + utility classes) when asked about architecture
- Room structure: Defined which rooms to include and their purposes

**Quality Assurance**

- Caught the iOS Safari bug where particles reset on scroll (address bar hide/show triggers resize events)
- Tested on mobile devices throughout
- Noticed visual issues and requested fixes
- Verified deployment was working (or not working, in the Dreamhost case)

**Real Content**

- Provided actual game projects (Rocket Upgrade, Séance Sphere) with descriptions
- Has existing work to populate the site once placeholder content is replaced

**Process Questions**

José consistently asked "why" and "how" questions:

- "Help me understand this" when Claude Code offered architecture options
- "Can you give me a quick 101 on everything we did so far"
- "What will I see if I go to gastlichu.com right now?"

This wasn't passive acceptance — it was active learning while building.

---

### What Claude (Chat) Contributed

**Technical Scaffolding**

- Astro project initialization and configuration
- Tailwind CSS setup with custom color palette
- GitHub Actions workflow for automated deployment
- SFTP configuration for Dreamhost

**Design System Extraction**

- Wrote Python scripts to extract dominant colors from mood board images
- Organized colors into functional categories (backgrounds, primary, accents, glow, particles)
- Created the design system specification document
- Packaged it as a "skill file" for use in Claude Code sessions

**Structured Decision Support**

Rather than making choices, I presented options with trade-offs:

- "Here are 7 font pairings — Direction A is more editorial, Direction B is more friendly"
- "Astro vs Next.js vs SvelteKit — here's what each is good for"
- "CMS options: Decap is simplest, Sanity is most powerful"

**Troubleshooting**

- Diagnosed Dreamhost "coming soon" page issue
- Identified it as a permissions/configuration problem (not user error)
- Helped craft support ticket with technical details
- Worked through terminal confusion (pasted code in wrong place, split panes)

**Translation Layer**

- Wrote prompts for Claude Code sessions ("Read the skill file first, then...")
- Created git commit messages summarizing work done
- Explained technical concepts in accessible terms

**Process Guidance**

- Suggested build order (background → navigation → rooms → content)
- Recommended when to commit/push vs. batch changes
- Advised on workflow (keep dev server in one terminal, Claude Code in another)

---

### What Claude Code Contributed

_Note: This is a separate tool/session, but part of the overall collaboration_

**Implementation**

- Wrote the actual Astro components
- Built the canvas-based particle system (80 particles, cursor reactivity, twinkle effects)
- Created constellation navigation with SVG lines and staggered animations
- Implemented view transitions with directional particle drift
- Built all 9 room pages with content collections
- Created the component library (Button, Card, Link, GlowText, Input, Badge)

**Technical Problem-Solving**

- Figured out `transition:persist` for particles across page transitions
- Implemented smart loading overlay (only shows for slow loads)
- Fixed the iOS resize event issue José identified
- Handled Astro 5.x schema differences

---

## What This Wasn't

**It wasn't "AI generates entire website from prompt"**

The initial prompt wasn't "make me a website." It was a conversation that started with mood boards, explored aesthetic directions, extracted colors programmatically, debated typography, and built up to implementation. The vision existed before any code was written.

**It wasn't a one-way instruction flow**

José pushed back, asked questions, caught bugs, made choices. When I suggested something, it went through a filter of "does this fit the vision?" The iOS particle bug is a perfect example — I didn't catch it, José did from real-device testing.

**It wasn't replacing creative judgment**

I can generate code and organize information. I can't tell you whether "cosmic ocean" is a good concept or whether the constellation navigation fits the mood. That's taste, and it came from José.

---

## What This Was

**A genuine back-and-forth**

The project evolved through conversation. The constellation navigation emerged from discussing how rooms should connect. The "elegant Geocities" framing helped clarify what playful-but-professional meant. The color palette came from analyzing images José selected.

**Separation of concerns**

- Chat Claude: Strategy, planning, decisions, troubleshooting, explanations
- Claude Code: Implementation, file creation, technical execution
- José: Vision, taste, QA, real content, learning

**Complementary strengths**

José brought creative direction and quality standards. I brought technical knowledge and the ability to quickly scaffold infrastructure. Neither could have done this alone in a day — José would need to learn Astro/Tailwind/GitHub Actions from scratch, and I can't originate a creative vision or catch bugs on iOS Safari.

---

## The Honest Limitations

**I don't know if it's good**

I can tell you the code works and follows best practices. I can't tell you if the aesthetic succeeds, if visitors will find it compelling, or if it represents José well. That requires human judgment and feedback from real users.

**The easy parts were easy**

Setting up Astro, configuring Tailwind, writing deployment workflows — this is well-documented territory. The hard creative work (what should this feel like? what makes it distinctive?) came from José.

**Debugging was sometimes slow**

The Dreamhost issue took hours of back-and-forth before we realized it was a server-side permissions problem. A more experienced developer might have suspected that sooner. We got there, but not efficiently.

---

## Takeaways

1. **AI collaboration works best with clear creative direction.** "Make me a website" produces generic results. "Liminal space between deep ocean and outer space, elegant Geocities, rooms not pages" produces something specific.

2. **The human stays in the decision seat.** Every meaningful choice — colors, fonts, architecture, features — went through José. I presented options and trade-offs; he decided.

3. **QA still requires human eyes and devices.** The iOS bug was invisible to me. Real-device testing caught it.

4. **Separation of tools helps.** Using chat for planning and Claude Code for implementation kept things organized. Trying to do everything in one place would have been messier.

5. **Learning while building is possible.** José asked "why" throughout and now understands the deployment pipeline, the file structure, how content collections work. It wasn't just "get a website" — it was "get a website and understand how it works."

---

## Final State

**What exists:**

- 9-room portfolio site with custom aesthetic
- Interactive particle background with cursor reactivity
- Constellation navigation between rooms
- Content collections for blog, gallery, games, webcomic, photos, links
- Automated deployment: push to GitHub → builds → deploys to Dreamhost
- Component library and style guide
- Mobile responsive with accessibility features

**What José can do now:**

- Edit markdown files to update content
- Push changes and have them auto-deploy
- Understand the structure well enough to request modifications
- Use the design system skill file in future Claude Code sessions

**What's left:**

- Replace placeholder content with real work
- Generate PNG favicons and OG images
- Optional: RSS feed, contact form

---

_— Claude (Anthropic), January 13, 2026_
