import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../prisma/client'

type postProps = {
  title: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body)
    if (req.method === 'POST') {
      if (!post.title.length) {
        return res.status(400).json({message: "Title is required"})
      }
      try {
        const data = await prisma.post
        return res.status(200).json(data);
      } catch (error) {
        res.status(401).json({ err: 'Error has occurred while creating a post' });
      }
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}
