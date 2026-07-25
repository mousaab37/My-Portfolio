import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["MyLogo1.webp"],
      manifest: {
        name: "Mosaab — Portfolio",
        short_name: "Mosaab",
        description: "Frontend developer & Linux admin portfolio",
        theme_color: "#151515",
        background_color: "#151515",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "MyLogo1.webp",
            sizes: "any",
            type: "image/webp",
            purpose: "any maskable",
          },
        ],
      },
    }),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  // Pin every dep the app actually imports so Vite's dep optimizer doesn't
  // keep re-bundling and flipping its own ?v=<hash> mid-session. This is the
  // single biggest cause of recurring 504 (Outdated Optimize Dep) errors in
  // projects that use react-icons (it has hundreds of sub-entry points).
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react-icons/ai",
      "react-icons/di",
      "react-icons/ri",
      "react-icons/si",
      "react-icons/io",
      "react-icons/fa",
      "react-icons/md",
      "react-icons/tb",
      "react-icons/hi2",
      "react-type-animation",
      "react-scroll",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-progress",
    ],
  },

  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          icons: ["react-icons"],
          animations: ["react-type-animation", "react-scroll"],
        },
      },
    },
  },

  // NOTE: do NOT add a `server.headers` block with `Cache-Control: max-age=...`.
  // Vite's dep cache busting uses a `?v=<hash>` query string, which only works
  // if the browser re-fetches index.html on each load. Forcing long cache
  // lifetimes in dev pins the browser to an old hash and produces an endless
  // 504 (Outdated Optimize Dep) loop. Long-lived caching belongs on a CDN /
  // nginx, not on the dev server.
});
