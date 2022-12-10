import fs from "fs";
import path from "path";

const filePath = (filename: string) => path.resolve(filename);
export const fileBuff = (filename: string) => fs.readFileSync(filePath(filename));
export const file = (filename: string) => JSON.parse(fileBuff(filename).toString());
