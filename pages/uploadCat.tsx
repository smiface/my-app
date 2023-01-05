// https://codesandbox.io/s/thyb0?file=/pages/api/file.js:445-457
import { clsx } from "clsx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { RootStore } from "./store/RootStore";

export const textStyle = "text-slate-500 hover:text-slate-100";
export const outlineStyle = "outline-none hover:outline-none hover:outline-4 active:outline-none";
export const borderStyle = "border-2 border-slate-500 hover:border-slate-300 active:border-slate-100";
export const customStyle = `duration-200 bg-slate-900 rounded-md`;

const uploadCat = observer(() => {
  return (
    <>
      <input type="file" name="myImage" onChange={RootStore.cat.uploadToClient} />

      <img
        src={RootStore.cat.uploadCatCreateObjectURL}
        alt=""
        className="w-[240px] max-h-[300px] border-2 border-slate-200 "
      />

      <button
        className={clsx(customStyle, textStyle, borderStyle, " w-[240px] h-[50px] rounded-t-none border-t-0")}
        type="submit"
        onClick={RootStore.cat.uploadToServer}
      >
        ⇑ Upload
      </button>
    </>
  );
});

export default uploadCat;
