import {defineCollection, z} from "astro:content";

const songs = defineCollection({
  type: "data",
  schema: z.object({
    url: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    singers: z.string(),
    date: z.string(),
    thumbnails: z.object({
      default: z
        .object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
        })
        .optional(),
      medium: z
        .object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
        })
        .optional(),
      high: z
        .object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
        })
        .optional(),
      standard: z
        .object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
        })
        .optional(),
      maxres: z
        .object({
          url: z.string(),
          width: z.number(),
          height: z.number(),
        })
        .optional(),
    }),
    position: z.number(),
    videoOwnerChannelTitle: z.string(),
  }),
});

export const collections = {songs};
