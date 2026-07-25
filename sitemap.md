# WEBSITE SITEMAP & CONTENT SPECIFICATION

This document outlines the complete page routing, file structure, component architecture, exact text copy, assets, data arrays, layout styles, and tech stack details of this portfolio website.

---

## 1. FILE STRUCTURE & ROUTE MAPPING

The application is structured as a client-side Single Page Application (SPA). There is only one page/route (`/`) which renders dynamic bilingual content (English/Arabic) in a responsive layout.

### Route: `/` (Home Page)
- **Entry File:** [index.html](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/index.html) -> [src/main.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/main.jsx) -> [src/App.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/App.jsx)
- **Component Hierarchical Sequence (Top to Bottom):**
  1. **Navbar** — `[src/components/Navbar.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/Navbar.jsx)`
  2. **Hero** — `[src/components/Hero.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/Hero.jsx)`
  3. **Suspense Boundary (with fallback loader)**
     - **About** — `[src/components/About.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/About.jsx)` (Code-split lazy component)
     - **Portfolio** — `[src/components/Portfolio.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/Portfolio.jsx)` (Code-split lazy component)
     - **Contact** — `[src/components/Contact.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/Contact.jsx)` (Code-split lazy component)
     - **Footer** — `[src/components/Footer.jsx](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/Footer.jsx)` (Code-split lazy component)

---

## 2. COMPONENT ARCHITECTURE & CONTENT DETAILS

For each component and section, all content, styles, behaviors, icons, and assets are detailed below.

### 2.1 Navbar (`src/components/Navbar.jsx`)
- **Text Content (Bilingual):**
  * **English (`en`):**
    - Brand Name: `Mosaab`
    - Links: `About`, `Portfolio`, `Contact`
    - Toggle Key: `العربية` (Unused in final code rendering; replaced by segmented switch buttons)
  * **Arabic (`ar`):**
    - Brand Name: `مصعب`
    - Links: `عني`, `أعمالي`, `اتصل بي`
    - Toggle Key: `English` (Unused in final code rendering; replaced by segmented switch buttons)
  * **Segmented Language Button Labels:**
    - Button 1: `EN`
    - Button 2: `عربي`
- **Icons Used:**
  * `AiOutlineMenu` (from `react-icons/ai`): Mobile navigation toggle menu trigger when closed.
  * `AiOutlineClose` (from `react-icons/ai`): Mobile navigation toggle menu trigger when open.
- **Images Used:**
  * `/MyLogo1.webp` (Alt: `Mosaab's logo`): Mosaab's profile brand logo. Rendered at `width={40}` and `height={40}` with `priority`.
- **Interactive/Dynamic Behavior:**
  * **Desktop Navigation Links:** Uses `react-scroll` `Link` targeting sections (`about`, `portfolio`, `contact`) with `smooth={true}` and `duration={500}` transition.
  * **Desktop Hover Underlines:** Bottom absolute line transforms `scale-x-0` to `scale-x-100` smoothly on group-hover.
  * **Mobile Drawer Navigation Menu:** Fullscreen overlay menu containing links (`about`, `portfolio`, `contact`). Controlled by `nav` boolean state toggled via hamburger/close icon. Closes drawer (`closeNav`) when any list item is clicked.
  * **Language Switcher:** Modifies the global `language` state context to switch layouts dynamically between LTR and RTL. Highlighted using a gradient pill overlay (`bg-gradient-to-r from-[#7a0d8a] to-[#c92085] text-white shadow-md` on EN selection and `bg-gradient-to-r from-[#c92085] to-[#c68109] text-white shadow-md font-sans` on عربي selection).

### 2.2 Hero (`src/components/Hero.jsx`)
- **Text Content (Bilingual):**
  * **English (`en`):**
    - Greeting Headline: `Hi! I am Mosaab`
    - Sub-greeting / Experience text: `With 1+ year of experience`
    - Button text: `Download CV`
    - Tech Stack Header: `My Tech Stack`
  * **Arabic (`ar`):**
    - Greeting Headline: `مرحباً! أنا مصعب`
    - Sub-greeting / Experience text: `بخبرة تزيد عن سنة`
    - Button text: `تحميل CV`
    - Tech Stack Header: `تقنياتي`
