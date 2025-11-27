// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
   "Full Stack Developer",
    "Backend Developer",
    "Machine Learning Engineer",
    "Data Analyst",
  ];

  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentRole.length) setIsDeleting(true);
      } else {
        setCurrentText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id = "home" className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-6 max-w-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hi, I'm <span className="text-blue-500">Boshini</span>
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.h2
          className="text-lg md:text-2xl font-semibold text-gray-300 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {currentText}
          <span className="blinking-cursor">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-400 text-sm md:text-base max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I am a Software Developer specializing in backend systems and automation, 
          passionate about building scalable, efficient, and reliable applications using Java, Python, and Spring Boot.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="px-5 py-3 rounded-md border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5 mt-4 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <a href="https://github.com/boshini31" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/boshini-tp/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
          <a href= "https://mail.google.com/mail/?view=cm&fs=1&to=boshini.tmp@gmail.com">
            <HiOutlineMail className="hover:text-cyan-400 transition" />
          </a>
        </motion.div>
      </motion.div>

      {/* Cursor blinking style */}
      <style>
        {`
          .blinking-cursor {
            font-weight: 100;
            font-size: 1em;
            color: cyan;
            animation: blink 1s infinite;
          }
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
