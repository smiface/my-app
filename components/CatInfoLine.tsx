import { FC } from "react";

export const CatInfoLine: FC<{ info: string[] }> = ({ info }) => (
  <h2 className="pr-2" key={info.toString()}>
    {info[0]}: {info[1]}
  </h2>
);