- **Rotating Typewriter Roles:**
  * **English (`en`):** `React Developer`, `Linux Admin`, `Telecom Engineer`
  * **Arabic (`ar`):** `مطور React`, `مسؤول لينكس`, `مهندس اتصالات`
- **Icons Used:**
  * `DiHtml5` (from `react-icons/di`): HTML5 logo in orange-500.
  * `DiCss3` (from `react-icons/di`): CSS3 logo in blue-600.
  * `DiJavascript` (from `react-icons/di`): JavaScript logo in yellow-400.
  * `DiReact` (from `react-icons/di`): React logo in sky-600.
  * `VscTerminalBash` (from `react-icons/vsc`): Bash terminal logo in gray-200.
  * `FcLinux` (from `react-icons/fc`): Linux logo.
  * `DiPython` (from `react-icons/di`): Python logo in `#4ce1f2`.
  * `FaDocker` (from `react-icons/fa`): Docker logo in blue-400.
  * `TbBrandGithub` & `TbBrandGithubFilled` (from `react-icons/tb`): GitHub profile social button. Shows filled on hover. Links to `https://github.com/mousaab37`.
  * `AiOutlineInstagram` & `AiFillInstagram` (from `react-icons/ai`): Instagram social button. Shows filled on hover. Links to `https://www.instagram.com/m.osaab?igsh=dXY3ZDNrYTB1eXkw`.
  * `TbBrandLinkedin` & `TbBrandLinkedinFilled` (from `react-icons/tb`): LinkedIn profile social button. Shows filled on hover. Links to `https://www.linkedin.com/in/mousaab-saeed`.
- **Images Used:**
  * `/PLAYA.webp` (Alt: `Mosaab — profile picture`): Main profile photo of Mosaab. Rendered with high priority eager load (`priority`) and responsive `sizes="(max-width: 768px) 100vw, 800px"`.
- **Interactive/Dynamic Behavior:**
  * **Typewriter Effect:** Renders rotating text items via the `react-type-animation` library with a `1000`ms sequence duration per role. Utilizes `key={language}` to force component instantiation updates when layout languages are toggled.
  * **Social Button Hover State:** Uses React `hoveredIcon` state (`"github" | "instagram" | "linkedin" | null`) on mouse enter/leave events to render filled/outline icon variants.
  * **CV Download Trigger:** A native `<a>` tag nested in a button pointing to import resource `cv` (resolves to `/src/cv/mycv.pdf`) downloading with the filename attribute:
    - English: `Mosaab_CV.pdf`
    - Arabic: `السيرة_الذاتية_مصعب.pdf`

