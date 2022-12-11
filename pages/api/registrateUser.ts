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
  const reg = req.body;
  const hasFields = !!(reg.username && reg.login && reg.password);
  !hasFields && res.send("failed fields");

  const userLoginValid = reg.login.length > 3;
  !userLoginValid && res.send("failed login length");

  const userPasswordValid = reg.password.length > 3;
  !userPasswordValid && res.send("failed password length");

  const users = parsedFile("./db/users.json");
  const loginFree = !users.some((u: IDbUserDto) => u.login === reg.login);
  !loginFree && res.send("failed login not free");

  const safetyUser = { username: reg.username, login: reg.login, password: reg.password };
  const newUser = { id: users[users.length - 1].id + 1, role: "user", ...safetyUser };
  const newUsers = [...users, newUser];
  const stringToSave = JSON.stringify(newUsers);
  saveFile("./db/users.json", stringToSave);
  res.send("reg success");

  res.send("something wrong");
}
