import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import ParticlesBackground from "./particles";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

// In App.jsx
<Suspense fallback={<div>Loading...</div>}>
  <Projects filter={filter} setFilter={setFilter} setModalProject={setModalProject} />
  <Skills />
  <Contact />
</Suspense>

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
        <Projects filter={filter} setFilter={setFilter} setModalProject={setModalProject} />
        <Skills />
        <Contact />
        <Footer />
        <ProjectModal modalProject={modalProject} setModalProject={setModalProject} />
      </motion.div>
    </div>
  );
}