### 2.3 About (`src/components/About.jsx`)
- **Text Content (Bilingual):**
  * **English (`en`):**
    - Section Heading: `About Me` (word `Me` is gradient-colored)
    - Section 1 (Background):
      * Number: `01.`
      * Title: `Background`
      * Description: `Electronics and Communications Engineer with expertise in React frontend development and Linux system administration. My journey combines technical engineering knowledge with modern software development practices.`
    - Section 2 (Code Expertise):
      * Number: `02.`
      * Title: `Code Expertise`
      * Description: `I am a web developer specializing in frontend development, with expertise in scripting automation and database design.`
      * Hardcoded Code Snippet content:
        ```javascript
        const toolbox = [
          'React',
          'Tailwind CSS',
          'Python',
          'Bash Scripting',
          'PostgreSQL',
          'Docker',
        ];
        ```
    - Section 3 (Skills):
      * Number: `03.`
      * Title: `Skills`
      * Description: `I possess a diverse skill set that combines technical expertise with strong interpersonal abilities, enabling me to adapt and excel in various environments`
      * Tech Skill Title: `Technical Skills`
      * Tech Skills Array: `Programming`, `OS: Linux`, `Networking`, `AI Tools`, `Microsoft Office Suite`
      * Soft Skill Title: `Soft Skills`
      * Soft Skills Array: `Self-Learning`, `Problem-Solving`, `Critical Thinking`, `Adaptability`, `Time Management`
    - Section 4 (Development Approach):
      * Number: `04.`
      * Title: `Development Approach`
      * Description: `Building pixel-perfect React interfaces with a strong focus on user experience. Passionate about clean code and scalable architecture.`
      * Skill Meters:
        - Frontend Development: `90%`
        - Linux Administration: `80%`
        - Python: `50%`
    - Section 5 (Certifications & Training):
      * Number: `05.`
      * Title: `Certifications & Training`
      * Degree: `Bachelor of Electronics and Communications Engineering`
      * University: `Damascus University · 2018-2023`
      * React Course: `The Ultimate React Course`
      * React Provider: `Udemy - Jonas Schmedtmann · 2024`
      * Linux Course: `Linux Administration`
      * Linux Provider: `KodeKloud & SCS · 2023-24`
      * Other Title: `Other Courses`
      * Other Details: `CCNA · 2020 | HTML & CSS · 2022 | JavaScript · 2023 | Python & PostgreSql · 2023 | AWS (CLF) · 2024`
  * **Arabic (`ar`):**
    - Section Heading: `من أنا` (word `أنا` is gradient-colored)
    - Section 1 (Background):
      * Number: `٠١.`
      * Title: `نبذة عني`
      * Description: `مهندس إلكترونيات واتصالات بخبرة في تطوير واجهات React وإدارة أنظمة لينكس. رحلتي تجمع بين المعرفة الهندسية التقنية وممارسات تطوير البرامج الحديثة.`
    - Section 2 (Code Expertise):
      * Number: `٠٢.`
      * Title: `خبرة البرمجية`
      * Description: `أنا مطور ويب متخصص في تطوير الواجهات الأمامية، مع خبرة في أتمتة البرامج النصية وتصميم قواعد البيانات.`
      * Hardcoded Code Snippet content: (Renders standard untranslated JS code snippet same as English).
    - Section 3 (Skills):
      * Number: `٠٣.`
      * Title: `المهارات`
      * Description: `أمتلك مجموعة مهارات متنوعة تدمج الخبرة التقنية مع القدرات الشخصية القوية، مما يمكنني من التكيف والتميز في بيئات مختلفة.`
      * Tech Skill Title: `المهارات التقنية`
      * Tech Skills Array: `البرمجة`, `نظام لينكس`, `الشبكات`, `أدوات الذكاء الاصطناعي`, `مجموعة مايكروسوفت أوفيس`
      * Soft Skill Title: `المهارات الشخصية`
      * Soft Skills Array: `التعلم الذاتي`, `حل المشكلات`, `التفكير النقدي`, `التكيف`, `إدارة الوقت`
    - Section 4 (Development Approach):
      * Number: `٠٤.`
      * Title: `نهج التطوير`
      * Description: `بناء واجهات React مثالية مع تركيز قوي على تجربة المستخدم. شغوف بالكود النظيف والبنية القابلة للتوسع.`
      * Skill Meters:
        - Frontend Development: `تطوير الواجهات الأمامية` (90%)
        - Linux Administration: `إدارة أنظمة لينكس` (80%)
        - Python: `بايثون` (50%)
    - Section 5 (Certifications & Training):
      * Number: `٠٥.`
      * Title: `الشهادات والتدريب`
      * Degree: `بكالوريوس في هندسة الإلكترونيات والاتصالات`
      * University: `جامعة دمشق · ٢٠١٨-٢٠٢٣`
      * React Course: `دورة React الكاملة`
      * React Provider: `Udemy - جوناس شميدتمان · ٢٠٢٤`
      * Linux Course: `إدارة أنظمة لينكس`
      * Linux Provider: `KodeKloud & SCS · ٢٠٢٣-٢٤`
      * Other Title: `دورات أخرى`
      * Other Details: `CCNA ٢٠٢٠ | HTML & CSS ٢٠٢٢ | JavaScript ٢٠٢٣ | Python & PostgreSql ٢٠٢٣ | AWS (CLF) ٢٠٢٤`
