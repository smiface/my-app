import { Navbar } from "../components/Navbar";
const links = [{ path: "", title: "home" }];

export const MainLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className=" ">
      <Navbar links={links} />
      <div>{children}</div>
    </div>
  );
};
