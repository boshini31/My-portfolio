import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
       




    <footer id = "Footer" className="bg-black text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-center">
          <h2 className="text-xl font-bold">
            <span className="text-white">Boshini</span>
            <span className="text-cyan-400">TP</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Transforming ideas into reliable, data-driven solutions with a focus on performance and intelligent automation.
          </p>
        </div>

    
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Boshini TP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
