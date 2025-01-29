import { motion } from "framer-motion";
import { FaUserFriends, FaRegClock, FaRocket } from "react-icons/fa";

const Features: React.FC = () => {
  const features = [
    {
      title: "Apprentissage Collaboratif",
      icon: <FaUserFriends className="text-6xl" />,
      description:
        "Apprenez ensemble avec vos pairs dans une communauté bienveillante et encourageante.",
      color: "#ff7849",
    },
    {
      title: "Flexibilité des Horaires",
      icon: <FaRegClock className="text-6xl" />,
      description:
        "Étudiez et collaborez à tout moment, avec des outils qui s'adaptent à votre emploi du temps.",
      color: "#ff4d6d",
    },
    {
      title: "Restez Motivé",
      icon: <FaRocket className="text-6xl" />,
      description:
        "Suivez vos progrès, célébrez vos réussites et atteignez vos objectifs plus rapidement grâce à nos outils de motivation.",
      color: "#ff914d",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] relative">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pourquoi choisir LearnSup ?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez comment notre plateforme peut vous aider à réussir grâce à
          des outils conçus pour la collaboration, la flexibilité et la
          motivation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute w-24 h-24 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition duration-500"
                style={{ backgroundColor: feature.color }}
              ></motion.div>

              <motion.div
                className="mb-6 z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{ color: feature.color }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 z-10">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-center z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-12 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Explorer les fonctionnalités
        </motion.button>
      </div>
    </div>
  );
};

export default Features;
