import { Article } from "@/types/article";
import { parseData } from "./parseData";
import { notionClient } from "./notion";

export const getAllPublishedArticles = async () => {
  const { results } = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const parsedResult: Article[] = [];

  results.map(async (post) => {
    parsedResult.push(parseData(post));
  });

  console.log(parsedResult[0]);

  return parsedResult;
};
