import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="relative bg-linear-to-br from-[#FFB647]/10 via-white to-[#C9A0DC]/10 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFB647] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#C9A0DC] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-r from-[#FFB647] to-[#FF9500] rounded-full mb-6 shadow-xl transform hover:scale-110 transition-transform">
            <PlayCircle className="w-12 h-12 text-white" strokeWidth={2} />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-linear-to-r from-[#FFB647] to-[#C9A0DC] bg-clip-text text-transparent">
            Découvre notre démo
          </h2>

          <div className="inline-block bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-8 py-4 rounded-full mb-6 font-bold text-lg shadow-lg transform hover:scale-105 transition-transform">
            Bientôt disponible 
          </div>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Nous préparons une démo interactive pour te montrer comment{" "}
            <span className="font-bold text-[#FFB647]">Learnsup</span>{" "}
            transforme ton apprentissage. Reste connecté, ça arrive très bientôt
            ! ✨
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center text-gray-600">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="w-5 h-5 text-[#FFB647]" />
              <span className="font-medium">En cours de développement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
