import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile } from "./file";

const users = parsedFile("./db/users.json");

export interface IDbUserDto {
  id: number;
  role: string;
  username: string;
  login: string;
  password: string;
}

export interface IDbUserToRegisterDto {
  username: string;
  login: string;
  password: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(`users`);
}
