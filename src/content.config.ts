import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // Category support for blog posts
    category: z.string().optional(),
    // Featured flag for highlighting important posts
    featured: z.boolean().optional().default(false),
    // Author information
    author: z.string().optional(),
    // Optional tags for more specific categorization
    tags: z.array(z.string()).optional(),
  }),
});

// Collection for course content
const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    duration: z.string().optional(), // e.g., "8 weeks"
    level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    isEnrollmentOpen: z.boolean().optional().default(true),
    price: z.string().optional(),
    syllabus: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { blog, courses };
