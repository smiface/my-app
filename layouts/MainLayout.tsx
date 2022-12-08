import { Navbar } from "../components/Navbar";
const links = [{ path: "", title: "home" }];

export const MainLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="border-2 border-green-500 min-h-[100vh]">
      <Navbar links={links} />
      <div>{children}</div>
    </div>
  );
};
