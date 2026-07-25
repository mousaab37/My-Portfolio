import React from "react";
import { RiTelegram2Fill, RiWhatsappLine } from "react-icons/ri";

import { useLanguage } from "../context/languageContext"; // Added for language support

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      getIn: "Get in",
      touch: "touch",
      phone: "Phone",
      country: "Country",
      syria: "Syria",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What is this about?",
      messagePlaceholder: "Your message here ...",
      submit: "→",
      formSubtitle: "Tell me about your project — I'll reply within a day.",
    },
    ar: {
      getIn: "تواصل",
      touch: "معي",
      phone: "الهاتف",
      country: "البلد",
      syria: "سوريا",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      messageLabel: "الرسالة",
      emailPlaceholder: "بريدك الإلكتروني",
      subjectPlaceholder: "ما هو موضوع الرسالة؟",
      messagePlaceholder: "اكتب رسالتك هنا ...",
      submit: "←",
      formSubtitle: "أخبرني عن مشروعك — سأرد خلال يوم واحد.",
    },
  };

  const t = translations[language];

  return (
    <div className="py-16 max-w-[1200px] mx-auto" id="contact">
      <div className="flex flex-col items-center justify-between md:flex-row md:px-0">
        <div className="rtl:text-right">
          <h2 className="mb-10 text-3xl font-bold md:text-7xl text-white/70">
            {t.getIn} <span>{t.touch}</span>
          </h2>
          <a
            className="text-2xl font-semibold text-white underline transition duration-300 md:text-5xl decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-[#c92085]"
            href="mailto:mosaiabal@gmail.com"
          >
            mosaiabal@gmail.com
          </a>
        </div>

        <div className="mt-12 text-white/50 rtl:text-right">
          <div className="mb-8">
            <p className="mb-1 text-lg">{t.phone}</p>
            <a
              href="tel:+963995537002"
              className="text-2xl font-semibold underline transition duration-300 decoration-purple-300 decoration-2 underline-offset-4 hover:decoration-gray-400"
            >
              +963 995537002
            </a>
            <div className="flex items-center gap-4 mt-3 rtl:justify-end">
              <a
                className="text-2xl font-semibold text-gray-400 transition duration-300 hover:text-[#c92085]"
                href="https://t.me/MouSaaB_KS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTelegram2Fill />
              </a>
              <a
                className="text-2xl font-semibold text-gray-400 transition duration-300 hover:text-[#c68109]"
                href="https://api.whatsapp.com/send?phone=963995537002&text="
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine />
              </a>
            </div>
          </div>

          <div className="mb-8 text-lg">
            <p className="font-bold">{t.country}</p>
            <p>{t.syria}</p>
          </div>
        </div>
      </div>

      <form
        method="POST"
        action="https://getform.io/f/awnqkxvb"
        id="form"
        className="max-w-[1200px] mx-auto flex flex-wrap justify-between"
      >
        <p className="w-full mb-8 bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] bg-clip-text text-transparent font-semibold text-lg md:text-xl text-center md:text-left rtl:text-right">
          {t.formSubtitle}
        </p>
        <div className="md:w-[48%] w-full space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] bg-clip-text text-transparent rtl:text-right"
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.emailPlaceholder}
              required
              className="w-full px-4 py-3 text-white bg-transparent border rounded-xl border-white/20 focus:outline-none focus:ring-2 focus:ring-[#c92085] rtl:text-right"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] bg-clip-text text-transparent rtl:text-right"
            >
              {t.subjectLabel}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={t.subjectPlaceholder}
              required
              className="w-full px-4 py-3 text-white bg-transparent border rounded-xl border-white/20 focus:outline-none focus:ring-2 focus:ring-[#c92085] rtl:text-right"
            />
          </div>
        </div>

        <div className="md:w-[48%] w-full  mt-6 md:mt-0">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium bg-gradient-to-r from-[#7a0d8a] via-[#c92085] to-[#c68109] bg-clip-text text-transparent rtl:text-right"
          >
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            placeholder={t.messagePlaceholder}
            className="w-full px-4 py-3 text-white bg-transparent border rounded-xl border-white/20 focus:outline-none focus:ring-2 focus:ring-[#c92085] rtl:text-right"
          />
        </div>

        <div className="md:w-[48%] w-full  mt-6 md:mt-4 md:text-right rtl:md:text-left">
          <button
            type="submit"
            className="inline-block w-16 h-16 font-medium text-white transition duration-300 ease-in-out transform bg-gradient-to-r from-[#7a0d8a] to-[#c92085] border border-transparent rounded-xl hover:from-[#8b1fa0] hover:to-[#db3296] hover:scale-105"
          >
            {t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
