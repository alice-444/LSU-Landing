import { motion } from "framer-motion";
import Link from "next/link";
import { FaUserFriends, FaRegClock, FaRocket } from "react-icons/fa";

const Features: React.FC = () => {
  const features = [
    {
      title: "Apprentissage Collaboratif",
      icon: <FaUserFriends className="text-4xl sm:text-5xl md:text-6xl" />,
      description:
        "Progressez ensemble avec vos pairs au sein d'une communauté accueillante.",
      color: "var(--primary-blue)",
    },
    {
      title: "Flexibilité des Horaires",
      icon: <FaRegClock className="text-4xl sm:text-5xl md:text-6xl" />,
      description:
        "Apprenez et collaborez à votre rythme, grâce à des outils flexibles conçus pour s'adapter à votre emploi du temps.",
      color: "var(--primary-blue)",
    },
    {
      title: "Restez Motivé",
      icon: <FaRocket className="text-4xl sm:text-5xl md:text-6xl" />,
      description:
        "Boostez votre motivation et atteignez vos objectifs plus vite grâce à nos outils de suivi personnalisés.",
      color: "var(--primary-blue)",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] relative">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pourquoi choisir LearnSup ?
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez comment notre plateforme peut vous aider à réussir grâce à des
          outils conçus pour la collaboration, la flexibilité et la motivation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition duration-500"
                style={{ backgroundColor: feature.color }}
              ></motion.div>

              <motion.div
                className="mb-4 sm:mb-5 md:mb-6 z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{ color: feature.color }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 z-10">
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 text-center z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Link href="/product">
          <motion.button
            className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-xl sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explorer les fonctionnalités
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Features;
