import React from "react";

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

const LegalSection: React.FC<LegalSectionProps> = ({ title, children }) => (
  <section className="mb-12">
    <div className="inline-block bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white px-6 py-3 rounded-full mb-6 font-bold transform hover:scale-105 transition-transform">
      {title}
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
      {children}
    </div>
  </section>
);

export default LegalSection;
