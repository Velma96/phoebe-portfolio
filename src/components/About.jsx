import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "react-typewriter-effect";

export default function About() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-blue-500/60 hover:border-purple-500 transition-all shadow-xl">
            <img src="/profile.jpeg" alt="Phoebe Velma profile photo" className="object-cover w-full h-full" loading="lazy" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-5">
            I'm <span className="text-blue-400 font-semibold">Phoebe Velma</span>, a self-driven{" "}
            <Typewriter
              textArray={["Software Engineer", "Full-Stack Developer", "Tech Problem Solver"]}
              cursorColor="#3b82f6"
              textStyle={{ color: "#3b82f6", fontWeight: "600" }}
              loop
            />
            who made the bold leap from <span className="text-purple-300 font-medium">Economics & Mathematics</span> into tech.
          </p>
          {/* Add similar paragraphs as in your original */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-blue-700 transition"
            >
              📄 Preview Resume
            </button>
            <a href="/resume.pdf" download className="px-4 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-700 transition">
              Download Resume
            </a>
            <a href="https://github.com/velma96" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-400 text-white rounded-lg hover:bg-gray-700 transition">
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
      {isResumeModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg w-11/12 max-w-4xl p-4">
            <button onClick={() => setIsResumeModalOpen(false)} className="absolute top-2 right-2 text-2xl text-gray-600 dark:text-gray-200">
              ✖
            </button>
            <iframe src="/resume.pdf" className="w-full h-[80vh]" title="Resume Preview"></iframe>
          </div>
        </motion.div>
      )}
    </section>
  );
}