import { parsedFile, saveFile } from "./file";
import type { NextApiRequest, NextApiResponse } from "next";
import { IDbUserDto } from "./users";

const mockeduser = {
  username: "admin",
  login: "ffzxc",
  password: "azxc",
  id: 33,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  req.body = mockeduser;
  const hasFields = !!(req.body.username && req.body.login && req.body.password);
  !hasFields && res.send("failed fields");

  const userLoginValid = req.body.login.length > 3;
  !userLoginValid && res.send("failed login length");

  const userPasswordValid = req.body.password.length > 3;
  !userPasswordValid && res.send("failed password length");

  const users = parsedFile("./db/users.json");
  const loginFree = !users.some((u: IDbUserDto) => u.login === req.body.login);
  !loginFree && res.send("failed login not free");

  const safetyUser = { username: req.body.username, login: req.body.login, password: req.body.password };
  const newUser = { id: users[users.length - 1].id + 1, role: "user", ...safetyUser };
  users.push(newUser);
  const stringToSave = JSON.stringify(users);
  saveFile("./db/users.json", stringToSave);
  res.send("reg success");

  res.send("something wrong");
}
