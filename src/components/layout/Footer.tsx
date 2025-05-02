import { motion } from "framer-motion";
import LanguageSelector from "../LanguageSelector";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { FooterProps } from "@/lib/types";

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      category: "À propos",
      items: [
        { label: "Mission", href: "/learnsup?section=mission" },
        { label: "Approche", href: "/learnsup?section=approche" },
        { label: "Équipe", href: "/learnsup?section=équipe" },
        { label: "Directive de la marque", href: "/brand-guidelines" },
        { label: "Nous Contacter", href: "/learnsup?section=contact" },
      ],
    },
    {
      category: "Notre produit",
      items: [{ label: "Découvrir le produit", href: "/product" }],
    },
    {
      category: "Aide & Support",
      items: [
        { label: "Centre d'aide", href: "/learnsup?section=contact" },
        { label: "Partenariats", href: "/learnsup?section=contact" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      category: "Conditions d'utilisation et confidentialité",
      items: [
        { label: "Conditions d'utilisation", href: "/" },
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
    <footer className="bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5] py-16">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start lg:space-x-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {links.map((section) => (
            <motion.div
              key={section.category}
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Suivez-nous</h3>
          <motion.ul
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-3xl hover:text-gray-900 transition-colors"
                >
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-6">
            <LanguageSelector />
          </div>
        </div>
      </motion.div>

      <motion.hr
        className="w-3/4 mx-auto border-gray-300 my-8"
        initial={{ width: "0%" }}
        animate={{ width: "75%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <motion.p
        className="text-center text-gray-600 text-sm"
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
