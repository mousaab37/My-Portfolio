import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../assets/MyLogo1.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      className="flex text-2xl justify-between items-center text-gray-200 px-6 
    max-w-[1200px] mx-auto h-24"
    >
      <div className="flex items-center">
        <img src={logo} alt="My Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-2xl">Mosaab</h1>
      </div>

      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        {["about", "portfolio", "contact"].map((item) => (
          <li key={item} className="relative group">
            <Link to={item} smooth={true} duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 ease-in-out"
            ></span>
          </li>
        ))}
      </ul>

      <div onClick={toggleNav} className=" md:hidden z-30">
        {nav ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323] transition-transform duration-300 ease-in-out"
            : "fixed left-[-100%] transition-transform duration-300 ease-in-out"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          {["about", "portfolio", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
