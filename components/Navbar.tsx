const MyContent = () => <div className=" text-green-300 border-green-50 border-2"> MyContent 3</div>;

export const Navbar: React.FC<{ links: { path: string; title: string }[] }> = ({
  links,
}) => {
  return (
    <nav className=" border-2 border-green-500 p-2 m-2 ">
      {links.map((link) => (
        <a key={link.toString()} href={link.path} className="text-green-500 ">
          {link.title}
        </a>
      ))}
      <MyContent />
    </nav>
  );
};
