import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile } from "./file";
import { randomiseToken } from "./helpers";
import { IDbUserDto } from "./users";

const users = parsedFile("./db/users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userWithLogin = users.find((user: IDbUserDto) => user.login === req.body.login);
  const correctPass = userWithLogin?.password === req.body.password;

  const refreshToken = randomiseToken();
  const sessionToken = randomiseToken();

  console.log(correctPass);
  res.send(`users`);
}
