import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile, saveFile } from "./file";
import { randomiseToken } from "./helpers";
import { IDbUserDto } from "./users";

const users = parsedFile("./db/users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userWithLogin = users.find((user: IDbUserDto) => user.login === req.body.login);
  !userWithLogin && res.send("user not found");
  const correctPass = userWithLogin?.password === req.body.password;
  !correctPass && res.send("wrong password");

  const refreshToken = randomiseToken();
  const sessionToken = randomiseToken();

  const tokens = parsedFile("./db/tokens.json");
  tokens.push({ id: userWithLogin.id, refreshToken: refreshToken, sessionToken: sessionToken });
  const stringToSave = JSON.stringify(tokens);
  saveFile("./db/tokens.json", stringToSave);

  res.send({
    status: 200,
    refreshToken,
    sessionToken,
  });
}
