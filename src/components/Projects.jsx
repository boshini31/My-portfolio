import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Asetroids from "../assets/Asetroids.jpg";
import Autism from "../assets/Autism.jpg";
import Chatbot from "../assets/Chatbot.jpg";

const projects = [
  {
    title: "Analyzing Dynamic Asteroids and Hazard Visualization",
    description:
      "A machine learning-based system that analyzes NASA’s Near-Earth Object data to predict and visualize potentially hazardous asteroids, improving accuracy in space risk assessment.",
    image: Asetroids,
    tech: ["Python", "Machine Learning Algorithms", "NLP for Data Interpretation", "Ploty(Data Visualization)","NASA NEO Dataset","Data Preprocessing Techniques"],
    live: null,
    code: "https://github.com/boshini31/-Analyzing-Dynamic-Asteroids-and-Hazard-Visualization",
  },
  {
    title: "Autism Prediction Using Deep Learning",
    description:
     "A deep learning-based system that analyzes medical and behavioral data to predict ASD with high accuracy, supporting early diagnosis and improved healthcare decision-making.",
    image: Autism,
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning","Machine Learning", "Multi-Layer Perceptron","Convolutional Neural Networks(CNN)","Recurrent Neural Network(RNN)","Data Preprocessing","Scikit-learn","Pandas","Numpy"],
    live: null,
    code: "https://github.com/boshini31/AUTISM-PREDEICTION-USING-DEEP-LEARNING",
  },
  {
    title: "Seren - AI",
    description:
    "Seren AI is an emotion-aware conversational system designed to interact like a caring mother. It combines memory, emotional reasoning, and Large Language Models to generate natural, empathetic responses based on user context and past interactions.",
    image: Chatbot,
    tech: ["FastAPI", "Python", "SQLModel", "PostgreSQL", "Large Language Models (LLMs)", "Prompt Engineering", "Contextual Memory Design", "REST APIs"],
    live: null,
    code: "https://github.com/boshini31/SerenAI",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-black text-white text-center px-4 sm:px-6 md:px-20 overflow-x-hidden">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-400 mb-10 sm:mb-12 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Here are some of my recent projects that showcase my skills in Development.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/20 transition flex flex-col w-full max-w-sm sm:max-w-xs">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 sm:h-44 w-full object-cover"
              />
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2 text-left truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4 text-left line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-cyan-950/20 text-cyan-400 px-2 py-1 text-xs rounded-full border border-cyan-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 mt-auto flex-wrap justify-center sm:justify-start">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-cyan-500 text-black text-xs sm:text-sm font-medium hover:bg-cyan-400 transition"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border border-cyan-500 text-cyan-500 text-xs sm:text-sm font-medium hover:bg-cyan-500 hover:text-black transition"
                  >
                    <Code size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
