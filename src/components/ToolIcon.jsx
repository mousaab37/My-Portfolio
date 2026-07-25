import {
  DiReact,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiPhp,
} from "react-icons/di";
import { SiLeaflet, SiWordpress } from "react-icons/si";

/**
 * Maps a tool name (string from data/projects.js) to the matching icon
 * component. Keep this list in sync with the names used in `projects[].tools`.
 *
 * Adding a new tool:
 *   1. import the icon from react-icons/* at the top
 *   2. add it to TOOL_ICONS below
 *   3. use the new name in projects.js
 */

// Inline SVG for the Bricks Builder mark (no official react-icon exists).
const BricksIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const TOOL_ICONS = {
  react: DiReact,
  javascript: DiJavascript,
  js: DiJavascript,
  html5: DiHtml5,
  css3: DiCss3,
  php: DiPhp,
  leaflet: SiLeaflet,
  wordpress: SiWordpress,
  wp: SiWordpress,
  bricks: BricksIcon,
};

export default function ToolIcon({ name, className = "" }) {
  const Icon = TOOL_ICONS[name];

  if (!Icon) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(`[ToolIcon] Unknown tool: "${name}"`);
    }
    return null;
  }

  return <Icon className={`text-3xl text-gray-300 ${className}`} />;
}
