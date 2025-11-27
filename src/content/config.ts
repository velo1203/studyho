import { defineCollection, z } from "astro:content";

const columns = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        summary: z.string().optional(),
        tags: z.array(z.string()).default([]),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { columns };
