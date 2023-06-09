import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="logo" />

      <ul className="flex ">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="text-white mr-10 ">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
