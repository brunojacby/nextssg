import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 font-medium py-8
        flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <Link href="/" title="Home" className="mr-4" />
          <Link href="/houses" title="Houses Listing" className="mx-4" />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
