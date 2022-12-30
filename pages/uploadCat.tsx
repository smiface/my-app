// https://codesandbox.io/s/thyb0?file=/pages/api/file.js:445-457
import axios from "axios";
import { clsx } from "clsx";
import React, { useState } from "react";

export const textStyle = "text-slate-500 hover:text-slate-100";
export const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
export const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
export const customStyle = `duration-200 bg-slate-900 rounded-md`;

const uploadCat = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    axios.post("http://localhost:3000/api/cat-img-upload", body).then((res) => console.log(res));
  };

  return (
    <>
      <input type="file" name="myImage" onChange={uploadToClient} />
      <img src={createObjectURL} alt="" className="w-[240px] h-[300px] border-2 border-slate-200 " />
      <button
        className={clsx(customStyle, textStyle, borderStyle, " w-[240px] h-[50px] rounded-t-none border-t-0")}
        type="submit"
        onClick={uploadToServer}
      >
        ⇑ Upload
      </button>
    </>
  );
};

export default uploadCat;
