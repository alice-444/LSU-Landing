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
    <div className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--primary-orange)]/10">
            <MessageCircleQuestion className="text-[var(--primary-orange)] w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes
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
              className="mb-3 sm:mb-4"
            >
              {index > 0 && (
                <div className="h-px bg-gray-100/90 mb-3 sm:mb-4" />
              )}
              <motion.div
                className={`rounded-xl transition-[background,border,box-shadow] duration-200 overflow-hidden border ${openIndex === index ? 'bg-[var(--primary-orange)]/5 border-[var(--primary-orange)]/50 shadow-sm' : 'bg-white border-gray-200 hover:border-[var(--primary-orange)]/50 shadow-sm hover:shadow-md'}`}
                whileHover={{ scale: 1.001 }}
              >
                <button
                  className="w-full px-6 py-4 sm:px-7 sm:py-5 flex justify-between items-center text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-orange)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-expanded={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-[1.05rem] sm:text-xl font-semibold tracking-tight text-gray-900 group-hover:text-[var(--primary-orange)] transition-colors duration-150">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-orange)]/10 group-hover:bg-[var(--primary-orange)]/20 transition-colors">
                      <FaChevronDown className="text-base sm:text-lg text-[var(--primary-orange)]" />
                    </div>
                  </motion.div>
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: openIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 sm:px-7 pb-6 sm:pb-7"
                  >
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg sm:text-xl">
          Toujours une question en tête ?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--primary-orange)] text-white px-6 py-3 rounded-full text-lg sm:text-xl font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary-orange)] transition-all duration-200 ease-out"
          >
            Centre d'aide
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
