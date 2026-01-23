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
      submit: "→"
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
      submit: "←"
    }
  };

  const t = translations[language];

  return (
    <div className="py-16 max-w-[1200px] mx-auto" id="contact">
      <div className="flex items-center justify-between flex-col md:flex-row  md:px-0">
        <div className="rtl:text-right">
          <h2 className="md:text-7xl text-3xl font-bold mb-10 text-white/70">
            {t.getIn} <span>{t.touch}</span>
          </h2>
          <a
            className="md:text-5xl text-2xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-orange-300 transition duration-300"
            href="mailto:mosaiabal@gmail.com"
          >
            mosaiabal@gmail.com
          </a>
        </div>

        <div className="text-white/50 mt-12 rtl:text-right">
          <div className="mb-8">
            <p className="text-lg mb-1">{t.phone}</p>
            <a
              href="tel:+963995537002"
              className="text-2xl font-semibold underline decoration-purple-300 decoration-2
                underline-offset-4 hover:decoration-gray-400 transition duration-300"
            >
              +963 995537002
            </a>
            <div className="flex items-center gap-4 mt-3 rtl:justify-end">
              <a
                className="text-2xl font-semibold text-gray-400 hover:text-sky-400 transition duration-300"
                href="https://t.me/MouSaaB_KS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTelegram2Fill />
              </a>
              <a
                className="text-2xl font-semibold text-gray-400 hover:text-green-300 transition duration-300"
                href="https://api.whatsapp.com/send?phone=963995537002&text="
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine />
              </a>
            </div>
          </div>

          <div className="text-lg mb-8">
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
        <div className="md:w-[48%] w-full space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-orange-300 mb-2 rtl:text-right"
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t.emailPlaceholder}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white focus:outline-none
                                        focus:ring-2 focus:ring-orange-300 rtl:text-right"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-orange-300 mb-2 rtl:text-right"
            >
              {t.subjectLabel}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={t.subjectPlaceholder}
              required
              className="w-full px-4 py-3 bg-transparent border text-white border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-orange-300 rtl:text-right"
            />
          </div>
        </div>

        <div className="md:w-[48%] w-full  mt-6 md:mt-0">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2 rtl:text-right"
          >
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            placeholder={t.messagePlaceholder}
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none
                                    focus:ring-2 focus:ring-purple-300 text-white rtl:text-right"
          />
        </div>

        <div className="md:w-[48%] w-full  mt-6 md:mt-4 md:text-right rtl:md:text-left">
          <button
            type="submit"
            className="inline-block w-16 h-16 bg-transparent border border-orange-400 text-orange-400
                                        font-medium rounded-lg hover:bg-orange-700 hover:text-white transition duration-300 ease-in-out
                                        transform hover:scale-105"
          >
            {t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
