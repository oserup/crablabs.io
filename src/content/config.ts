import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Crab Labs Team'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Content type for filtering/display
    // tutorial: step-by-step how-to guides
    // article: fact-based, research-driven content
    // opinion: perspectives, commentary, thought pieces
    contentType: z.enum(['tutorial', 'article', 'opinion']).default('article'),
  }),
});

export const collections = { blog };