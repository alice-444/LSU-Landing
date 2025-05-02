import { motion } from "framer-motion";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Restez informé avec notre{" "}
                <span className="text-[var(--primary-blue)]">newsletter</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Recevez les dernières actualités directement dans votre boîte de
                réception.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-blue)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--secondary-blue)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <NewsletterForm />
                <p className="text-sm text-gray-500 mt-4">
                  En vous inscrivant, vous acceptez de recevoir des emails de
                  LearnSup. Vous pouvez vous désinscrire à tout moment.
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
