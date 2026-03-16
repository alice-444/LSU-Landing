import Link from "next/link";
import toast from "react-hot-toast";
import { Rocket, Sparkles } from "lucide-react";

const showComingSoonToast = () =>
  toast("En cours de déploiement — à très bientôt ! 🚀", {
    icon: "🔨",
    duration: 4000,
    style: {
      background: "linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-orange-dark) 100%)",
      color: "#fff",
      fontWeight: 600,
    },
  });

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-(--brand-orange) via-(--brand-orange-dark) to-(--brand-orange)">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--purple) rounded-[50%] blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-(--primary-blue) rounded-[50%] blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-(--green) rounded-[50%] blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-5 py-3 rounded-full mb-6 transform hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">
                Apprends avec un mentor, pas tout seul !
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              Réussis tes études avec des
              <span className="block mt-2 text-transparent bg-clip-text bg-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                ateliers ! 🚀
              </span>
            </h1>

            <p className="text-xl sm:text-2xl mb-8 text-white/95 leading-relaxed">
              Rejoins{" "}
              <span className="font-bold underline decoration-wavy decoration-white/50">
                des étudiants qui progressent ensemble
              </span>{" "}
              <br />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={showComingSoonToast} className="group bg-white text-(--brand-orange) px-8 py-5 rounded-[24px] flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all shadow-xl font-bold text-lg">
                <span>Commence gratuitement</span>
                <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/services#demo">
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-[24px] hover:bg-white/30 transition-all border-4 border-white/40 font-bold text-lg hover:scale-105">
                  Voir la démo
                </button>
              </Link>
            </div>
          </div>

          {/* Right content - Gamified visual cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[550px]">
              {/* Level progress card - Middle */}
              <div className="absolute top-40 left-0 bg-white rounded-[32px] p-8 shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all border-4 border-(--primary-blue)/20 w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-(--primary-blue) to-(--blue) rounded-[20px] flex items-center justify-center text-4xl shadow-lg">
                    📈
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 font-bold">
                      Niveau
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      8 - Expert
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-full h-4 overflow-hidden shadow-inner">
                  <div
                    className="bg-linear-to-r from-(--primary-blue) to-(--blue) h-full rounded-full shadow-lg"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Achievement card - Bottom */}
              <div className="absolute bottom-0 right-12 bg-white rounded-[32px] p-8 shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all border-4 border-(--green)/20 w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-linear-to-br from-(--green) to-[#7BC9A6] rounded-[20px] flex items-center justify-center text-4xl shadow-lg">
                    ⭐
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-bold">
                      Dernier atelier
                    </div>
                    <div className="font-bold text-gray-900">
                      Maths avancées
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
export default Hero;
