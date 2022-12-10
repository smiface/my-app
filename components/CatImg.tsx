import { FC } from "react";
import Image from "next/image";

export const CatImg: FC<{ url: string }> = ({ url }) => {
  return <Image width={240} height={163} alt="cat img" src={`data:image/png;base64,${url}`} />;
};
