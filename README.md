# Mosaab Alseed — Portfolio

A bilingual (EN/AR) portfolio showcasing frontend development work and Linux / DevOps experience. Built with **Vite + React 18 + Tailwind CSS**, code-split with `React.lazy`, optimized with `vite-imagetools` (AVIF/WebP/responsive srcsets), and a PWA via `vite-plugin-pwa`.

## 🚀 Features

- **Fast**: AVIF/WebP images, lazy-loaded below-the-fold sections, self-hosted fonts
- **Bilingual**: EN/AR with proper RTL direction switching
- **Responsive**: Mobile-first grid, works down to 320px wide
- **PWA**: Offline-capable after first visit
- **TypeScript ready**: `.tsx` files (e.g. `src/ui/progress.tsx`) are supported

## 🔧 Tech stack

- **Vite 5** — build tool
- **React 18** — UI
- **Tailwind CSS 3** — styling
- **react-icons** — icon set
- **react-scroll** — smooth anchor navigation
- **react-type-animation** — typing effect in hero
- **@radix-ui/react-progress** — accessible progress bars
- **@fontsource/space-grotesk + @fontsource/ibm-plex-sans-arabic** — self-hosted fonts
- **vite-plugin-pwa** — service worker / offline support

## 🌐 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mousaab-saeed)

## 📦 Local development

```bash
npm install
npm run dev
npm run build
```

### Image assets

Image conversion is done **manually online** (e.g. [squoosh.app](https://squoosh.app), [cloudconvert.com](https://cloudconvert.com/png-to-avif)) — there is no build-time script.

For each `.png` in `src/assets/`, drop a same-name `.webp` and `.avif` next to it:

| Original | You provide |
|---|---|
| `src/assets/PLAYA.png` | `PLAYA.webp` + `PLAYA.avif` |
| `src/assets/project1.png` | `project1.webp` + `project1.avif` |
| ... | (same pattern for all 6 projects, plus `code`, `Certs`, `MyLogo1`, `Mylogo2`, `cursor`) |

Until you add the `.webp` and `.avif` files, the build will fail (Vite can't find the imports). Easiest order:
1. `npm install`
2. Generate all `.webp` and `.avif` files
3. `npm run build` to verify
4. `npm run dev` to test

Open the generated `dist/stats.html` after `npm run build` to see the bundle composition.
