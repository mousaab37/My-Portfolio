import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import SmartImage from "./SmartImage";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiWordpress,
  SiOpencode,
  SiBricks,
} from "react-icons/si";
import { RiNextjsLine, RiPhpLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

import { FaServer } from "react-icons/fa";

import { MdOutlineJavascript } from "react-icons/md";

import { TbBrandWordpress } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";

import { DiReact } from "react-icons/di";

import {
  TbBrandLinkedin,
  TbBrandLinkedinFilled,
  TbBrandGithub,
  TbBrandGithubFilled,
} from "react-icons/tb";
import { AiOutlineInstagram, AiFillInstagram } from "react-icons/ai";
import cv from "../cv/mycv.pdf";
import { useLanguage } from "../context/languageContext"; // Added for language support

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { language } = useLanguage();

  // Translations for Hero section
  const translations = {
    en: {
      hi: "Hi! I am Mosaab",
      roles: ["Frontend Developer.", "Wordpress Developer."],
      tagline:
        "Focus on running your business — I'll focus on growing it online.",
      download: "Download CV",
      cvName: "Mosaab_CV.pdf",
      techStack: "My Tech Stack",
    },
    ar: {
      hi: "مرحباً! أنا مصعب",
      roles: ["مطوّر واجهات أمامية.", "مطوّر ووردبريس."],
      tagline: "ركّز أنت على إدارة عملك، وأنا أتكفّل بتنميته على الإنترنت.",
      download: "تحميل CV",
      cvName: "السيرة_الذاتية_مصعب.pdf",
      techStack: "تقنياتي",
    },
  };

  const t = translations[language];

  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0"
      id="home"
    >
      <div className="grid p-8 md:grid-cols-2 md:col-span-5 glass rounded-2xl">
        <SmartImage
          src="/PLAYA.webp"
          alt="Mosaab — profile picture"
          width={800}
          height={800}
          className="w-full md:w-[800px] rounded-2xl mx-auto mb-6 md:mb-0"
          priority
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div
          className={`flex flex-col text-gray-200 space-y-4 my-auto ${language === "en" ? "md:ml-8" : "md:mr-8"}`}
        >
          {/* Conditional margin for RTL */}
          <p className="text-2xl font-bold text-center md:text-4xl md:text-left rtl:text-right">
            {t.hi}
          </p>
          <div className="flex items-center h-12 text-center md:text-left rtl:text-right">
            <TypeAnimation
              key={language}
              sequence={[t.roles[0], 1500, t.roles[1], 1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] bg-clip-text text-transparent"
            />
          </div>
          <p className="text-xl font-semibold leading-snug text-center text-gray-400 md:text-2xl md:text-left rtl:text-right">
            {t.tagline}
          </p>
          <div className="z-10 flex flex-col w-full gap-4 mt-6 sm:flex-row">
            <a
              href={cv}
              download={t.cvName}
              className="flex items-center justify-center px-6 py-3 font-bold text-center text-gray-200 transition-all duration-300 transform border border-orange-500 cursor-pointer rounded-xl hover:scale-105 hover:bg-orange-400/20"
            >
              {t.download}
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:col-span-3">
        <div className="p-12 text-5xl glass rounded-2xl">
          <p className="mb-4 text-xl font-bold text-center text-gray-200">
            {t.techStack}
          </p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <TbBrandWordpress className="mx-auto text-blue-500" size={50} />
            <RiNextjsLine
              className="mx-auto text-gray-900 dark:text-white"
              size={50}
            />
            <DiReact className="mx-auto text-sky-400" size={50} />
            <IoLogoJavascript className="mx-auto text-yellow-400" size={50} />

            <SiOpencode className="mx-auto text-gray-400" size={40} />
            <RiPhpLine className="mx-auto text-indigo-400" size={50} />
            <FcLinux className="mx-auto " size={50} />
            <FaServer className="mx-auto text-emerald-500" size={50} />
          </div>
        </div>

        <div className="flex items-center justify-around gap-5 p-6 text-6xl glass rounded-2xl">
          <a
            href="https://github.com/mousaab37"
            target="_blank"
            className="text-gray-300 cursor-pointer "
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {hoveredIcon === "github" ? (
              <TbBrandGithubFilled />
            ) : (
              <TbBrandGithub />
            )}
          </a>
          <a
            href="https://www.instagram.com/m.osaab?igsh=dXY3ZDNrYTB1eXkw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 cursor-pointer"
            onMouseEnter={() => setHoveredIcon("instagram")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {hoveredIcon === "instagram" ? (
              <AiFillInstagram />
            ) : (
              <AiOutlineInstagram />
            )}
          </a>
          <a
            href="https://www.linkedin.com/in/mousaab-saeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 cursor-pointer"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {hoveredIcon === "linkedin" ? (
              <TbBrandLinkedinFilled />
            ) : (
              <TbBrandLinkedin />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
