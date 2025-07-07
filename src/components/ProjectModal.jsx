import { motion } from "framer-motion";

const projectsData = [
  { id: "ajali", link: "https://ajali-1-s5ar.onrender.com/" },
  { id: "spacer", link: "https://spacer-platform-1.onrender.com/" },
  { id: "weather", link: "https://weather-watch-lite-1-5aa2.onrender.com/" },
];

export default function ProjectModal({ modalProject, setModalProject }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: modalProject ? 1 : 0 }}
      className={`fixed inset-0 bg-black bg-opacity-70 justify-center items-center z-50 ${modalProject ? "flex" : "hidden"}`}
      onClick={() => setModalProject(null)}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-11/12 max-w-4xl">
        <button
          onClick={() => setModalProject(null)}
          className="absolute top-2 right-2 text-2xl text-gray-600 dark:text-gray-200"
          aria-label="Close Modal"
        >
          ✖
        </button>
        <iframe
          src={modalProject ? projectsData.find((p) => p.id === modalProject)?.link : ""}
          className="w-full h-[80vh]"
          frameBorder="0"
          title="Project Preview"
        ></iframe>
      </div>
    </motion.div>
  );
}