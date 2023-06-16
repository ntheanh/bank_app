import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="flex w-full py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />

      <ul className="sm:flex hidden items-center list-none justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white cursor-pointer font-poppins text-[16px] font-normal 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div>
          <ul className="sm:flex hidden items-center list-none justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white cursor-pointer font-poppins text-[16px] font-normal 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
