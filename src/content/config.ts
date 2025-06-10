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

const freestyles = defineCollection({
  type: "data",
  schema: z.object({
    url: z.string(),
    title: z.string(),
    subtitle: z.string(),
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
  }),
});

const modoDiabloSongs = defineCollection({
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

const hitboySongs = defineCollection({
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

const vampirosSongs = defineCollection({
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

const concerts = defineCollection({
  type: "data", // para datos, no para páginas
  schema: z.array(
    z.object({
      coords: z.object({
        lat: z.number(),
        long: z.number(),
      }),
      city: z.string(), // si querés incluir ciudad
      country: z.string(),
      concerts: z.array(
        z.object({
          eventDate: z.string(),
          venueName: z.string(),
          tourName: z.string(),
        })
      ),
    })
  ),
});

export const collections = {
  songs,
  freestyles,
  modoDiabloSongs,
  hitboySongs,
  vampirosSongs,
  concerts,
};
