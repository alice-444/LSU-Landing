import React from "react";
import { motion } from "framer-motion";
import { NavigationProps, Section } from "@/lib/types";

const AboutNavigation: React.FC<NavigationProps> = ({
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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 py-4 md:py-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`relative py-3 md:py-4 px-4 md:px-6 text-sm md:text-base font-bold tracking-wider transition-all rounded-full ${
                activeSection === section.id
                  ? "bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white shadow-lg scale-105"
                  : "text-gray-600 hover:text-[#4A90E2] hover:bg-gray-50"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AboutNavigation;
