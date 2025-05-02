import React from "react";
import { motion } from "framer-motion";
import { Telescope } from "lucide-react";
import { NavigationProps, Section } from "@/lib/types";

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const sections: { id: Section; label: string }[] = [
    { id: "mission", label: "MISSION" },
    { id: "approche", label: "APPROCHE" },
    { id: "équipe", label: "ÉQUIPE" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-[var(--primary-blue)]/10 p-2 md:p-3 rounded-full">
              <Telescope className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary-blue)]" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-blue)]/70 bg-clip-text text-transparent">
              Découvrez LearnSup
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-12">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`relative py-3 md:py-6 px-2 text-sm md:text-base font-medium tracking-wider transition-colors ${
                  activeSection === section.id
                    ? "text-[var(--primary-blue)]"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-blue)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
