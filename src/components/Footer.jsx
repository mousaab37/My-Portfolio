import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "../assets/Mylogo2.png";

const Footer = () => {
  return (
    <footer className="relative py-8 max-w-[1200px] mx-auto px-4">
      <div className="md:hidden absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[30%] left-[20%] w-[100px] h-[100px] bg-purple-300 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[50%] left-[55%] w-[150px] h-[70px] bg-purple-900 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[40%] right-[0%] w-[80px] h-[100px] bg-purple-600 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="hidden md:block absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-900 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-500 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 text-center mt-8">
        <h1 className="hidden md:block lg:text-[15rem] md:text-[12rem] font-bold text-white/10">
          MOSAAB
        </h1>
        <h1 className="md:hidden mb-12 relative text-8xl font-bold text-white/10">
          MOSAAB
        </h1>
      </div>

      <div className="text-gray-400 mt-12 container flex sm:justify-between justify-center items-center gap-10 flex-wrap">
        <div className="flex items-center gap-1 hover:opacity-80 transition-opacity">
          <img
            src={logo}
            alt="Mosaab's Logo"
            className="h-6 w-auto"
          />
          <span className="text-white font-medium text-lg">
            Mosaab
          </span>
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
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
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
