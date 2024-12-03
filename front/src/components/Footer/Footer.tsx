import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-quaternary w-full py-6">
      <div className="bleed flex justify-between items-center text-secondary text-sm">
        <p>
          &copy; {new Date().getFullYear()} NV Tech Store. All rights reserved.
        </p>

        <div className="flex gap-4 pr-4">
          <Link href="" className="hover:text-tertiary transition-colors">
            Terms and Conditions
          </Link>
          <Link href="" className="hover:text-tertiary transition-colors">
            Privacy Policy
          </Link>
          <Link href="" className="hover:text-tertiary transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
