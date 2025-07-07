import { useState } from "react";
import { motion } from "framer-motion";
import { usePopper } from "react-popper";

export default function Navbar({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
  });

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-40" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Phoebe Velma</h1>
        <ul className="hidden md:flex space-x-6">
          {["about", "projects", "skills", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="hover:text-blue-500 text-gray-800 dark:text-white transition">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={setReferenceElement}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-xl text-blue-600 dark:text-white focus:outline-none px-2 py-1"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full shadow hover:scale-105 transition absolute top-4 right-4"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-2 shadow-lg rounded-lg"
        >
          {["about", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-blue-500 text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}