import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./../../../../lib/prisma";
import { Response } from "@/types/Response";
import { CreateUserBody } from "@/types/user";
import { ErrorsMessages, SuccessMessages } from "../constants";
import dayjs from "dayjs";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: CreateUserBody;
}

export default async function handler(
  { body }: ExtendedNextApiRequest,
  res: NextApiResponse<Response>
) {
  const { name, email } = body;
  const isBodyValid = body && name && email;

  if (!isBodyValid) {
    res.status(405).send({ message: ErrorsMessages.body });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        createdAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      },
    });

    if (user.id) {
      return res.status(200).json({ message: SuccessMessages.userCreated });
    }
  } catch (e) {
    res.status(500).send({ message: e });
  }
}