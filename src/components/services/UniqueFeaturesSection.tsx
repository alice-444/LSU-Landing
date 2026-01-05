import React from "react";
import { UniqueFeature } from "@/lib/data/services";

interface UniqueFeaturesSectionProps {
  features: UniqueFeature[];
}

const UniqueFeaturesSection: React.FC<UniqueFeaturesSectionProps> = ({
  features,
}) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
            Notre Secret 🔥
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">Ce Qui Nous Rend Unique</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pas de blabla marketing. Voici pourquoi on cartonne vraiment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className={`group relative bg-linear-to-br ${
                  feature.color
                } rounded-[32px] p-1 transform hover:-translate-y-2 transition-all hover:shadow-2xl ${
                  index % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                }`}
              >
                <div className="bg-white rounded-[28px] p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-20 h-20 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all`}
                    >
                      <span className="text-4xl">{feature.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{feature.title}</h3>
                      <div
                        className={`inline-block bg-linear-to-r ${feature.color} text-white px-4 py-2 rounded-xl text-sm font-bold`}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeaturesSection;
