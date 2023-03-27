import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../lib/prisma";
import { CreatePostBody } from "../../../types/posts";
import { Response } from "../../../types/Response";
import { ErrorsMessages, SuccessMessages } from "../constants";
import dayjs from "dayjs";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: CreatePostBody;
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const { title, content, authorId, published } = body;
  const isBodyValid = body && title && content && authorId;

  if (!isBodyValid) {
    return res.status(405).send({ message: ErrorsMessages.body });
  }

  try {
    const user = await prisma.post.create({
      data: {
        title,
        content,
        published,
        author: {
          connect: {
            id: authorId,
          },
        },
        createdAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      },
    });

    if (user.id) {
      return res.status(200).json({ message: SuccessMessages.postCreated });
    }
  } catch (e) {
    res.status(500).send({ message: e });
  }
}
