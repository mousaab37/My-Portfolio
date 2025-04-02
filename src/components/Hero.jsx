import React, { useState } from "react";
import profilepic from "../assets/PLAYA.png";
import { TypeAnimation } from "react-type-animation";
import {
  DiReact,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiPython,
} from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";

import { VscTerminalBash } from "react-icons/vsc";

import {
  TbBrandLinkedin,
  TbBrandLinkedinFilled,
  TbBrandGithub,
  TbBrandGithubFilled,
} from "react-icons/tb";
import { AiOutlineInstagram, AiFillInstagram } from "react-icons/ai";
import cv from "../cv/mycv.pdf";
const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0"
      id="home"
    >
      <div className="grid md:grid-cols-2 md:col-span-5 p-8  border border-white/20 rounded-lg shadow-lg">
        <img
          className="w-full md:w-[800px] rounded-xl mx-auto mb-6 md:mb-0"
          src={profilepic}
          alt="profile pic"
        />
        <div className="flex flex-col text-gray-200 space-y-4 my-auto md:ml-8">
          <p className="text-2xl md:text-4xl font-bold text-center md:text-left">
            Hi! I am Mosaab <br />
            <TypeAnimation
              sequence={[
                "React Developer",
                1000,
                "Linux Admin",
                1000,
                "Telecom Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl md:text-3xl font-semibold text-gray-400 text-center md:text-left">
            With 1+ year of experience
          </p>
          <button
            className="mt-4 px-4 py-2 transform transition-transform z-10 cursor-pointer font-bold w-full text-gray-200 md:w-1/2 border border-orange-500 text-center rounded-xl
            hover:bg-orange-400/20 hover:border-wight-400 hover:scale-105duration-300"
          >
            <a href={cv} download="Mosaab_CV.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>

      <div className="grid md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass bg-gray-800 rounded-lg shadow-lg">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4 text-center">
            <DiHtml5 className="text-orange-500" size={50} />
            <DiCss3 className="text-blue-600" size={50} />
            <DiJavascript className="text-yellow-400" size={50} />
            <DiReact className="text-sky-600" size={50} />
            <VscTerminalBash className="text-gray-200" size={50} />
            <FcLinux size={50} />
            <DiPython className="text-[#4ce1f2]" size={50} />
            <FaDocker className="text-blue-400" size={50} />
          </div>
        </div>

        <div className="text-6xl flex gap-5 justify-around items-center glass bg-gray-800 rounded-lg shadow-lg p-6">
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
