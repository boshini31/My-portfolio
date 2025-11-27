// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaLinux,
  FaDatabase,
  FaWindows,
  FaCode,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiPostman,
  SiTensorflow,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },

    { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
    { name: "Hibernate", icon: <SiHibernate className="text-orange-500" /> },
    { name: "FastAPI", icon: <SiTensorflow className="text-teal-400" /> },
    { name: "Flask", icon: <SiTensorflow className="text-gray-300" /> },
    { name: "Machine Learning", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "NLP", icon: <SiTensorflow className="text-purple-400" /> },

    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    {  name: "VS Code", icon: <FaCode className="text-blue-500" /> },
    { name: "Excel", icon: <FaDatabase className="text-green-400" /> },

    { name: "Windows", icon: <FaWindows className="text-blue-400" /> },
    { name: "Kali Linux", icon: <FaLinux className="text-yellow-400" /> },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Technologies, tools, and frameworks I work with to build intelligent and scalable systems.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 justify-items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            variants={item}
            whileHover={{ scale: 1.2, y: -5 }}
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
