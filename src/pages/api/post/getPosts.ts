import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../lib/prisma";
import { Post } from "@/types/posts";
import { Response } from "@/types/Response";

export default async function handler(
  {}: NextApiRequest,
  res: NextApiResponse<Post[] | Response>
) {
  try {
    const posts = await prisma.post.findMany({
      take: 50,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.status(200).json(posts);
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
