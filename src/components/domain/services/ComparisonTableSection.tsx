import React from "react";
import { Check, X } from "lucide-react";
import { Competitor, ComparisonFeature } from "@/lib/data/services";

interface ComparisonTableSectionProps {
  competitors: Competitor[];
  features: ComparisonFeature[];
}

const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
  competitors,
  features,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <div className="inline-block bg-linear-to-r from-(--purple) to-(--purple-dark) text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
          Comparaison 🔍
        </div>
        <h2 className="text-4xl sm:text-5xl mb-4">
          Pourquoi Choisir Learnsup ?
        </h2>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-(--brand-orange)/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-(--blue) to-(--primary-blue)">
                <th className="px-6 py-5 text-left text-white text-lg">
                  Fonctionnalités
                </th>
                {competitors.map((comp, index) => (
                  <th
                    key={index}
                    className={`px-6 py-5 text-center text-white text-lg ${
                      comp.isUs
                        ? "bg-linear-to-r from-(--brand-orange) to-(--brand-orange-dark)"
                        : ""
                    }`}
                  >
                    <div className="font-bold">{comp.name}</div>
                    {comp.isUs && (
                      <div className="text-xs mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">
                        C'est nous !
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr
                  key={featureIndex}
                  className={`${
                    featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-(--brand-orange)/5 transition-colors`}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{feature.emoji}</span>
                      <span className="text-gray-900 font-medium">
                        {feature.name}
                      </span>
                    </div>
                  </td>
                  {feature.values.map((value, valueIndex) => (
                    <td
                      key={valueIndex}
                      className={`px-6 py-5 text-center ${
                        valueIndex === 0 ? "bg-(--brand-orange)/10" : ""
                      }`}
                    >
                      {value ? (
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-linear-to-br from-(--green) to-[#7BC9A6] rounded-full shadow-lg transform hover:scale-110 transition-transform">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                          <X className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
