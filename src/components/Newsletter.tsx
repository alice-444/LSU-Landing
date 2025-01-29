import Image from "next/image";
import { motion } from "framer-motion";
import NewsletterForm from "@/components/NewsletterForm";

const Newsletter: React.FC = () => {
  return (
    <motion.section
      className="py-20 px-8 bg-gradient-to-r from-[#fff5f0] via-[#ffefe6] to-[#fff5f0] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-[#FF5722] leading-snug mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Recevez des mises à jour, des ressources et des opportunités en
            avant-première en vous inscrivant à notre newsletter.
          </p>
          <NewsletterForm />
        </motion.div>

        <motion.div
          className="relative lg:w-1/2 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute bg-gradient-to-tr from-pink-300 to-orange-400 w-96 h-96 rounded-full blur-3xl opacity-40 -top-16 -left-10"></div>
          <Image
            src="/Sending.png"
            alt="Newsletter Illustration"
            width={400}
            height={400}
            className="object-contain z-10"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Newsletter;
