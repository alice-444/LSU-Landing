"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  GraduationCap,
  Users,
  BrainCircuit,
  Shield,
  Clock,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const LearnSupForSchool: React.FC = () => {
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

  const features = [
    {
      icon: <Users className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: "Gestion des promotions",
      description:
        "Organisez et gérez vos promotions, groupes de travail et projets d'étudiants.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: "Apprentissage collaboratif",
      description: "Encouragez l'échange de connaissances entre étudiants.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: "Sécurité et confidentialité",
      description: "Protection des données et environnement sécurisé",
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: "Suivi en temps réel",
      description: "Suivez la progression des étudiants",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: "Réseau professionnel",
      description: "Connectez vos étudiants avec des acccompagnateurs.",
    },
  ];

  const faqs = [
    {
      question: "Comment LearnSup s'intègre-t-il dans les écoles supérieures ?",
      answer:
        "LearnSup s'adapte parfaitement aux besoins spécifiques des écoles supérieures. Nous proposons également des solutions d'intégration avec vos systèmes existants.",
    },
    {
      question: "Comment assurer la sécurité des données ?",
      answer:
        "Nous respectons strictement le RGPD et les réglementations en vigueur. Toutes les données sont hébergées en France et sécurisées.",
    },
    {
      question: "Quel est le niveau de support technique proposé ?",
      answer:
        "Nous offrons un support technique dédié aux écoles supérieures, disponible 5 jours sur 7. Notre équipe d'assistance est formée pour répondre aux besoins spécifiques des établissements d'enseignement supérieur.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-blue)]/10 via-[#fffaf5] to-[var(--secondary-blue)]/10 overflow-x-hidden py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <GraduationCap className="text-[var(--primary-blue)] w-16 h-16" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            LearnSup pour les écoles supérieures
          </h1>
          <p className="text-xl text-[var(--quaternary-blue)] max-w-3xl mx-auto">
            Une plateforme collaborative pour connecter vos étudiants avec le
            monde professionnel
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-blue)]/20 via-[var(--secondary-blue)]/10 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/40 group-hover:shadow-[0_8px_32px_0_rgba(74,144,226,0.25)] transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-blue)]/20 to-[var(--secondary-blue)]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white rounded-full p-3 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[var(--primary-blue)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-[var(--quaternary-blue)] max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur LearnSup pour les écoles
              supérieures
            </p>
          </div>

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
              Prêt à transformer l&apos;expérience de vos étudiants ?
            </p>
            <Link href="/contact">
              <motion.button
                className="inline-block bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-8 py-4 rounded-full text-xl font-medium shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez notre équipe
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnSupForSchool;
