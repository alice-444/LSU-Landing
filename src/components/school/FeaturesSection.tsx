import React from "react";
import { Award } from "lucide-react";
import { Feature } from "@/lib/data/school";

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[#C9A0DC] text-white px-5 py-2 rounded-full mb-4 text-sm font-bold">
              Fonctionnalités Complètes
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Tout ce Dont Vous Avez Besoin
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learnsup for Schools est une solution complète qui s'adapte
              parfaitement à vos besoins spécifiques
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="shrink-0 w-10 h-10 bg-linear-to-br from-[#A8D5BA] to-[#7BC9A6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed pt-1">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#4A90E2]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#26547C] rounded-2xl flex items-center justify-center shadow-xl">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">
                      Taux de réussite moyen
                    </div>
                    <div className="text-3xl font-bold bg-linear-to-r from-[#4A90E2] to-[#26547C] bg-clip-text text-transparent">
                      92%
                    </div>
                  </div>
                </div>

                <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-linear-to-r from-[#A8D5BA] to-[#4A90E2] rounded-full animate-pulse-soft"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
