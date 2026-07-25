import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import { projects } from "../data/projects";
import { projectsTranslations } from "../data/projectsTranslations";
import SmartImage from "./SmartImage";
import ToolIcon from "./ToolIcon";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { language } = useLanguage();

  const t = projectsTranslations[language];
  const project = projects[currentProject];
  const projectTr = t.projects[project.id];

  return (
    <div
      className="my-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-8 gap-6"
      id="portfolio"
    >
      {/* Left column: project picker */}
      <div className="relative z-10 grid col-span-1 md:col-span-3 place-items-center">
        <p className="text-gray-200 md:mb-[-100px] mb-10 font-bold text-4xl -skew-y-6">
          {t.ui.selectProject}
        </p>
        <SmartImage
          src="/cursor.webp"
          alt="arrow"
          width={100}
          height={100}
          className={`absolute hidden md:block w-[100px] top-24 ${
            language === "en" ? "right-9" : "left-9 transform scale-x-[-1]"
          }`} // Flip arrow for RTL
          sizes="100px"
        />
        <div className="w-full flex flex-col gap-6 px-6 mt-16 md:mt-32 text-left rtl:text-right z-10">
          {/* Client Work Group */}
          <div>
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-1">
              {t.ui.clientWork}
            </h4>
            <ul className="flex flex-row flex-wrap gap-4 text-xl md:flex-col md:gap-2 mb-4">
              {projects.map((p, index) => {
                if (p.kind !== "client") return null;
                return (
                  <li
                    key={p.id}
                    onClick={() => setCurrentProject(index)}
                    className={`cursor-pointer text-gray-300 transition-colors hover:text-white ${
                      currentProject === index ? "active-project text-white font-bold" : ""
                    }`}
                  >
                    {t.projects[p.id].title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Practice Projects Group */}
          <div>
            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 border-b border-white/10 pb-1">
              {t.ui.practiceProjects}
            </h4>
            <ul className="flex flex-row flex-wrap gap-4 text-xl md:flex-col md:gap-2 mb-4">
              {projects.map((p, index) => {
                if (p.kind === "client") return null;
                return (
                  <li
                    key={p.id}
                    onClick={() => setCurrentProject(index)}
                    className={`cursor-pointer text-gray-300 transition-colors hover:text-white ${
                      currentProject === index ? "active-project text-white font-bold" : ""
                    }`}
                  >
                    {t.projects[p.id].title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Right column: active project detail */}
      <div className="z-10 w-full col-span-1 p-6 glass rounded-2xl md:col-span-5">
        <div className="w-full mb-4 h-80">
          <SmartImage
            src={project.image}
            alt={projectTr.title}
            className="object-cover w-full h-full mx-auto rounded-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-6">
          <div className="flex mb-4 space-x-2 rtl:space-x-reverse">
            {project.tools.map((tool) => (
              <span key={tool} className="flex items-center">
                <ToolIcon name={tool} />
              </span>
            ))}
          </div>

          {projectTr.context && (
            <p className="text-sm text-purple-300 mb-1">
              {projectTr.context}
            </p>
          )}

          <p className="my-4 text-gray-200">{projectTr.description}</p>

          <div className="flex space-x-4 rtl:space-x-reverse">
            {project.links.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-gray-200 transition duration-300 rounded-xl bg-gradient-to-r from-[#7a0d8a] to-[#c92085] hover:from-[#8b1fa0] hover:to-[#db3296]"
              >
                {project.kind === "client" ? t.ui.live : t.ui.demo}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-2xl text-gray-200 transition duration-300 rounded-xl bg-gradient-to-r from-[#7a0d8a] to-[#c92085] hover:from-[#8b1fa0] hover:to-[#db3296]"
              >
                <AiFillGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
