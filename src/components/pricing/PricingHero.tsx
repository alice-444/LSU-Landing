import React from "react";
import { Wallet } from "lucide-react";

interface PricingHeroProps {
  billingPeriod: "monthly" | "annual";
  onBillingPeriodChange: (period: "monthly" | "annual") => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({
  billingPeriod,
  onBillingPeriodChange,
}) => {
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-xl transform hover:scale-105 transition-transform">
          <Wallet className="w-5 h-5 text-white" />
          <span className="text-white font-bold">Tarifs</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          <span className="inline-block bg-white text-[#FFB647] px-8 py-3 rounded-2xl transform rotate-1 shadow-2xl mt-4">
            Tarifs
          </span>
        </h1>

        <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Choisis le plan qui te convient. Aucun piège, aucun frais caché. Tu
          n'es pas obligé de payer pour commencer. Tu peux commencer
          gratuitement et payer uniquement quand tu es prêt(e) à investir dans
          ton apprentissage.
        </p>

        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full p-2 border-2 border-white/40 shadow-2xl">
          <button
            onClick={() => onBillingPeriodChange("monthly")}
            className={`px-8 py-4 rounded-full transition-all font-bold ${
              billingPeriod === "monthly"
                ? "bg-white text-[#FFB647] shadow-xl scale-105"
                : "text-white hover:bg-white/10"
            }`}
          >
            💳 Mensuel
          </button>
          <button
            onClick={() => onBillingPeriodChange("annual")}
            className={`px-8 py-4 rounded-full transition-all font-bold relative ${
              billingPeriod === "annual"
                ? "bg-white text-[#FFB647] shadow-xl scale-105"
                : "text-white hover:bg-white/10"
            }`}
          >
            Annuel
            <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#4A90E2] to-[#26547C] text-white text-xs px-3 py-1 rounded-full shadow-lg font-bold animate-pulse">
              -20%
            </span>
          </button>
        </div>

        {billingPeriod === "annual" && (
          <p className="mt-6 text-white/90 text-lg animate-bounce">
            Économise jusqu'à 48€ par an avec l'abonnement annuel.
          </p>
        )}
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

export default PricingHero;
