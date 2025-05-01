import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffaf5] via-[#fff] to-[#fffaf5] py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
        <motion.div
          className="text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl font-extrabold text-[var(--tertiary-blue)] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Apprenez et progressez <br />
            <span className="text-[var(--primary-blue)]">
              en vous entraidant
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-700 text-xl mt-6 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            La première plateforme d entraide et de réseautage exclusivement
            pour les étudiants.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Inscrivez-vous
            <FiArrowRight className="ml-3 text-xl animate-bounce-horizontal" />
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full max-w-lg mb-8 md:mb-0 md:ml-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/studentWorking.webp"
            alt="Students Working"
            className="rounded-xl shadow-2xl"
            width={600}
            height={450}
            priority
          />
          <motion.div
            className="absolute -top-8 -left-8 w-24 h-24 bg-[#ff7849]/20 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#ff4d6d]/20 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
