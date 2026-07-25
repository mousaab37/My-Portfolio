import { useLanguage } from "../context/languageContext";
import SmartImage from "./SmartImage";

import { Progress } from "../ui/progress.jsx";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { DiReact, DiLinux } from "react-icons/di";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About",
      me: "Me",
      background: {
        num: "01.",
        title: "Background",
        desc: "I help small businesses and entrepreneurs get a website that actually works for them — fast to load, easy to find on Google, and simple to manage. My engineering background means I care about doing things properly: clean code, reliable systems, and no shortcuts that break later.",
      },
      code: {
        num: "02.",
        title: "What I Deliver",
        desc: "Practical results, not just code:",
        bullets: [
          "Websites that convert — fast, modern sites that are easy to update.",
          "Found on Google — SEO fundamentals so people searching for your service find you.",
          "Always online — reliable hosting and support, so your site works when customers need it.",
        ],
      },
      skills: {
        num: "03.",
        title: "Why Work With Me",
        desc: "Direct access, professional communication, and reliable software delivery:",
        bullets: [
          "Direct access — you work with me, not a rotating team.",
          "Fast turnaround — clear timelines, regular updates, no disappearing for weeks.",
          "Built to last — clean, maintainable code so the site doesn't break when you need a small change later.",
          "Ongoing support — reachable after launch, not just during the build.",
        ],
      },
      approach: {
        num: "04.",
        title: "Development Approach",
        steps: [
          "Discover — We talk about your business and what success looks like: more leads, a faster site, something easier to manage.",
          "Build — I design and build your site, with clear checkpoints so you always know what's happening.",
          "Launch — Your site goes live, tested on real devices, optimized for speed and search.",
          "Support — I stay reachable after launch for fixes, updates, and questions.",
        ],
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
        otherDesc:
          "CCNA · 2020 | HTML & CSS · 2022 | JavaScript · 2023 | Python & PostgreSql · 2023 | AWS (CLF) · 2024",
      },
    },
    ar: {
      title: "من",
      me: "أنا",
      background: {
        num: "٠١.",
        title: "نبذة عني",
        desc: "أساعد أصحاب الأعمال الصغيرة ورواد الأعمال في الحصول على موقع يعمل فعليًا لصالحهم — سريع التحميل، سهل الإيجاد على جوجل، وبسيط الإدارة. خلفيتي الهندسية تعني أنني أهتم بإنجاز الأمور بشكل صحيح: كود نظيف، أنظمة موثوقة، وبلا حلول مؤقتة تنهار لاحقًا.",
      },
      code: {
        num: "٠٢.",
        title: "ما الذي أقدمه",
        desc: "نتائج عملية، لا مجرد كود:",
        bullets: [
          "مواقع تحقق نتائج — سريعة، عصرية، وسهلة التحديث.",
          "ظهور على جوجل — أساسيات SEO ليجدك من يبحث عن خدمتك.",
          "متاح دائمًا — استضافة موثوقة ودعم مستمر ليعمل موقعك وقت ما يحتاجه عملاؤك.",
        ],
      },
      skills: {
        num: "٠٣.",
        title: "لماذا تعمل معي",
        desc: "تواصل مباشر ومهني مع برمجيات موثوقة وعالية الجودة:",
        bullets: [
          "تواصل مباشر معي، وليس مع فريق متغيّر.",
          "إنجاز سريع بمواعيد واضحة وتحديثات منتظمة، دون اختفاء لأسابيع.",
          "كود نظيف وقابل للصيانة، فلا ينهار الموقع عند أي تعديل بسيط لاحقًا.",
          "دعم مستمر بعد الإطلاق، وليس فقط أثناء التنفيذ.",
        ],
      },
      approach: {
        num: "٠٤.",
        title: "نهج التطوير",
        steps: [
          "الاكتشاف — نتحدث عن عملك وما الذي يعنيه النجاح: عملاء أكثر، موقع أسرع، أو إدارة أسهل.",
          "البناء — أصمم وأبني موقعك مع نقاط تحقق واضحة في كل مرحلة.",
          "الإطلاق — يُطلق الموقع بعد اختباره على أجهزة حقيقية وتحسينه للسرعة ومحركات البحث.",
          "الدعم — أبقى متاحًا بعد الإطلاق للتعديلات والتحديثات والأسئلة.",
        ],
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
        otherDesc:
          "CCNA ٢٠٢٠ | HTML & CSS ٢٠٢٢ | JavaScript ٢٠٢٣ | Python & PostgreSql ٢٠٢٣ | AWS (CLF) ٢٠٢٤",
      },
    },
  };

  // FIX: removed the `let language = () => "en"` that previously shadowed
  // the destructured `language` from useLanguage() and broke Arabic translations.
  const t = translations[language];

  return (
    <section
      id="about"
      className="text-white mt-8 p-6 md:p-0 max-w-[1200px] mx-auto"
    >
      <h2 className="mb-8 text-6xl font-bold">
        {t.title} <span>{t.me}</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="p-6 glass rounded-2xl">
          <h3 className="mb-2 text-2xl font-bold">
            {t.background.num} {t.background.title}
          </h3>
          <p className="mb-6 text-white/50">{t.background.desc}</p>
          <div className="mt-4 relative border border-white/10 rounded-xl h-[220px] overflow-hidden">
            <SmartImage
              src="/code.webp"
              alt="Workspace with code editor"
              className="object-cover w-full h-full rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="p-6 glass rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-2xl font-bold">
              {t.code.num} {t.code.title}
            </h3>
            <p className="mt-4 text-white/50 font-bold">{t.code.desc}</p>
            <ul className="mt-4 space-y-3">
              {t.code.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="p-3 text-sm leading-relaxed text-white/70 list-none glass rounded-xl"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 glass rounded-2xl">
          <h3 className="mb-2 text-2xl font-bold">
            {t.skills.num} {t.skills.title}
          </h3>
          <p className="mb-4 text-white/50 font-bold">{t.skills.desc}</p>
          <ul className="space-y-3">
            {t.skills.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="p-3 text-sm leading-relaxed text-white/70 list-none glass rounded-xl"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <div className="p-6 glass rounded-2xl">
          <h3 className="mt-4 mb-4 text-2xl font-bold">
            {t.approach.num} {t.approach.title}
          </h3>
          <ol className="mt-6 space-y-3">
            {t.approach.steps.map((step, idx) => (
              <li
                key={idx}
                className="p-3 text-sm leading-relaxed text-white/70 list-none glass rounded-xl"
              >
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="p-4 glass rounded-2xl">
          <div className="h-[150px] overflow-hidden rounded-xl border border-white/10 relative">
            <SmartImage
              src="/Certs.webp"
              alt="Training certifications collage"
              className="object-contain w-full h-full rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="my-4 text-2xl font-bold">
            {t.certs.num} {t.certs.title}
          </h3>

          <div className="mt-4 p-4 border border-white/15 rounded-2xl">
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-2 p-2 rounded-xl">
                <HiMiniAcademicCap className="flex-shrink-0 my-auto text-2xl" />
                <div>
                  <h4 className="font-medium">{t.certs.degree}</h4>
                  <p className="mt-1 text-xs text-white/50">{t.certs.uni}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 rounded-xl">
                <DiReact className="flex-shrink-0 my-auto text-2xl" />
                <div>
                  <h4 className="font-medium">{t.certs.react}</h4>
                  <p className="mt-1 text-xs text-white/50">{t.certs.udemy}</p>
                </div>
              </div>

              {/* Linux Certifications */}
              <div className="flex items-start gap-2 p-2 rounded-xl">
                <DiLinux className="flex-shrink-0 my-auto text-2xl" />
                <div>
                  <h4 className="font-medium">{t.certs.linux}</h4>
                  <p className="mt-1 text-xs text-white/50">{t.certs.kode}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2 rounded-xl">
                <FaLaptopCode className="flex-shrink-0 my-auto text-2xl" />
                <div>
                  <h4 className="font-medium">{t.certs.others}</h4>
                  <p className="mt-1 text-xs text-white/50">
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
