import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="flex w-full py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />

      <ul className="sm:flex items-center">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
