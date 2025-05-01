import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce que LearnSup ?",
      answer:
        "LearnSup est une plateforme d'apprentissage collaboratif qui permet aux étudiants de progresser ensemble, de partager leurs connaissances et de s'entraider dans leur parcours éducatif, personnel et professionnel.",
    },

    {
      question: "LearnSup est-il gratuit ?",
      answer:
        "LearnSup propose une version gratuite avec des fonctionnalités de base, ainsi que des abonnements premium qui offrent des fonctionnalités avancées pour une expérience d'apprentissage optimale.",
    },
    {
      question: "Comment fonctionne LearnSup ?",
      answer:
        "L'apprentissage collaboratif sur LearnSup se fait à travers des activités entre pairs et un espace de discussion où les étudiants peuvent échanger et s'entraider.",
    },
    {
      question: "Question 4",
      answer: "...",
    },
    {
      question: "Question 5",
      answer: "...",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Questions fréquentes
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4 sm:mb-6"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 flex justify-between items-center text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-[var(--primary-blue)] text-xl" />
                  </motion.div>
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-600 text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
