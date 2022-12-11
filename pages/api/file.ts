import fs from "fs";
import path from "path";

const filePath = (filename: string) => path.resolve(filename);
export const fileBuff = (filename: string) => fs.readFileSync(filePath(filename));
export const parsedFile = (filename: string) => JSON.parse(fileBuff(filename).toString());
export const saveFile = (filename: string, data: string) => fs.writeFileSync(filename, data);

const addRowTo = (filename: string, newField: any) => {
  const fileBefore = parsedFile(filename);
  newField.id = fileBefore.length;
  const obj = fileBefore.push(newField);
  console.log(obj);
  //   const stringToSave = JSON.stringify(obj);
  //   saveFile(filename, stringToSave);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send("??");
}