- **Icons Used:**
  * `HiMiniAcademicCap` (from `react-icons/hi2`): Education Cap icon displayed next to degree.
  * `DiReact` (from `react-icons/di`): React logo icon displayed next to React training course details.
  * `DiLinux` (from `react-icons/di`): Linux Tux icon displayed next to Linux training course details.
  * `FaLaptopCode` (from `react-icons/fa`): Coding laptop icon displayed next to other course lists.
- **Images Used:**
  * `/code.webp` (Alt: `Workspace with code editor`): Displays code on workspace monitor. Rendered with custom image wrapper `SmartImage` inside `Background` card.
  * `/Certs.webp` (Alt: `Training certifications collage`): Displays a collage layout of qualifications.
- **Interactive/Dynamic Behavior:**
  * **Radix UI Progress Indicators:** 3 animated linear progress bars indicating skills value percentages:
    - Frontend Development: `90%` (Uses class `bg-purple-300/20 [&>div]:bg-purple-300`)
    - Linux Administration: `80%` (Uses class `bg-blue-300/20 [&>div]:bg-blue-300`)
    - Python: `50%` (Uses class `bg-green-300/20 [&>div]:bg-green-300`)

### 2.4 Portfolio (`src/components/Portfolio.jsx`)
- **Text Content (Bilingual UI Elements):**
  * **English (`en`):**
    - Section Label: `Select Project`
    - Action Trigger button: `Demo`
  * **Arabic (`ar`):**
    - Section Label: `اختر المشروع`
    - Action Trigger button: `عرض مباشر`
- **Icons Used:**
  * `AiFillGithub` (from `react-icons/ai`): Renders on links targeting Github repository code files.
  * **Project Tech Stack Icons (Resolved via `ToolIcon` mapping):**
    - `DiReact` (for `"react"`)
    - `DiCss3` (for `"css3"`)
    - `SiLeaflet` (for `"leaflet"`)
    - `DiHtml5` (for `"html5"`)
    - `DiJavascript` (for `"javascript"` and `"js"`)
    - `SiWordpress` (for `"wordpress"` and `"wp"`)
    - `DiPhp` (for `"php"`)
    - Custom inline SVG `BricksIcon` (for `"bricks"`)
- **Images Used:**
  * `/cursor.webp` (Alt: `arrow`): Absolute arrow pointing towards selection menu items.
  * *Active project webp images as declared in database array catalog:*
    - `/project1.webp` (World Wise)
    - `/project2.webp` (Mapty)
    - `/project3.webp` (usePopcorn)
    - `/project4.webp` (First Portfolio)
    - `/project5.webp` (Bankist)
    - `/watan.webp` (Al Watan)
    - `/amjad.webp` (Dr. Amjad)
- **Interactive/Dynamic Behavior:**
  * **Active Project Detail State:** Clicking any project item from the left vertical list updates the `currentProject` index state. This modifies active details (Title, tech icons, context label, stack layout labels, description body paragraphs, and action button hrefs).
  * **Active Class Indicator:** Active project title has custom styles of `.active-project` (injects relative lines underneath selection).
  * **Conditional Demo/GitHub Href Buttons:** Links are rendered conditionally: the "Demo" button is displayed only if `project.links.site` is defined, and the GitHub icon button is shown only if `project.links.github` is defined.

