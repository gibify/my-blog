// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  url: string,
}

const data: Data[] = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/gibifyofficial/',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/gibifyofficial/',
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(data)
}