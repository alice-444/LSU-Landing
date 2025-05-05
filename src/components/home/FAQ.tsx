import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown} from "react-icons/fa";
import { faqs } from "@/lib/data/faq";
import { MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div className="py-10 sm:py-20 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-3">
            <MessageCircleQuestion className="text-[var(--primary-blue)] w-16 h-16" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-[var(--quaternary-blue)] max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur notre
            plateforme
          </p>
        </motion.div>

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
              className="mb-3 sm:mb-6"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 flex justify-between items-center text-left group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-[var(--primary-blue)] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--primary-blue)]"
                  >
                    <FaChevronDown className="text-xl" />
                  </motion.div>
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--quaternary-blue)] mb-6 text-xl">
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-6 py-3 rounded-full text-xl font-medium shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
