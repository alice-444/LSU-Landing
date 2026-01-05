import React from "react";
import { Benefit } from "@/lib/data/school";

interface BenefitsSectionProps {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
      <div className="text-center mb-16">
        <div className="inline-block bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
          Pourquoi Nous Choisir ?
        </div>
        <h2 className="text-4xl sm:text-5xl mb-4">Tout Pour Votre Réussite</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une solution complète pensée pour les besoins des établissements
          modernes
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`group relative bg-linear-to-br ${
                benefit.color
              } rounded-[32px] p-1 transform hover:-translate-y-2 transition-all hover:shadow-2xl ${
                index % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
              }`}
            >
              <div className="bg-white rounded-[28px] p-8 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-20 h-20 bg-linear-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all shrink-0`}
                  >
                    <span className="text-4xl">{benefit.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 font-bold">{benefit.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
