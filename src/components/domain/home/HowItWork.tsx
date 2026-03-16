import {
  UserPlus,
  Target,
  Rocket,
  ChevronRight,
  ArrowRight,
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"learner" | "mentor">("learner");

  const learnerSteps = [
    {
      icon: UserPlus,
      title: "Inscris-toi gratuitement",
      description: "Crée ton compte en 2 min",
      color: "from-(--brand-orange) to-(--brand-orange-dark)",
      emoji: "🎯",
      step: "01",
    },
    {
      icon: Target,
      title: "Choisis ton atelier",
      description: "Trouve le mentor parfait pour tes besoins",
      color: "from-(--primary-blue) to-(--blue)",
      emoji: "🔍",
      step: "02",
    },
    {
      icon: Rocket,
      title: "Apprends en petit groupe",
      description: "avec étudiants et ton mentor",
      color: "from-(--purple) to-(--purple-dark)",
      emoji: "🚀",
      step: "03",
    },
  ];

  const mentorSteps = [
    {
      icon: Users,
      title: "Inscris-toi gratuitement",
      description: "Crée ton compte en 2 min",
      color: "from-(--brand-orange) to-(--brand-orange-dark)",
      emoji: "👨‍🏫",
      step: "01",
    },
    {
      icon: Calendar,
      title: "Crée tes ateliers",
      description: "Définis tes créneaux et sujets",
      color: "from-(--primary-blue) to-(--blue)",
      emoji: "📅",
      step: "02",
    },
    {
      icon: MessageSquare,
      title: "Accompagne des étudiants",
      description: "Atelier avec des apprenants",
      color: "from-(--purple) to-(--purple-dark)",
      emoji: "💬",
      step: "03",
    },
    {
      icon: TrendingUp,
      title: "Impacte et gagne",
      description: "Développe ton impact et tes revenus",
      color: "from-(--green) to-[#7BC9A6]",
      emoji: "💰",
      step: "04",
    },
  ];

  const steps = activeTab === "learner" ? learnerSteps : mentorSteps;

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white"
      id="how-it-works"
    >
      <div className="text-center mb-16">
        <div className="inline-block bg-linear-to-r from-(--brand-orange) to-(--brand-orange-dark) text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
          Super simple !
        </div>
        <h2 className="text-4xl sm:text-5xl mb-4">Comment ça marche ?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          {activeTab === "learner"
            ? "3 étapes pour transformer tes études et enfin kiffer apprendre 🎉"
            : "4 étapes pour devenir mentor et partager ton expertise 🚀"}
        </p>

        <div className="inline-flex bg-gray-100 rounded-full p-2 gap-2">
          <button
            onClick={() => setActiveTab("learner")}
            className={`px-8 py-4 rounded-full font-bold transition-all transform ${
              activeTab === "learner"
                ? "bg-linear-to-r from-(--brand-orange) to-(--brand-orange-dark) text-white shadow-xl scale-105"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Je suis Apprenant·e
          </button>
          <button
            onClick={() => setActiveTab("mentor")}
            className={`px-8 py-4 rounded-full font-bold transition-all transform ${
              activeTab === "mentor"
                ? "bg-linear-to-r from-(--primary-blue) to-(--blue) text-white shadow-xl scale-105"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Je veux être mentor
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-20 left-0 right-0 h-32 -z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            style={{ position: "absolute", top: "-15px" }}
          >
            <defs>
              <linearGradient
                id={`waveGradient-${activeTab}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{
                    stopColor: "var(--brand-orange)",
                    stopOpacity: 0.6,
                  }}
                />
                <stop
                  offset={steps.length === 3 ? "50%" : "33%"}
                  style={{
                    stopColor: "var(--primary-blue)",
                    stopOpacity: 0.6,
                  }}
                />
                {steps.length === 4 && (
                  <stop
                    offset="66%"
                    style={{
                      stopColor: "var(--purple)",
                      stopOpacity: 0.6,
                    }}
                  />
                )}
                <stop
                  offset="100%"
                  style={{
                    stopColor: steps.length === 3 ? "var(--purple)" : "var(--green)",
                    stopOpacity: 0.6,
                  }}
                />
              </linearGradient>
            </defs>

            <path
              d={
                steps.length === 3
                  ? "M 0 50 Q 200 20, 400 50 T 800 50 T 1200 50"
                  : "M 0 50 Q 150 20, 300 50 T 600 50 T 900 50 T 1200 50"
              }
              fill="none"
              stroke={`url(#waveGradient-${activeTab})`}
              strokeWidth="8"
              strokeLinecap="round"
              className="animate-pulse-soft"
            />
          </svg>
        </div>

        <div
          className={`grid md:grid-cols-2 ${
            steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          } gap-8 lg:gap-12`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 left-full w-12 items-center justify-center z-10 -translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-(--brand-orange) animate-pulse" />
                  </div>
                )}

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ChevronRight className="w-8 h-8 text-(--brand-orange) rotate-90" />
                  </div>
                )}

                <div className="text-center transform hover:-translate-y-2 transition-all">
                  <div className="relative inline-block mb-6">
                    <div
                      className={`w-28 h-28 bg-linear-to-br ${step.color} rounded-[28px] flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-all border-4 border-white`}
                    >
                      <div className="text-5xl">{step.emoji}</div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-(--brand-orange) border-4 border-(--brand-orange)/30 font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-2xl mb-3 font-bold">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-16">
        <Link
          href="/services"
          className="group bg-linear-to-r from-(--brand-orange) to-(--purple) text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2 mx-auto"
        >
          <span>Découvrir nos services</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
