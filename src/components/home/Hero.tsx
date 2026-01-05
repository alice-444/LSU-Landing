// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FiArrowRight } from "react-icons/fi";

// const Hero: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#fffaf5] via-[#fff] to-[#fffaf5] py-24">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 pt-[100px]">
//         <motion.div
//           className="text-left max-w-2xl"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="text-6xl font-extrabold text-[var(--tertiary-blue)] leading-tight"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Apprenez et progressez <br />
//             <span className="text-[var(--primary-blue)]">
//               en vous entraidant
//             </span>
//           </motion.h1>
//           <motion.p
//             className="text-gray-700 text-xl mt-6 mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             La première plateforme d entraide et de réseautage exclusivement
//             pour les étudiants.
//           </motion.p>
//           <motion.button
//             className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl flex items-center whitespace-nowrap"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Inscrivez-vous
//             <FiArrowRight className="ml-3 text-xl animate-bounce-horizontal" />
//           </motion.button>
//         </motion.div>

//         <motion.div
//           className="w-full max-w-lg mb-8 md:mb-0 md:ml-12 relative"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <Image
//             src="/studentWorking.webp"
//             alt="Students Working"
//             className="rounded-xl shadow-2xl"
//             width={600}
//             height={450}
//             priority
//           />
//           <motion.div
//             className="absolute -top-8 -left-8 w-24 h-24 bg-[var(--green)]/25 rounded-full"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{
//               duration: 1,
//               delay: 0.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#ff4d6d]/20 rounded-full"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{
//               duration: 1,
//               delay: 0.7,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { Rocket, Sparkles, TrendingUp } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-[#FFB647] via-[#FF9500] to-[#FFB647]">
      {/* Decorative blobs - Duolingo style */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A0DC] rounded-[50%] blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#4A90E2] rounded-[50%] blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#A8D5BA] rounded-[50%] blur-3xl animate-pulse"
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
              <button className="group bg-white text-[#FFB647] px-8 py-5 rounded-[24px] flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all shadow-xl font-bold text-lg">
                <span>Commence gratuitement</span>
                <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-[24px] hover:bg-white/30 transition-all border-4 border-white/40 font-bold text-lg hover:scale-105">
                Voir la démo
              </button>
            </div>
          </div>

          {/* Right content - Gamified visual cards */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[550px]">
              {/* Level progress card - Middle */}
              <div className="absolute top-40 left-0 bg-white rounded-[32px] p-8 shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all border-4 border-[#4A90E2]/20 w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#26547C] rounded-[20px] flex items-center justify-center text-4xl shadow-lg">
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
                    className="bg-linear-to-r from-[#4A90E2] to-[#26547C] h-full rounded-full shadow-lg"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Achievement card - Bottom */}
              <div className="absolute bottom-0 right-12 bg-white rounded-[32px] p-8 shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all border-4 border-[#A8D5BA]/20 w-[280px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 bg-linear-to-br from-[#A8D5BA] to-[#7BC9A6] rounded-[20px] flex items-center justify-center text-4xl shadow-lg">
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
