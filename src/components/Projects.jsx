import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projectsData = [
  { id: "ajali", title: "Ajali! App", image: "/Ajali.png", description: "Real-time emergency reporting app built with React and Node.js.", tech: ["React", "Node.js"], link: "https://ajali-1-s5ar.onrender.com/" },
  { id: "spacer", title: "Spacer Platform", image: "/spacer.png", description: "Full-stack rental space platform with payment system using Django and PostgreSQL.", tech: ["Django", "PostgreSQL"], link: "https://spacer-platform-1.onrender.com/" },
  { id: "weather", title: "Weather Watchlite", image: "/weather.png", description: "Weather forecast dashboard built with HTML, Tailwind CSS, and JavaScript.", tech: ["HTML", "Tailwind", "JavaScript"], link: "https://weather-watch-lite-1-5aa2.onrender.com/" },
];

export default function Projects({ filter, setModalProject }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="flex justify-center mb-8 space-x-4">
        {["All", "React", "Django", "JavaScript"].map((tech) => (
          <motion.button
            key={tech}
            onClick={() => setFilter(tech)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${filter === tech ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"} hover:bg-blue-500 hover:text-white transition`}
          >
            {tech}
          </motion.button>
        ))}
      </div>
      <motion.div
        ref={ref}
        className="grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projectsData
          .filter((project) => filter === "All" || project.tech.includes(filter))
          .map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition cursor-pointer"
              onClick={() => setModalProject(project.id)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <img src={project.image} alt={project.title} className="rounded mb-2 w-full h-48 object-cover" loading="lazy" />
              <p className="text-gray-500 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded hover:from-purple-700 hover:to-blue-700 transition"
                onClick={(e) => e.stopPropagation()}
              >
                Live Preview
              </a>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
}