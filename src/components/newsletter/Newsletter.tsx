import { motion } from "framer-motion";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5]" />

      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 sm:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left w-full"
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Restez informé avec notre{" "}
                <span className="text-[var(--primary-blue)]">newsletter</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Des infos utiles, des bons plans, et de l&apos;entraide dans ta
                boîte mail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full p-0 sm:p-0 relative overflow-visible"
            >
              <div className="relative">
                <NewsletterForm />
                <p className="text-xs sm:text-sm text-[var(--quaternary-blue)] mt-3 sm:mt-4">
                  En communiquant votre adresse courriel, vous acceptez de
                  recevoir des informations marketing sur le produits de
                  LearnSup par courriel et sur les plateformes des réseaux
                  sociaux. Pour en savoir plus sur la façon dont nous utilisons
                  vos informations personnelles, veuillez consulter notre
                  Politique de confidentialité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full  blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Newsletter;
