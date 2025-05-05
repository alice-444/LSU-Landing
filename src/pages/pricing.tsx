"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MessageCircleQuestion } from "lucide-react";

const pricingPlans = [
  {
    name: "Gratuit",
    price: "0€",
    description: "Parfait pour commencer",
    features: [
      "Acces aux fonctionnalités de base",
      "3 ateliers par mois",
      "Support communautaire",
    ],
    excluded: [
      "Support prioritaire",
      "Stockage",
      "Contenus premium",
      "Acces hors ligne",
      "Ateliers",
    ],
    cta: "Commencer gratuitement",
    href: "https://learn-sup.vercel.app/",
    popular: false,
  },
  {
    name: "Premium",
    price: "9.99€",
    period: "/mois",
    description: "Le plus populaire",
    features: [
      "Toutes les fonctionnalités",
      "+ de 3 ateliers par mois",
      "Support communautaire",
      "Support prioritaire",
      "Stockage",

      "Contenus premium",
      "Accès hors ligne",
    ],
    cta: "Essayer Premium",
    href: "https://learn-sup.vercel.app/",
    popular: true,
  },
  {
    name: "Ecole",
    price: "Contactez-nous",
    description: "Pour les écoles",
    features: ["Toutes les fonctionnalités Premium", "Support dedié"],
    cta: "Contactez-nous",
    href: "/contact",
    popular: false,
  },
];

const Pricing: React.FC = () => {
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
    <div className="relative bg-gradient-to-br from-[var(--primary-blue)]/10 via-[#fffaf5] to-[var(--secondary-blue)]/10 overflow-x-hidden py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--tertiary-blue)] bg-clip-text text-transparent">
            Des tarifs adaptés à vos besoins
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond le mieux à votre parcours
            d&apos;apprentissage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plan.popular ? "md:scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-blue)]/30 via-[var(--secondary-blue)]/20 to-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              )}

              <div
                className={`relative z-10 p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl group-hover:shadow-[0_8px_32px_0_rgba(74,144,226,0.25)] transition-all duration-300 ${
                  plan.popular ? "border-[var(--primary-blue)]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white text-sm font-bold px-4 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-[var(--primary-blue)] to-[var(--tertiary-blue)] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.excluded?.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-400"
                    >
                      <FiX className="text-red-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <motion.button
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white hover:shadow-lg"
                        : "bg-white text-[var(--primary-blue)] border-2 border-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                    {plan.popular && (
                      <FiArrowRight className="ml-2 inline-block" />
                    )}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
              Tout ce que vous devez savoir sur nos tarifs et services
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: "Puis-je changer de plan à tout moment ?",
                answer:
                  "Oui, vous pouvez mettre à jour ou annuler votre abonnement à tout moment.",
              },
              {
                question: "Y a-t-il un engagement ?",
                answer:
                  "Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment. Nous croyons en la qualité de notre service et ne voulons pas vous forcer à rester.",
              },
              {
                question: "Les tarifs incluent-ils la TVA ?",
                answer:
                  "Oui, tous nos tarifs sont TTC. Les factures sont disponibles dans votre espace personnel et incluent tous les details de facturation.",
              },
              {
                question: "Quels sont les moyens de paiement acceptes ?",
                answer:
                  "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et les virements bancaires pour les plans Ecole. Tous les paiements sont securisés.",
              },
              {
                question: "Comment fonctionne la periode d'essai ?",
                answer:
                  "Le plan Premium inclut une periode d'essai de 14 jours. Vous pouvez tester les fonctionnalités sans engagement. Aucune carte bancaire n'est requise pour commencer.",
              },
              {
                question:
                  "Quelle est la difference entre le plan Premium et Ecole ?",
                answer:
                  "Le plan Ecole inclut des fonctionnalités supplementaires. Il est conçu pour les écoles en étude supérieurs.",
              },
            ].map((faq, index) => (
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
            <Link href="/contact">
              <motion.button
                className="inline-block bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-6 py-3 rounded-full text-xl font-medium shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
