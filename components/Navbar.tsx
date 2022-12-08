export const Navbar: React.FC<{ links: { path: string; title: string }[] }> = ({
  links,
}) => {
  return (
    <nav className="p-4">
      {links.map((link) => (
        <a key={link.toString()} href={link.path} className="text-slate-200 hover:text-slate-100 visited:text-slate-300 font-medium">
          {link.title}
        </a>
      ))}
    </nav>
  );
};
