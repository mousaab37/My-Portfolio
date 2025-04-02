import React from "react";
import code from "../assets/code.png";
import Certifications from "../assets/Certs.png";
import { Progress } from "../ui/progress";
import { DiLinux, DiReact } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";

const About = () => {
  return (
    <section
      id="about"
      className="text-white mt-8 p-6 md:p-0 max-w-[1200px] mx-auto"
    >
      <h2 className="text-6xl font-bold mb-8">
        About <span>Me</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="text-white/50 mb-6">
            Electronics and Communications Engineer with expertise in
            React frontend development and Linux system
            administration. My journey combines technical engineering
            knowledge with modern software development practices.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg  h-[220px] overflow-hidden ">
            <img
              src={code}
              alt="Project"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">
            02. Code Expertise
          </h3>
          <p className="text-white/50 mt-4">
            I am a web developer specializing in frontend development,
            with expertise in scripting automation and database
            design.
          </p>
          <div className="rounded-lg p-4 mt-6 mb-4 border border-white/20 glass">
            <code className="text-purple-200/50">
              const toolbox = [<br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Tailwind CSS',
              <br />
              &nbsp;&nbsp;'Python',
              <br />
              &nbsp;&nbsp;'Bash Scripting',
              <br />
              &nbsp;&nbsp;'PostgreSQL',
              <br />
              &nbsp;&nbsp;'Docker',
              <br />
              ];
            </code>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I possess a diverse skill set that combines technical
            expertise with strong interpersonal abilities, enabling me
            to adapt and excel in various environments
          </p>
          <div className="grid text-center gap-4">
            <div className="border border-white/20 rounded-lg p-3 glass">
              <h4 className="text-purple-300 font-medium mb-2">
                Technical Skills
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Programming </li>
                <li>OS:Linux</li>
                <li>Networking</li>
                <li>AI Tools</li>
                <li>Microsoft Office Suite</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3 glass">
              <h4 className="text-blue-300 font-medium mb-2">
                Soft Skills
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Self-Learning</li>
                <li>Problem-Solving</li>
                <li>Critical Thinking</li>

                <li>Adaptability</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mt-4 mb-4">
            04. Development Approach
          </h3>
          <p className="text-white/50">
            Building pixel-perfect React interfaces with a strong
            focus on user experience Passionate about clean code and
            scalable architecture.
          </p>

          <div className="space-y-4 mt-10">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium mb-2">
                  Frontend Development
                </label>
              </div>
              <Progress
                value={90}
                className="bg-purple-300/20 [&>div]:bg-purple-300 h-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium mb-2">
                  Linux Administration
                </label>
              </div>
              <Progress
                value={80}
                className="bg-blue-300/20 [&>div]:bg-blue-300 h-2"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium mb-2">
                  Python
                </label>
              </div>
              <Progress
                value={50}
                className="bg-green-300/20 [&>div]:bg-green-300 h-2"
              />
            </div>
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-4">
          <div className="h-[150px] overflow-hidden rounded-lg p-2 border border-white/20 relative">
            <img
              src={Certifications}
              alt="Training Certifications"
              className="w-full h-full rounded-md object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold my-4">
            05. Certifications & Training
          </h3>

          <div className="mt-4">
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg ">
                <HiMiniAcademicCap className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    Bachelor of Electronics and Communications
                    Engineering
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    Damascus University · 2018-2023
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg ">
                <DiReact className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    The Ultimate React Course
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    Udemy - Jonas Schmedtmann · 2024
                  </p>
                </div>
              </div>

              {/* Linux Certifications */}
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg ">
                <DiLinux className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    Linux Administration
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    KodeKloud & SCS · 2023-24
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg ">
                <FaLaptopCode className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">Other Courses</h4>
                  <p className="text-xs text-white/50 mt-1">
                    CCNA · 2020 | HTML & CSS · 2022 | JavaScript· 2023
                    | Python & PostgreSql · 2023 | AWS (CLF) · 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
