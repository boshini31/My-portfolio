import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-black/90 text-white shadow-md backdrop-blur-sm transition-all"
      animate={{ y: scrolled ? -10 : 0, opacity: scrolled ? 0.95 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
          TP
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-cyan-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* ✅ RESUME VIEW BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition text-sm font-semibold shadow-md"
          >
            View Resume
          </a>

          {/* ✅ RESUME DOWNLOAD BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"
            download = "Boshini_TP_resume.pdf"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition text-sm font-semibold shadow-md"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black/95 text-white flex flex-col space-y-6 py-6 px-8 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* ✅ MOBILE VIEW RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              View Resume
            </a>

            {/* ✅ MOBILE DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              download = "Boshini_TP_resume.pdf"
              rel="noopener noreferrer"
              className="text-center px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition"
            >
              Download Resume
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
