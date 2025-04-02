import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/cursor.png";
import { AiFillGithub } from "react-icons/ai";
import {
  DiReact,
  DiJavascript,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiLeaflet } from "react-icons/si";

const projects = [
  {
    img: project1,
    title: "World Wise",
    description: "WorldWise keeps track of your adventures.",
    tools: [<DiReact />, <DiCss3 />, <SiLeaflet />],
    links: {
      site: "https://worldwise-r.netlify.app/",
      github: "https://github.com/mousaab37/worldwise",
    },
  },
  {
    img: project2,
    title: "Mapty",
    description: "A Javascript map application to Map your workout.",
    tools: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <SiLeaflet />],
    links: {
      site: "https://mousaab37.github.io/mapty/",
      github: "https://github.com/mousaab37/mapty",
    },
  },
  {
    img: project3,
    title: "usePopcorn",
    description: "A website to find and save your favorite movies.",
    tools: [<DiReact />, <DiCss3 />],
    links: {
      site: "https://use-popcorn-react1.netlify.app/",
      github: "https://github.com/mousaab37/usepopcorn",
    },
  },
  {
    img: project4,
    title: "First Portfolio",
    description: "This is my first portfolio - modern and simple",
    tools: [<DiReact />, <DiCss3 />],
    links: {
      github: "https://github.com/mousaab37/first-portofolio",
    },
  },
  {
    img: project5,
    title: "Bankist",
    description: "A simpler banking experience for a simpler life.",
    tools: [<DiHtml5 />, <DiCss3 />, <DiJavascript />],
    links: {
      site: "https://mousaab37.github.io/Bankist/",
      github: "https://github.com/mousaab37/Bankist",
    },
  },
  {
    img: project6,
    title: "Kasper",
    description: "A demo landing page for a fake company.",
    tools: [<DiHtml5 />, <DiCss3 />],
    links: {
      site: "https://mousaab37.github.io/Kasper/",
      github: "https://github.com/mousaab37/Kasper",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6"
      id="portfolio"
    >
      <div className="relative z-10 col-span-1 md:col-span-3 grid place-items-center">
        <p className="text-gray-200 md:mb-[-100px] mb-10 font-bold text-4xl -skew-y-6">
          Select Project
        </p>
        <img
          src={arrow}
          className="absolute hidden md:block w-[100px] top-24 right-9"
          alt="arrow"
        />
        <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center md:gap-1 mb-11 md:space-y-4 text-2xl">
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`cursor-pointer text-gray-300 ${
                currentProject === index ? "active-project" : ""
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="z-10 glass p-6 w-full col-span-1 md:col-span-5">
        <div className="w-full h-80 mb-4">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <div className="p-6">
          <div className="flex space-x-2 mb-4">
            {projects[currentProject].tools.map((tool, index) => (
              <span
                key={index}
                className="flex text-3xl items-center text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="text-gray-200 my-4 ">
            {projects[currentProject].description}
          </p>

          <div className="flex space-x-4 ">
            {projects[currentProject].links.site && (
              <a
                href={projects[currentProject].links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                Demo
              </a>
            )}
            <a
              href={projects[currentProject].links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-2xl bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
