import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-quaternary w-full">
      <div className="bleed">
        <Link href="/">Navbar</Link>
      </div>
    </nav>
  );
};

export default Navbar;
