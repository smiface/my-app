import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "./pages/api/cat.jpg");
const imageBuffer = fs.readFileSync(filePath);

const x = Buffer.from(imageBuffer).toString("base64");

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "image/jpg");
  setTimeout(() => {
    res.send(x);
  }, 1000);
}
