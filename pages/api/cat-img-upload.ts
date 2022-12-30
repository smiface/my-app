// import type { NextApiRequest, NextApiResponse } from "next";

// import fs from "fs";

// const getCatImageBuffer = (id: string) => {
//   const catImage = fs.readFileSync(`./db/catsImagesById/cat${id}.jpg`);
//   const catImageBuffer = Buffer.from(catImage).toString("base64");
//   return catImageBuffer;
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   var imageBuffer = req.body;
//   var imageName = "./db/map.png";
//   fs.createWriteStream(imageName).write(imageBuffer);
//   console.log(req.body.buffer);
//   // image.mv(__dirname + "/" + image.name);
//   res.send("ok");
// }

import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file._writeStream.path);
  fs.writeFileSync(`./db/${file.originalFilename}`, data);
  await fs.unlinkSync(file._writeStream.path);
  return;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
      console.log(files.file.originalFilename);
      await saveFile(files.file);
      return res.status(201).send("");
    });
  } catch (err) {
    console.log(err);
  }
}
