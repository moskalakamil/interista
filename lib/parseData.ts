import { Article } from "@/types/article";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { z } from "zod";

const ArticleType = z.object({
  id: z.string(),
  created_time: z.string(),
  last_edited_time: z.string(),
  created_by: z.object({
    object: z.string(),
    id: z.string(),
  }),
  last_edited_by: z.object({
    object: z.string(),
    id: z.string(),
  }),
  cover: z.object({
    type: z.literal("file"),
    file: z.object({
      url: z.string(),
    }),
  }),
  parent: z.object({
    type: z.string(),
    database_id: z.string(),
  }),
  properties: z.object({
    "Hide article": z.object({
      id: z.string(),
      type: z.literal("checkbox"),
      checkbox: z.boolean(),
    }),
    // TODO: Implement me :)
    // article_id: z.object({
    //   id: z.string(),
    //   type: z.string(),
    //   rich_text: z.array(
    //     z.object({
    //       plain_text: z.string(),
    //     })
    //   ),
    // }),
    Title: z.object({
      id: z.string(),
      type: z.literal("title"),
      title: z.array(
        z.object({
          plain_text: z.string(),
        })
      ),
    }),
    Tags: z.object({
      id: z.string(),
      type: z.literal("multi_select"),
      multi_select: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          color: z.string(),
        })
      ),
    }),
    Author: z.object({
      id: z.string(),
      type: z.literal("created_by"),
      created_by: z.object({
        object: z.literal("user"),
        id: z.string(),
        name: z.string(),
        avatar_url: z.string().nullable(),
        type: z.string(),
        person: z.object({
          email: z.string(),
        }),
      }),
    }),
  }),
});

export const parseData = (post: GetPageResponse): Article => {
  try {
    const parsedData = ArticleType.parse(post);

    const { id, properties, created_time, last_edited_time, cover } =
      parsedData;
    const { Author, Title, Tags } = properties;
    console.warn(Tags);

    return {
      id: id,
      // authorId: "1", // TODO: implement me
      content: "",
      title: Title.title[0].plain_text,
      createdAt: created_time,
      updatedAt: last_edited_time,
      // published: true, // TODO: implement me
      tags: Tags.multi_select,
      author: {
        id: Author.id,
        name: Author.created_by.name,
        email: Author.created_by.person.email,
        avatarUrl: Author.created_by.avatar_url,
      },
      avatarUrl: cover.file.url,
    };
  } catch (e) {
    throw new Error("Error parsing data");
  }
};
