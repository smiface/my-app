import { nanoid } from "nanoid";
import Link from "next/link";

export const Navbar: React.FC<{ links: { path: string; title: string }[] }> = ({ links }) => {
  return (
    <nav className="p-4">
      {links.map((link) => (
        <Link
          key={nanoid()}
          href={link.path}
          className="font-medium  hover:text-slate-100 text-slate-200 visited:text-slate-300  duration-200 mr-2"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