### 2.5 Contact (`src/components/Contact.jsx`)
- **Text Content (Bilingual):**
  * **English (`en`):**
    - Heading: `Get in touch` (word `touch` is gradient-colored)
    - Direct Email link: `mosaiabal@gmail.com`
    - Phone Field: `Phone`
    - Country Field: `Country`
    - Country Value: `Syria`
    - Form Input Labels:
      * Email input label: `Email`
      * Subject input label: `Subject`
      * Message input label: `Message`
    - Form Input Placeholders:
      * Email field: `your@email.com`
      * Subject field: `What is this about?`
      * Message field: `Your message here ...`
    - Form Submit Button: `→`
  * **Arabic (`ar`):**
    - Heading: `تواصل معي` (word `معي` is gradient-colored)
    - Direct Email link: `mosaiabal@gmail.com`
    - Phone Field: `الهاتف`
    - Country Field: `البلد`
    - Country Value: `سوريا`
    - Form Input Labels:
      * Email input label: `البريد الإلكتروني`
      * Subject input label: `الموضوع`
      * Message input label: `الرسالة`
    - Form Input Placeholders:
      * Email field: `بريدك الإلكتروني`
      * Subject field: `ما هو موضوع الرسالة؟`
      * Message field: `اكتب رسالتك هنا ...`
    - Form Submit Button: `→`
- **Icons Used:**
  * `RiTelegram2Fill` (from `react-icons/ri`): Links to Telegram profile: `https://t.me/MouSaaB_KS`.
  * `RiWhatsappLine` (from `react-icons/ri`): Links to WhatsApp API chat: `https://api.whatsapp.com/send?phone=963995537002&text=`.
- **Form Configuration & Interactive Behavior:**
  * Form submissions are POSTed to **Getform** API service endpoint: `https://getform.io/f/awnqkxvb`.
  * Inputs have structural properties `required`.
  * Layout orientation switches direction dynamically to RTL when Arabic language mode is activated.

### 2.6 Footer (`src/components/Footer.jsx`)
- **Text Content (Bilingual):**
  * **English (`en`):**
    - Background Large text: `MOSAAB`
    - Footer Brand: `Mosaab`
  * **Arabic (`ar`):**
    - Background Large text: `مصعب`
    - Footer Brand: `مصعب`
- **Icons Used (with relative anchor redirects):**
  * `AiFillGithub` (from `react-icons/ai`): Links to `https://github.com/mousaab37`.
  * `AiFillLinkedin` (from `react-icons/ai`): Links to `https://www.linkedin.com/in/mousaab-saeed`.
  * `AiFillFacebook` (from `react-icons/ai`): Links to `https://www.facebook.com/mousaab.ks`.
  * `AiFillInstagram` (from `react-icons/ai`): Links to `https://www.instagram.com/m.osaab?igsh=dXY3ZDNrYTB1eXkw`.
- **Images Used:**
  * `/Mylogo2.webp` (Alt: `Mosaab's Logo`): White textual brand signature markup. Rendered at `width={96}` and `height={24}`.
- **Layout & Dynamic Behavior:**
  * Features 3 absolute blurred glowing background circles that serve as layout decoration on desktop (`hidden md:block -z-10` with colors purple-900, purple-200, purple-500) and 1 background circle on mobile (`md:hidden -z-10` with color purple-300).
  * Displays a massive typography container with the name in low-opacity text (`text-white/10`) serving as a background highlight.

---

## 3. LAYOUT NOTES

- **Responsive Grid Configurations:**
  * **Global Layout Constraints:** Sections are standard flex/grid components centered with `max-w-[1200px] mx-auto` horizontal layout container.
  * **Hero Section Grid:** Uses `md:grid-cols-8` side-by-side: profile card spans 5 columns (`md:col-span-5`), while Tech stack + Social cards span 3 columns (`md:col-span-3`). Within the profile card, content is split via `grid md:grid-cols-2`.
  * **About Section Grid:**
    - Top Row: Uses `md:grid-cols-3` placing Background, Code Expertise, and Skills side-by-side.
    - Bottom Row: Uses `md:grid-cols-2` placing Development Approach and Certifications side-by-side.
  * **Portfolio Section Grid:** Uses `md:grid-cols-8` side-by-side: Project list picker spans 3 columns (`md:col-span-3`), while active detail card spans 5 columns (`md:col-span-5`).
  * **Contact Section Grid:** Top row uses `flex flex-col md:flex-row` separating title column from contact info list. Form utilizes `flex flex-wrap justify-between` where Email/Subject containers span `md:w-[48%]`, and Message spans `md:w-[48%]`.
