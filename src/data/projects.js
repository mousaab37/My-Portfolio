/**
 * Project catalog — pure data, no JSX, no translation strings.
 *
 * All images live in /public and are referenced by their URL path.
 * To add or remove a project, edit this file + the matching translations
 * in data/projectsTranslations.js. No UI changes required.
 *
 * Shape per entry:
 *   id       — stable key used for i18n lookup
 *   image    — URL to the webp in /public
 *   tools    — array of ToolIcon names (resolved in components/ToolIcon.jsx)
 *   links    — { site?, github } — `site` is optional, omit if no live demo
 *   kind     — "client" (real client work, button says "Live") | "practice" (button says "Demo"). Defaults to "practice".
 */
export const projects = [
  {
    id: "alWatan",
    kind: "client",
    image: "/watan.webp",
    tools: ["wordpress", "bricks", "php", "js"],
    links: {
      site: "https://alwatan.sy/",
    },
  },
  {
    id: "drAmjad",
    kind: "client",
    image: "/amjad.webp",
    tools: ["wordpress", "bricks", "php", "js"],
    links: {
      site: "https://drqourshah.com/",
    },
  },
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
];
