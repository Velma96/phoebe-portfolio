import { motion } from "framer-motion";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const timelineData = [
  { year: "2022", event: "Graduated with a degree in Economics & Mathematics" },
  { year: "2023", event: "Began self-learning programming with Python and JavaScript" },
  { year: "2024", event: "Built Ajali! App, a real-time emergency reporting app" },
  { year: "2025", event: "Launched portfolio for graduation, showcasing full-stack expertise" },
];

export default function About() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
            <p className="text-lg leading-relaxed text-gray-300 mb-5">
              I'm <span className="text-blue-400 font-semibold">Phoebe Velma</span>, a self-driven{" "}
              <Typewriter
                words={["Software Engineer", "Full-Stack Developer", "Tech Problem Solver"]}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
                loop
              />
              who made the bold leap from <span className="text-purple-300 font-medium">Economics & Mathematics</span> into tech.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-5">
              I specialize in <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Flask</span>,{" "}
              <span className="text-blue-400 font-semibold">Django</span>, and <span className="text-blue-400 font-semibold">PostgreSQL</span>, blending creativity with analytical thinking.
            </p>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Journey</h3>
          <div className="relative border-l-2 border-blue-500 pl-6">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 mt-1.5"></div>
                <p className="text-lg font-semibold text-blue-400">{item.year}</p>
                <p className="text-gray-300">{item.event}</p>
              </motion.div>
            ))}
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
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-2 right-2 text-2xl text-gray-600 dark:text-gray-200"
              aria-label="Close Resume Preview"
            >
              ✖
            </button>
            <iframe src="/resume.pdf" className="w-full h-[80vh]" title="Resume Preview" />
          </div>
        </motion.div>
      )}
    </section>
  );
}