import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Reusable Card components
function Card({ children, className }) {
  return (
    <div
      className={`bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md transition hover:shadow-cyan-500/20 ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 sm:p-6 flex flex-col items-center text-center ${className}`}>{children}</div>;
}

export default function Contact() {
  const cards = [
    {
      icon: <Linkedin className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "LinkedIn",
      desc: "Connect with me professionally",
      link: "https://www.linkedin.com/in/boshini-tp/",
      delay: 0.3,
    },
    {
      icon: <Mail className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "Gmail",
      desc: "Drop me a message",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=boshinitp@gmail.com",
      delay: 0.5,
    },
    {
      icon: <Github className="w-10 h-10 text-cyan-400 mb-4" />,
      title: "GitHub",
      desc: "Check out my projects",
      link: "https://github.com/boshini31",
      delay: 0.7,
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 bg-black text-white text-center px-4 sm:px-6 md:px-20 overflow-x-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 mb-10 sm:mb-12 text-sm sm:text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Feel free to connect with me through any of the platforms below.  
        Whether it's for collaboration, opportunities, or just to say hi 👋
      </motion.p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: card.delay }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
              <Card>
                <CardContent>
                  {card.icon}
                  <h3 className="text-md sm:text-lg font-semibold mb-2 truncate">{card.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-snug">{card.desc}</p>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
