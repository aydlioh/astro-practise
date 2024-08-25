import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      categories: z.array(z.string()),
      date: z.string(),
      featured: z.boolean().default(false),
      image: image(),
      title: z.string(),
    }),
});

export const collections = {
  posts,
};
