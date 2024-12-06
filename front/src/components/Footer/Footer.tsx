const Footer = () => {
  return (
    <footer className="bg-quaternary w-full py-6">
      <div className="bleed flex justify-between items-center text-secondary text-sm gap-4 pr-4">
        <p>
          &copy; {new Date().getFullYear()} NV Tech Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
