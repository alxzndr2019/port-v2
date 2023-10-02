import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" text-[#00FF00] mx-auto flex justify-between p-4  lg:max-w-5xl lg:w-full lg:mb-0 ">
      <div>alxzndr.exe</div>
      <div className="hidden md:flex">
        <ul className="list-none p-0 m-0 flex justify-between gap-9 ">
          <li>Stacks</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Download CV</li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="block text-gray-800 hover:text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            <li>Stacks</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Download CV</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
