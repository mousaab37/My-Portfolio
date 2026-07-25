/**
 * Bilingual strings for the Portfolio section.
 *
 * Structure:
 *   ui       — section-wide labels (the "Select Project" heading, the "Demo" button)
 *   projects — keyed by the project `id` from data/projects.js
 *
 * Adding a new language = add a top-level key here. The component reads
 * `t.ui.X` and `t.projects[<projectId>].X` — no UI changes needed.
 */
export const projectsTranslations = {
  en: {
    ui: {
      selectProject: "Select Project",
      demo: "Demo",
      live: "Live",
      clientWork: "Client Work",
      practiceProjects: "Practice & Learning Projects",
    },
    projects: {
      alWatan: {
        title: "Al Watan — News & Media Platform",
        context: "Built with the 2P team",
        description:
          "Custom content tools that let editors publish faster, without touching code.",
      },
      drAmjad: {
        title: "Dr. Amjad Qourshah — Personal & Professional Website",
        context: "Freelance, via Remaz Agency",
        description:
          "A platform for an Islamic scholar and university professor to share lectures, writings, and public work.",
      },
      worldWise: {
        title: "World Wise",
        description: "WorldWise keeps track of your adventures.",
      },
      mapty: {
        title: "Mapty",
        description: "A Javascript map application to Map your workout.",
      },
      usePopcorn: {
        title: "usePopcorn",
        description: "A website to find and save your favorite movies.",
      },
      firstPortfolio: {
        title: "First Portfolio",
        description: "This is my first portfolio - modern and simple",
      },
      bankist: {
        title: "Bankist",
        description: "A simpler banking experience for a simpler life.",
      },
    },
  },
  ar: {
    ui: {
      selectProject: "اختر المشروع",
      demo: "عرض تجريبي",
      live: "موقع مباشر",
      clientWork: "أعمال حقيقية للعملاء",
      practiceProjects: "مشاريع تدريبية وتعليمية",
    },
    projects: {
      alWatan: {
        title: "الوطن — منصة إخبارية وإعلامية",
        context: "بُني مع فريق 2P",
        description:
          "أدوات محتوى مخصصة تتيح للمحررين النشر بسرعة دون لمس الكود.",
      },
      drAmjad: {
        title: "د. أمجد قورشة — موقع شخصي ومهني",
        context: "عمل حر، عبر وكالة Remaz",
        description:
          "منصة لعالم إسلامي وأستاذ جامعي لمشاركة المحاضرات والمؤلفات والأعمال العامة.",
      },
      worldWise: {
        title: "World Wise",
        description: "تطبيق لتتبع مغامراتك ورحلاتك حول العالم.",
      },
      mapty: {
        title: "Mapty",
        description: "تطبيق جافا سكريبت لرسم خرائط تمارينك الرياضية.",
      },
      usePopcorn: {
        title: "usePopcorn",
        description: "موقع للبحث عن أفلامك المفضلة وحفظها.",
      },
      firstPortfolio: {
        title: "أول معرض أعمال",
        description: "هذا هو أول معرض أعمال قمت ببرمجته - عصري وبسيط.",
      },
      bankist: {
        title: "Bankist",
        description: "تجربة مصرفية أبسط لحياة أسهل.",
      },
    },
  },
};