- **Theme Variables & Styles:**
  * **Main Background:** `#151515` (defined on body inside [src/index.css](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/index.css)).
  * **Brand Gradient:** `#7a0d8a` -> `#c92085` -> `#c68109` (renders as text gradient clip).
  * **Glass Effect Utility (`.glass`):**
    ```css
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    ```
  * **Typography Fonts:** Google Fonts `'Space Grotesk'` (weights: 400, 500, 700) for standard layout and `'IBM Plex Sans Arabic'` (weight: 600) configured via CSS layout attributes to load automatically when page HTML `lang="ar"` is active.
- **Repeated Sections:**
  * Header/Navigation: `Navbar` component is fixed at top layout.
  * Footer: `Footer` component is situated at bottom layout.

---

## 4. TECH STACK

- **Framework & Libraries:**
  * React (v18.2.0)
  * React DOM (v18.2.0)
  * Vite Build System (v5.2.0)
  * React Scroll (v1.9.0)
  * React Type Animation (v3.2.0)
  * Radix UI Progress (v1.1.2)
  * React Icons (v5.5.0)
- **Styling Architecture:**
  * Tailwind CSS (v3.4.17)
  * PostCSS (v8.5.3)
  * Autoprefixer (v10.4.21)
  * clsx (v2.1.1) & tailwind-merge (v3.0.2) utilities
- **Content / Data Sources:**
  * Pure localized data catalogs stored in static JavaScript modules:
    - [src/data/projects.js](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/data/projects.js)
    - [src/data/projectsTranslations.js](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/data/projectsTranslations.js)
- **Image Performance Handling:**
  * Dynamic responsive images are optimized through a custom [SmartImage](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/src/components/SmartImage.jsx) component wrapping native HTML `<img>` tag with lazy-loading (`loading="lazy"` / `loading="eager"`), decoding options (`decoding="async"` / `decoding="sync"`), and custom fetch priority bounds.
