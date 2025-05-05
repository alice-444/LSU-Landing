"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import FeatureCard from "@/components/product/FeatureCard";
import KeyPoint from "@/components/product/KeyPoint";
import ComparisonTable from "@/components/product/ComparisonTable";
import { features, keyPoints, comparisonRows } from "@/lib/data/product";

const Product: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-[var(--primary-blue)]/10 via-[#fffaf5] to-[var(--secondary-blue)]/10 overflow-x-hidden py-20">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-12 md:py-24 gap-10 md:gap-20">
        <motion.div
          className="w-full md:w-1/2 z-10 flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--tertiary-blue)] bg-clip-text text-transparent">
            La plateforme qui revolutionne l&apos;entraide étudiante
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
            Decouvrez une experience d&apos;apprentissage collaborative, intuitive et
            motivante, pensée pour les etudiants d&apos;aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {keyPoints.map((point) => (
              <KeyPoint key={point.label} icon={point.icon} label={point.label} />
            ))}
          </div>
          <Link href="https://learn-sup.vercel.app/">
            <motion.button
              className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl flex items-center whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Essayer gratuitement
              <FiArrowRight className="ml-3 text-xl animate-bounce-horizontal" />
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative">
            <Image
              src="/mockup.png"
              alt="Apercu LearnSup"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl border-4 border-white/60"
              priority
            />
            <motion.div
              className="absolute -top-8 -left-8 w-24 h-24 bg-[var(--green)]/25 rounded-full"
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
          </div>
        </motion.div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--primary-blue)]/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--secondary-blue)]/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      </div>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-[var(--tertiary-blue)] mb-4">
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme complete qui vous accompagne tout au long de votre
              parcours d&apos;apprentissage
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-[var(--primary-blue)] mb-8">
              Comparatif des fonctionnalites
            </h3>
            <ComparisonTable rows={comparisonRows} />
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à commencer votre voyage d&apos;apprentissage ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté d&apos;apprenants et découvrez une nouvelle
              facon d&apos;apprendre ensemble.
            </p>
            <Link href="https://learn-sup.vercel.app/">
              <motion.button
                className="bg-white text-[var(--primary-blue)] py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S&apos;inscrire maintenant
                <FiArrowRight className="ml-3 inline-block text-xl animate-bounce-horizontal" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product;
