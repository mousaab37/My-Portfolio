import { useLanguage } from "../context/languageContext"; // Added for language support
import code from "../assets/code.png"; // Added missing import
import Certifications from "../assets/Certs.png"; // Added missing import
import { Progress } from "../ui/progress"; // Fixed import path
import { HiMiniAcademicCap } from "react-icons/hi2"; // Added missing import
import { DiReact, DiLinux } from "react-icons/di"; // Added missing import
import { FaLaptopCode } from "react-icons/fa"; // Added missing import

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About",
      me: "Me",
      background: {
        num: "01.",
        title: "Background",
        desc: "Electronics and Communications Engineer with expertise in React frontend development and Linux system administration. My journey combines technical engineering knowledge with modern software development practices."
      },
      code: {
        num: "02.",
        title: "Code Expertise",
        desc: "I am a web developer specializing in frontend development, with expertise in scripting automation and database design."
      },
      skills: {
        num: "03.",
        title: "Skills",
        desc: "I possess a diverse skill set that combines technical expertise with strong interpersonal abilities, enabling me to adapt and excel in various environments",
        tech: "Technical Skills",
        techList: ["Programming", "OS: Linux", "Networking", "AI Tools", "Microsoft Office Suite"],
        soft: "Soft Skills",
        softList: ["Self-Learning", "Problem-Solving", "Critical Thinking", "Adaptability", "Time Management"]
      },
      approach: {
        num: "04.",
        title: "Development Approach",
        desc: "Building pixel-perfect React interfaces with a strong focus on user experience. Passionate about clean code and scalable architecture.",
        frontend: "Frontend Development",
        linux: "Linux Administration",
        python: "Python"
      },
      certs: {
        num: "05.",
        title: "Certifications & Training",
        degree: "Bachelor of Electronics and Communications Engineering",
        uni: "Damascus University · 2018-2023",
        react: "The Ultimate React Course",
        udemy: "Udemy - Jonas Schmedtmann · 2024",
        linux: "Linux Administration",
        kode: "KodeKloud & SCS · 2023-24",
        others: "Other Courses",
        otherDesc: "CCNA · 2020 | HTML & CSS · 2022 | JavaScript · 2023 | Python & PostgreSql · 2023 | AWS (CLF) · 2024"
      }
    },
    ar: {
      title: "من",
      me: "أنا",
      background: {
        num: "٠١.",
        title: "نبذة عني",
        desc: "مهندس إلكترونيات واتصالات بخبرة في تطوير واجهات React وإدارة أنظمة لينكس. رحلتي تجمع بين المعرفة الهندسية التقنية وممارسات تطوير البرامج الحديثة."
      },
      code: {
        num: "٠٢.",
        title: "خبرة البرمجية",
        desc: "أنا مطور ويب متخصص في تطوير الواجهات الأمامية، مع خبرة في أتمتة البرامج النصية وتصميم قواعد البيانات."
      },
      skills: {
        num: "٠٣.",
        title: "المهارات",
        desc: "أمتلك مجموعة مهارات متنوعة تدمج الخبرة التقنية مع القدرات الشخصية القوية، مما يمكنني من التكيف والتميز في بيئات مختلفة.",
        tech: "المهارات التقنية",
        techList: ["البرمجة", "نظام لينكس", "الشبكات", "أدوات الذكاء الاصطناعي", "مجموعة مايكروسوفت أوفيس"],
        soft: "المهارات الشخصية",
        softList: ["التعلم الذاتي", "حل المشكلات", "التفكير النقدي", "التكيف", "إدارة الوقت"]
      },
      approach: {
        num: "٠٤.",
        title: "نهج التطوير",
        desc: "بناء واجهات React مثالية مع تركيز قوي على تجربة المستخدم. شغوف بالكود النظيف والبنية القابلة للتوسع.",
        frontend: "تطوير الواجهات الأمامية",
        linux: "إدارة أنظمة لينكس",
        python: "بايثون"
      },
      certs: {
        num: "٠٥.",
        title: "الشهادات والتدريب",
        degree: "بكالوريوس في هندسة الإلكترونيات والاتصالات",
        uni: "جامعة دمشق · ٢٠١٨-٢٠٢٣",
        react: "دورة React الكاملة",
        udemy: "Udemy - جوناس شميدتمان · ٢٠٢٤",
        linux: "إدارة أنظمة لينكس",
        kode: "KodeKloud & SCS · ٢٠٢٣-٢٤",
        others: "دورات أخرى",
        otherDesc: "CCNA ٢٠٢٠ | HTML & CSS ٢٠٢٢ | JavaScript ٢٠٢٣ | Python & PostgreSql ٢٠٢٣ | AWS (CLF) ٢٠٢٤"
      }
    }
  };

  const t = translations[language];

  return (
    <section
      id="about"
      className="text-white mt-8 p-6 md:p-0 max-w-[1200px] mx-auto"
    >
      <h2 className="text-6xl font-bold mb-8">
        {t.title} <span>{t.me}</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">{t.background.num} {t.background.title}</h3>
          <p className="text-white/50 mb-6">
            {t.background.desc}
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg h-[220px] overflow-hidden">
            <img
              src={code}
              alt="Project"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">
            {t.code.num} {t.code.title}
          </h3>
          <p className="text-white/50 mt-4">
            {t.code.desc}
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
          <h3 className="text-2xl font-bold mb-2">{t.skills.num} {t.skills.title}</h3>
          <p className="text-white/50 mb-4">
            {t.skills.desc}
          </p>
          <div className="grid text-center gap-4">
            <div className="border border-white/20 rounded-lg p-3 glass">
              <h4 className="text-purple-300 font-medium mb-2">
                {t.skills.tech}
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                {t.skills.techList.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3 glass">
              <h4 className="text-blue-300 font-medium mb-2">
                {t.skills.soft}
              </h4>
              <ul className="text-white/50 space-y-1 text-sm">
                {t.skills.softList.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mt-4 mb-4">
            {t.approach.num} {t.approach.title}
          </h3>
          <p className="text-white/50">
            {t.approach.desc}
          </p>

          <div className="space-y-4 mt-10">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium mb-2">
                  {t.approach.frontend}
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
                  {t.approach.linux}
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
                  {t.approach.python}
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
            {t.certs.num} {t.certs.title}
          </h3>

          <div className="mt-4">
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg">
                <HiMiniAcademicCap className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    {t.certs.degree}
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    {t.certs.uni}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg">
                <DiReact className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    {t.certs.react}
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    {t.certs.udemy}
                  </p>
                </div>
              </div>

              {/* Linux Certifications */}
              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg">
                <DiLinux className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">
                    {t.certs.linux}
                  </h4>
                  <p className="text-xs text-white/50 mt-1">
                    {t.certs.kode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 border border-white/20 rounded-lg">
                <FaLaptopCode className="my-auto flex-shrink-0 text-2xl" />
                <div>
                  <h4 className="font-medium">{t.certs.others}</h4>
                  <p className="text-xs text-white/50 mt-1">
                    {t.certs.otherDesc}
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