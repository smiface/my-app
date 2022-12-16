// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send({
    id: 1,
    name: "boris",
    age: "3",
    type: "vahui",
    likes: []
  });
}
