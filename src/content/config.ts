import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection
 * Posts with cosmic/gothic placeholder text aesthetic
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

/**
 * Gallery Collection
 * Artwork entries with metadata
 */
const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    medium: z.enum(['Digital', 'Traditional', 'Mixed Media', 'Illustration', 'Photography']),
    image: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  gallery,
};
