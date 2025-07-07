import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillsData = [
  { category: "Frontend Development", skills: [{ name: "React", level: 90 }, { name: "JavaScript", level: 85 }, { name: "HTML5 & CSS3", level: 95 }, { name: "Tailwind CSS", level: 80 }] },
  { category: "Backend Development", skills: [{ name: "Python", level: 90 }, { name: "Flask & Django", level: 85 }, { name: "Node.js", level: 75 }, { name: "SQL & PostgreSQL", level: 80 }] },
  { category: "Tools & Other", skills: [{ name: "Git & GitHub", level: 85 }, { name: "Docker", level: 70 }, { name: "REST APIs", level: 80 }, { name: "CI/CD & Deployment", level: 75 }] },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/70 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          My Technical Skills
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-600 via-blue-700 to-blue-900 p-6 rounded-xl shadow-lg hover:scale-105 transition text-white"
            >
              <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
              {skill.skills.map((item) => (
                <div key={item.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}