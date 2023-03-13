import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../lib/prisma";
import { Response } from "@/types/Response";
import { ErrorsMessages, SuccessMessages } from "../constants";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: { id: string };
}

export default async function handler(
  { body: { id } }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const isBodyValid = id !== null;

  if (!isBodyValid) {
    res.status(400).send({ message: ErrorsMessages.body });
  }

  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: SuccessMessages.postDeleted });
  } catch (error) {
    res.status(404).send({ message: error });
  }
}
