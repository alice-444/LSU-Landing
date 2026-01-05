import React from "react";
import { Clock } from "lucide-react";
import { Benefit } from "@/lib/data/services";

interface WorkshopsSectionProps {
  benefits: Benefit[];
}

const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ benefits }) => {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-[#4A90E2] text-white px-5 py-2 rounded-full mb-4 text-sm font-bold">
              Nos services Principaux
            </div>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Des Ateliers Pensés pour Ta Réussite
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learnsup combine le meilleur de la pédagogie moderne avec la
              technologie pour créer une expérience d'apprentissage unique et
              ultra-efficace.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#A8D5BA] to-[#7BC9A6] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg font-medium">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#FFB647]/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">
                      Atelier Mathématiques
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>45 min • 6/8 places</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Ta progression</span>
                    <span className="font-bold text-[#FFB647]">75%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-[#FFB647] to-[#FF9500] rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-linear-to-br from-[#C9A0DC] to-[#A66FD9] text-white px-5 py-3 rounded-2xl shadow-xl transform rotate-12 animate-bounce">
                <div className="text-2xl">🏆</div>
                <div className="text-xs font-bold mt-1">Nouveau badge !</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-linear-to-br from-[#4A90E2] to-[#26547C] text-white px-5 py-3 rounded-2xl shadow-xl transform -rotate-6">
                <div className="text-lg font-bold">⭐ 4.0/5</div>
                <div className="text-xs opacity-90">Note du mentor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
