import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

const getCatImageBuffer = (id: string) => {
  const catImage = fs.readFileSync(`./db/catsImagesById/cat${id}.jpg`);
  const catImageBuffer = Buffer.from(catImage).toString("base64");
  return catImageBuffer;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const catId = req.body.catId;
  res.setHeader("Content-Type", "image/jpg");

  try {
    res.send({
      status: 0,
      payload: getCatImageBuffer(catId),
    });
  } catch (e) {
    res.send({
      status: 1,
      payload: "image not found",
    });
  }
}
