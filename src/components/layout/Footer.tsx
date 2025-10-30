import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { BookOpen, Info, Headphones, Scale } from "lucide-react";
import Link from "next/link";
import { FooterProps } from "@/lib/types";

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      category: "Services",
      icon: <BookOpen />,
      items: [
        { label: "Découvrir nos services", href: "/product" },
        { label: "Tarifs", href: "/pricing" },
        { label: "Pour les écoles", href: "/learnsup-for-school" },
      ],
    },
    {
      category: "LearnSup",
      icon: <Info />,
      items: [
        { label: "À propos", href: "/about" },
        { label: "Notre vision", href: "/learnsup?section=vision" },
      ],
    },
    {
      category: "Support",
      icon: <Headphones />,
      items: [
        { label: "Support", href: "/support" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      category: "Légal",
      icon: <Scale />,
      items: [
        { label: "Politique de confidentialité", href: "/privacy" },
        { label: "Mentions légales", href: "/legal-notice" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTiktok />, href: "https://tiktok.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,var(--primary-orange)_0%,var(--primary-orange-dark)_100%)] py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
      <div className="absolute inset-x-0 top-px h-px bg-black/10" />
      
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-8 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {links.map((section) => (
            <motion.div
              key={section.category}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <h3 className="text-lg font-bold text-white drop-shadow-sm flex items-center mb-3 tracking-wide">
                <span className="mr-2 text-lg">{section.icon}</span>
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white/95 hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded px-1"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 lg:mt-0">
          <h3 className="text-base font-bold text-white drop-shadow-sm mb-3 tracking-wide">Suivez-nous</h3>
          <motion.ul
            className="flex space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.12, rotate: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white text-xl hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-6"></div>
        </div>
      </motion.div>

      <motion.hr
        className="w-3/4 mx-auto border-white/30 my-4"
        initial={{ width: "0%" }}
        animate={{ width: "75%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.p
        className="text-center text-white/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        © {currentYear} LearnSup. Tous droits réservés.
      </motion.p>
    </footer>
  );
};

export default Footer;
