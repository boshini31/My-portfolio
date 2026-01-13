import { GraduationCap, Code2, Target } from "lucide-react";
import { motion } from "framer-motion";

// Card components
function Card({ children, className }) {
  return (
    <div className={`bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md transition ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 sm:p-6 flex flex-col items-center text-center ${className}`}>{children}</div>;
}

export default function AboutMe() {
  const cards = [
    {
      icon: <GraduationCap className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Education",
      desc: "Bachelor of Technology in Information Technology",
      delay: 0.3
    },
    {
      icon: <Code2 className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Current Focus",
      desc: "Enhancing software development skills and technical expertise.",
      delay: 0.5
    },
    {
      icon: <Target className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Goal",
      desc: "Driven to learn, innovate, and develop scalable systems that create meaningful impact.",
      delay: 0.7
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-black text-white text-center px-4 sm:px-6 md:px-20">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-300 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
       Hi, I’m Boshini TP.
       An IT graduate and Java developer with hands-on experience in building scalable enterprise applications using Spring Boot and REST APIs.
       I enjoy solving problems, learning quickly, and turning ideas into reliable software.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: card.delay }}
          >
            <Card className="hover:shadow-cyan-500/20">
              <CardContent>
                {card.icon}
                <h3 className="text-md sm:text-lg font-semibold mb-2 truncate">{card.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-snug">{card.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
