import React from "react";
import { ArrowRight } from "lucide-react";
import { ProcessStep } from "@/lib/data/school";

interface ProcessSectionProps {
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
            Simple et Rapide
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Comment Ça Marche ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, votre établissement est prêt à décoller !
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 left-full w-8 items-center justify-center z-10 -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-[#FFB647] animate-pulse" />
                  </div>
                )}

                <div className="text-center transform hover:-translate-y-2 transition-all">
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-28 h-28 bg-linear-to-br ${step.color} rounded-[28px] flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-all border-4 border-white`}
                    >
                      <div className="text-5xl">{step.emoji}</div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#FFB647] border-4 border-[#FFB647]/30 font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl mb-3 font-bold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 p-6 bg-linear-to-r from-[#4A90E2]/10 to-[#26547C]/10 rounded-2xl border-2 border-[#4A90E2]/20">
          <p className="text-lg">
            ⚡{" "}
            <span className="font-bold text-[#4A90E2]">
              Déploiement moyen :
            </span>{" "}
            2-3 semaines seulement !
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
