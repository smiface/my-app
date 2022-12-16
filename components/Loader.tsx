import { useEffect, useState } from "react";

export const Loader = () => {
  const [dots, setDots] = useState<string>(".");
  useEffect(() => {
    setTimeout(() => {
      switch (dots) {
        case ".":
          setDots("..");
          break;
        case "..":
          setDots("...");
          break;
        case "...":
          setDots(".");
          break;
      }
    }, 300);
  }, [dots]);

  return <h2 className="text-white">loading {dots}</h2>;
};
