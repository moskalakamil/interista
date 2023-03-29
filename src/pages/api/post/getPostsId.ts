import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../lib/prisma";
import { Post } from "@/types/posts";
import { Response } from "@/types/Response";

export const getPosts = async () => {
  const postsId = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  return postsId.map(({ id }: { id: string }) => id);
};

export default async function handler({}: NextApiRequest, res: NextApiResponse<Post[] | Response>) {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
