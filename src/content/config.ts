import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection
 * Posts with cosmic/gothic placeholder text aesthetic
 */
const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: image().optional(),
  }),
});

/**
 * Gallery Collection
 * Artwork entries with metadata
 * Images are automatically optimized by Astro
 */
const gallery = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    medium: z.enum(['Digital', 'Traditional', 'Mixed Media', 'Illustration', 'Photography']),
    image: image().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

/**
 * Games Collection
 * Game projects and interactive experiences
 */
const games = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['Released', 'In Development', 'Prototype', 'Jam Entry']).default('Released'),
    platform: z.array(z.string()).default([]),
    image: image().optional(),
    playUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

/**
 * Webcomic Collection
 * Comic chapters/episodes
 */
const webcomic = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    chapter: z.number(),
    page: z.number().optional(),
    date: z.coerce.date(),
    image: image().optional(),
    thumbnail: image().optional(),
    transcript: z.string().optional(),
  }),
});

/**
 * Photos Collection
 * Photography work - supports single photos or albums with multiple images
 */
const photos = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    camera: z.string().optional(),
    // Single image (for standalone photos)
    image: image().optional(),
    // Multiple images (for albums/galleries)
    images: z.array(image()).optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

/**
 * Links Collection
 * External links, shop items, social profiles
 * Linktree-style directory
 */
const links = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string().url(),
    category: z.enum(['shop', 'social', 'portfolio', 'support', 'other']).default('other'),
    icon: z.string().optional(), // Emoji or icon identifier
    image: image().optional(),
    order: z.number().default(0), // Lower numbers appear first
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  gallery,
  games,
  webcomic,
  photos,
  links,
};
