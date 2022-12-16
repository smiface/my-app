import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile, saveFile } from "./file";
import { randomiseToken } from "./helpers";
import { IDbTokenDto } from "./token";
import { IDbUserDto } from "./users";

const users = parsedFile("./db/users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokens = parsedFile("./db/tokens.json");
  const sessionTokenValid = tokens.some((t: IDbTokenDto) => t.sessionToken === req.body.sessionToken);
  !sessionTokenValid && res.send("wrong token");

  setTimeout(() => {
    res.send({ status: 200 });
  }, 500);
}
