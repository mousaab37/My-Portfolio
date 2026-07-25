import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import SmartImage from "./SmartImage";

import { useLanguage } from "../context/languageContext"; // Added for language support

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: { name: "Mosaab", bigName: "MOSAAB" },
    ar: { name: "مصعب", bigName: "مصعب" },
  };

  const t = translations[language];

  return (
    <footer className="relative py-8  max-w-[1200px] mx-auto ">
      <div className="absolute inset-0 overflow-hidden md:hidden -z-10">
        <div className="absolute top-[30%] left-[20%] w-[100px] h-[100px] bg-purple-300 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute inset-0 hidden overflow-hidden md:block -z-10">
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-900 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-500 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <h1 className="hidden md:block lg:text-[15rem] md:text-[12rem] font-bold text-white/10 uppercase">
          {t.bigName}
        </h1>
        <h1 className="relative mb-12 text-6xl font-bold uppercase md:hidden text-white/10">
          {t.bigName}
        </h1>
      </div>

      <div className="container flex flex-wrap items-center justify-center gap-10 mt-12 text-gray-400 sm:justify-between">
        <div className="flex items-center gap-1 transition-opacity hover:opacity-80">
          <SmartImage
            src="/Mylogo2.webp"
            alt="Mosaab's Logo"
            width={96}
            height={24}
            className="w-auto h-6"
            sizes="96px"
          />
          <span className="text-lg font-medium text-white">{t.name}</span>
        </div>

        <ul className="flex flex-row gap-6">
          {[
            {
              icon: <AiFillGithub size={28} />,
              link: "https://github.com/mousaab37",
            },
            {
              icon: <AiFillLinkedin size={28} />,
              link: "https://www.linkedin.com/in/mousaab-saeed",
            },
            {
              icon: <AiFillFacebook size={28} />,
              link: "https://www.facebook.com/mousaab.ks",
            },
            {
              icon: <AiFillInstagram size={28} />,
              link: "https://www.instagram.com/m.osaab?igsh=dXY3ZDNrYTB1eXkw",
            },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300 cursor-pointer hover:text-[#c92085]"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
