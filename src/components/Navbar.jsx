import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import SmartImage from "./SmartImage";
import { useLanguage } from "../context/languageContext"; // Added for language support

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // Added language context

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // Translations for Navbar links
  const translations = {
    en: {
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      toggle: "العربية",
      name: "Mosaab",
    },
    ar: {
      about: "عني",
      portfolio: "أعمالي",
      contact: "اتصل بي",
      toggle: "English",
      name: "مصعب",
    },
  };

  const t = translations[language];

  return (
    <div
      className="flex text-2xl justify-between items-center text-gray-200
    max-w-[1200px] mx-auto h-24"
    >
      <div className="flex items-center">
        <SmartImage
          src="/MyLogo1.webp"
          alt="Mosaab's logo"
          width={40}
          height={40}
          priority
          className="w-10 h-10 mr-2"
          sizes="40px"
        />
        <h1 className="text-2xl font-bold">{t.name}</h1>
      </div>

      <div className="flex items-center gap-8">
        <ul className="z-10 hidden gap-12 cursor-pointer md:flex">
          {["about", "portfolio", "contact"].map((item) => (
            <li key={item} className="relative group">
              <Link to={item} smooth={true} duration={500}>
                {t[item]}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 ease-in-out transform scale-x-0 bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>

        {/* Modern Segmented Language Switcher */}
        <div className="flex items-center p-1 border rounded-full select-none bg-white/5 border-white/10 backdrop-blur-md">
          <button
            onClick={() => language === "ar" && toggleLanguage()}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
              language === "en"
                ? "bg-gradient-to-r from-[#7a0d8a] to-[#c92085] text-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => language === "en" && toggleLanguage()}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer ${
              language === "ar"
                ? "bg-gradient-to-r from-[#c92085] to-[#c68109] text-white shadow-md font-sans"
                : "text-gray-400 hover:text-white"
            }`}
          >
            عربي
          </button>
        </div>
      </div>

      <div onClick={toggleNav} className="z-30  md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 glass transition-transform duration-300 ease-in-out"
            : "fixed left-[-100%] transition-transform duration-300 ease-in-out"
        }
      >
        <ul className="mt-24 space-y-8 text-4xl font-semibold">
          {["about", "portfolio", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t[item]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
