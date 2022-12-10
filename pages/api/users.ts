import type { NextApiRequest, NextApiResponse } from "next";
import { file } from "./file";

const users = file("./db/users.json");

export interface IDbUserDto {
  id: string;
  role: string;
  username: string;
  login: string;
  password: string;
  firstName: string;
  secondName: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`users`);
}
