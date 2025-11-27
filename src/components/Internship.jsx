import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

function Card({ children }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md transition hover:shadow-cyan-500/20">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      {children}
    </div>
  );
}

export default function Internship() {
  const internships = [
    {
      role: "Developer Intern",
      company: "Hexaware Technologies",
      duration: "Mar 2025 – Sep 2025",
      desc: "Handled high-volume employee data management with a focus on accuracy, compliance, and process optimization. Utilized Excel and internal enterprise systems to support onboarding, offboarding, and workforce data updates while ensuring data integrity and consistency across platforms. Followed strict SOP-driven workflows, performed continuous self-audits, and delivered reports within defined SLAs. Collaborated with cross-functional teams to streamline data operations, improve workflow efficiency, and maintain reliable enterprise data processing in high-pressure environments.",
      delay: 0.2,
    },
    {
        role: "AI Intern",
        company: " Pantech Solutions",
        duration: "Nov 2023 - Dec 2023 ",
        desc: "AI Intern with hands-on experience in machine learning algorithms, model training, and data analysis. Built real-world projects including an OpenCV Face Recognition system and an intelligent Smart Attendance System using Machine Learning and Deep Learning, strengthening practical expertise in AI development."
    }
  ];

  return (
    <section
      id="internship"
      className="py-12 sm:py-16 bg-black text-white text-center px-4 sm:px-6 md:px-20"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Internship <span className="text-cyan-400">Experience</span>
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 mb-10 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hands-on experience gained through real-world industry exposure and collaborative development environments.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {internships.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: item.delay }}
          >
            <Card>
              <CardContent>
                <Briefcase className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-cyan-400 text-sm">{item.company}</p>
                <p className="text-gray-400 text-xs mb-3">{item.duration}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
