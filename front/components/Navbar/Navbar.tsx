import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="bleed">
        <Link href="/">Navbar</Link>
      </div>
    </nav>
  );
};

export default Navbar;
