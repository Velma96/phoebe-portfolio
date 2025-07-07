import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ParticlesBackground from "./particles";
import ProjectModal from "./components/ProjectModal";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
        role="main"
        aria-label="Phoebe Velma Portfolio"
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <About />
        <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
          <Projects filter={filter} setFilter={setFilter} setModalProject={setModalProject} />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
        <ProjectModal modalProject={modalProject} setModalProject={setModalProject} />
      </motion.div>
    </div>
  );
}