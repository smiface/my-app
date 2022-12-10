import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";

const filePath = path.resolve("./db/users.json");
const users = fs.readFileSync(filePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`users`);
}
