import Link from "next/link";
import UserWidget from "../UserWidget/UserWidget";

const Navbar = () => {
  return (
    <nav className="bg-quaternary w-full shadow-md">
      <div className="bleed">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:text-secondary transition-colors"
          >
            NV Tech Store
          </Link>
          <UserWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
