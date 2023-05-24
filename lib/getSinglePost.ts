import { notionClient, notionToMarkdown } from "./notion";
import { parseData } from "./parseData";

export const getSinglePost = async (id: string) => {
  const result = await notionClient.pages.retrieve({
    page_id: id,
  });

  const blocks = await notionToMarkdown.pageToMarkdown(id);
  const { parent: content } = notionToMarkdown.toMarkdownString(blocks);

  return {
    ...parseData(result),
    content,
  };
};
