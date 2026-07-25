import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { LanguageProvider } from "./context/languageContext";

// Code-split below-the-fold sections. They become separate chunks
// so the initial bundle only ships Navbar + Hero + the language context.
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Tiny skeleton for the Suspense fallback. Keeps CLS minimal.
const SectionSkeleton = () => (
  <div className="max-w-[1200px] mx-auto my-12 h-64 rounded-lg bg-white/5 animate-pulse" />
);

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </LanguageProvider>
  );
}
