import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.post.findMany();
      return res.status(200).json(data);
    } catch (error) {
      res.status(401).json({ err: 'Error has occurred while making a post' });
    }
  }  
}
