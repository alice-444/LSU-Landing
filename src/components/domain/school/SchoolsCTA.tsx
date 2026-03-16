import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const SchoolsCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#26547C] via-[#4A90E2] to-[#C9A0DC] py-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-64 h-64 bg-[#FFB647] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl text-white mb-4">
          Prêt à Révolutionner l'Apprentissage ?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-3">
          Contactez-nous pour une démo personnalisée
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-6">
          Découvrez comment Learnsup peut transformer votre établissement !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-[#4A90E2] px-8 py-3 rounded-2xl hover:scale-105 transition-transform shadow-xl text-lg font-bold inline-flex items-center gap-2 group">
            <Calendar className="w-5 h-5" />
            Planifier une Démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolsCTA;
