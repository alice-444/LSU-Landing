import { Zap, Heart, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

const WhyLearnSup = () => {
  return (
    <div>
      <section className="py-20 bg-linear-to-b from-white to-[#C9A0DC]/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-8 py-4 rounded-full mb-6 font-bold text-lg transform hover:scale-105 transition-transform shadow-lg">
              ✨ Ce qui nous rend uniques
            </div>
            <h2 className="text-4xl sm:text-5xl mb-4">
              Pourquoi{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB647] to-[#FF9500]">
                Learnsup
              </span>{" "}
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des mentors passionnés et une approche 100% personnalisée
            </p>
          </div>

          {/* Main value proposition card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-linear-to-br from-[#FFB647]/10 via-[#C9A0DC]/10 to-[#4A90E2]/10 rounded-[40px] p-12 border-4 border-[#FFB647] shadow-2xl">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl flex items-center gap-3">
                <span>L'accompagnement Learnsup</span>
              </div>

              <div className="text-center mb-10 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ton mentor s'adapte à TOI en temps réel
                </h3>
                <p className="text-lg text-gray-600">
                  Parce que chaque étudiant(e) est unique
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    text: "Comprend VRAIMENT où tu bloques",
                    icon: Brain,
                    color: "#4A90E2",
                    description: "Analyse de tes difficultés",
                  },
                  {
                    text: "S'adapte à ton niveau et ton rythme",
                    icon: Zap,
                    color: "#FFB647",
                    description: "Progression personnalisée",
                  },
                  {
                    text: "Te motive et croit en toi",
                    icon: Heart,
                    color: "#C9A0DC",
                    description: "Encouragement et confiance",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[24px] p-6 border-3 border-gray-100 hover:border-[#FFB647] transition-all hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 mb-1">
                          {item.text}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/product">
              <button className="group bg-linear-to-r from-[#FFB647] to-[#C9A0DC] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                <span>Découvrir nos services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyLearnSup;