- **SEO & Metadata Setup:**
  * **Sitemap.xml:** `none found`
  * **Robots.txt:** `none found`
  * **HTML Meta configuration** (defined in [index.html](file:///c:/Users/Lenovo/Desktop/CODE/My-Portfolio/index.html)):
    - `<meta charset="UTF-8" />`
    - `<link rel="icon" type="image/webp" href="/MyLogo1.webp" />`
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
    - `<meta name="theme-color" content="#151515" />`
    - `<meta name="description" content="Mosaab — Frontend developer and Linux admin. Portfolio, case studies, and contact info." />`
    - `<link rel="preload" as="image" href="/PLAYA.webp" fetchpriority="high" />`
    - `<title>Mosaab — Frontend Developer &amp; Linux Admin</title>`
  * **Open Graph (OG) tags:** `none found`

---

## 5. CONTACT FORM FLOW

- **API Endpoint:** [Getform.io](https://getform.io/) form submission endpoint: `https://getform.io/f/awnqkxvb`.
- **Target Method:** `POST`.
- **Input Elements:**
  1. **Email:**
     - Tag: `<input type="email" />`
     - Name attribute: `email`
     - Text Label: `Email` (English) / `البريد الإلكتروني` (Arabic)
     - Placeholder: `your@email.com` (English) / `بريدك الإلكتروني` (Arabic)
     - Constraints: `required`
  2. **Subject:**
     - Tag: `<input type="text" />`
     - Name attribute: `subject`
     - Text Label: `Subject` (English) / `الموضوع` (Arabic)
     - Placeholder: `What is this about?` (English) / `ما هو موضوع الرسالة؟` (Arabic)
     - Constraints: `required`
  3. **Message:**
     - Tag: `<textarea />` (with `rows={8}`)
     - Name attribute: `message`
     - Text Label: `Message` (English) / `الرسالة` (Arabic)
     - Placeholder: `Your message here ...` (English) / `اكتب رسالتك هنا ...` (Arabic)
     - Constraints: `required`
  4. **Submit Button:**
     - Tag: `<button type="submit">`
     - Label: `→` (Centered graphic character)

---

## 6. DATA-DRIVEN PROJECTS DATASET

The exact database declarations for the website's dynamic projects section are detailed below.

### 6.1 Catalog Schema (`src/data/projects.js`)

```javascript
export const projects = [
  {
    id: "worldWise",
    image: "/project1.webp",
    tools: ["react", "css3", "leaflet"],
    links: {
      site: "https://worldwise-r.netlify.app/",
      github: "https://github.com/mousaab37/worldwise",
    },
  },
  {
    id: "mapty",
    image: "/project2.webp",
    tools: ["html5", "css3", "javascript", "leaflet"],
    links: {
      site: "https://mousaab37.github.io/mapty/",
      github: "https://github.com/mousaab37/mapty",
    },
  },
  {
    id: "usePopcorn",
    image: "/project3.webp",
    tools: ["react", "css3"],
    links: {
      site: "https://use-popcorn-react1.netlify.app/",
      github: "https://github.com/mousaab37/usepopcorn",
    },
  },
  {
    id: "firstPortfolio",
    image: "/project4.webp",
    tools: ["react", "css3"],
    links: {
      github: "https://github.com/mousaab37/first-portofolio",
    },
  },
  {
    id: "bankist",
    image: "/project5.webp",
    tools: ["html5", "css3", "javascript"],
    links: {
      site: "https://mousaab37.github.io/Bankist/",
      github: "https://github.com/mousaab37/Bankist",
    },
  },
  {
    id: "alWatan",
    image: "/watan.webp",
    tools: ["wordpress", "bricks", "php", "js"],
    links: {
      site: "https://alwatan.sy/",
    },
  },
  {
    id: "drAmjad",
    image: "/amjad.webp",
    tools: ["wordpress", "bricks", "php", "js"],
    links: {
      site: "https://drqourshah.com/",
    },
  },
];
```

### 6.2 Translation Catalog (`src/data/projectsTranslations.js`)

```javascript
export const projectsTranslations = {
  en: {
    ui: {
      selectProject: "Select Project",
      demo: "Demo",
    },
    projects: {
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
      alWatan: {
        title: "Al Watan — News & Media Platform",
        context: "Built with the 2P team",
        stack: "WordPress & Bricks Builder",
        description:
          "Custom content tools that let editors publish faster, without touching code.",
      },
      drAmjad: {
        title: "Dr. Amjad Qourshah — Personal & Professional Website",
        context: "Freelance, via Remaz Agency",
        stack: "WordPress & Bricks Builder",
        description:
          "A platform for an Islamic scholar and university professor to share lectures, writings, and public work.",
      },
    },
  },
  ar: {
    ui: {
      selectProject: "اختر المشروع",
      demo: "عرض مباشر",
    },
    projects: {
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
      alWatan: {
        title: "الوطن — منصة إخبارية وإعلامية",
        context: "بُني مع فريق 2P",
        stack: "ووردبريس و Bricks Builder",
        description:
          "أدوات محتوى مخصصة تتيح للمحررين النشر بسرعة دون لمس الكود.",
      },
      drAmjad: {
        title: "د. أمجد قورشة — موقع شخصي ومهني",
        context: "عمل حر، عبر وكالة Remaz",
        stack: "ووردبريس و Bricks Builder",
        description:
          "منصة لعالم إسلامي وأستاذ جامعي لمشاركة المحاضرات والمؤلفات والأعمال العامة.",
      },
    },
  },
};
```
