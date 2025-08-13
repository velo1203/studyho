import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    type: "content",
    schema: z.object({
        subject: z.enum(["국어", "영어", "수학"]),
        title: z.string(),
        summary: z.string().optional(),
        tags: z.array(z.string()).default([]),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        draft: z.boolean().default(false),
    }),
});

const logs = defineCollection({
    type: "content",
    schema: z.object({
        subject: z.enum(["국어", "영어", "수학"]),
        title: z.string().default(""),
        date: z.coerce.date(),
        items: z
            .array(
                z.object({
                    subject: z.enum(["국어", "영어", "수학"]),
                    minutes: z.number().int().min(1),
                    notes: z.string().optional(),
                })
            )
            .default([]),
        tags: z.array(z.string()).default([]),
        mood: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

const reviews = defineCollection({
    type: "content",
    schema: z.object({
        subject: z.enum(["국어", "영어", "수학"]),
        bookTitle: z.string(),
        author: z.string(),
        rating: z.number().min(1).max(5),
        tags: z.array(z.string()).default([]),
        publishedAt: z.coerce.date(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { posts, logs, reviews };
