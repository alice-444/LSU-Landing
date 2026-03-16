import React from "react";
import { Building2, ArrowRight, Shield } from "lucide-react";

const SchoolsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#FFB647] via-[#FF9500] to-[#FFB647]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-64 h-64 bg-[#4A90E2] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-56 h-56 bg-[#C9A0DC] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-xl transform hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
              <span className="font-bold">Solution pour Établissements</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              Transformez
              <br />
              <span className="inline-block bg-white text-[#FFB647] px-6 py-2 rounded-2xl transform -rotate-2 shadow-2xl mt-2">
                l'Apprentissage
              </span>
            </h1>

            <p className="text-2xl mb-8 text-white/90 leading-relaxed">
              Offrez à vos étudiants une expérience moderne, gamifiée et
              efficace avec Learnsup for Schools !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-white text-[#FFB647] px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-2xl group">
                Demander une Démo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-2xl hover:bg-white/30 transition-colors border-2 border-white/40 font-bold text-lg">
                Obtenir un Devis
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Shield className="w-4 h-4" />
                <span>100% Conforme RGPD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 41.7C840 33.3 960 16.7 1080 16.7C1200 16.7 1320 33.3 1380 41.7L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default SchoolsHero;

