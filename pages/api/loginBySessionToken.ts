import type { NextApiRequest, NextApiResponse } from "next";
import { parsedFile, saveFile } from "./file";
import { randomiseToken } from "./helpers";
import { IDbTokenDto } from "./token";
import { IDbUserDto } from "./users";

const users = parsedFile("./db/users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const userWithLogin = users.find((user: IDbUserDto) => user.login === req.body.login);
  // !userWithLogin && res.send("user not found");
  // const correctPass = userWithLogin?.password === req.body.password;
  // !correctPass && res.send("wrong password");

  // const refreshToken = randomiseToken();
  // const sessionToken = randomiseToken();

  const tokens = parsedFile("./db/tokens.json");
  const sessionTokenValid = tokens.some((t: IDbTokenDto) => t.sessionToken === req.body.sessionToken);
  !sessionTokenValid && res.send("wrong token");

  console.log(sessionTokenValid);

  // tokens.push({ id: userWithLogin.id, refreshToken: refreshToken, sessionToken: sessionToken });
  // const stringToSave = JSON.stringify(tokens);
  // saveFile("./db/tokens.json", stringToSave);

  setTimeout(() => {
    res.send({ status: 200 });
  }, 500);
}
