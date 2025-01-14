import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      category: "À propos",
      items: [
        { label: "Équipe", href: "/team" },
        { label: "Mission", href: "/mission" },
        { label: "Approche", href: "/approach" },
        { label: "Directive de la marque", href: "/brand-guidelines" },
        { label: "Nous Contacter", href: "/contact" },
      ],
    },
    {
      category: "Notre produit",
      items: [{ label: "Découvrir le produit", href: "/product" }],
    },
    {
      category: "Aide & support",
      items: [{ label: "FAQ", href: "/helpCenter" }],
    },
    {
      category: "Conditions d'utilisation et Confidentialité",
      items: [
        {
          label: "Règles de conduite de la communication",
          href: "/communication-rules",
        },
        { label: "Conditions d'utilisation", href: "/terms-of-use" },
        { label: "Mentions légales", href: "/legal-notice" },
        { label: "Politique de confidentialité", href: "/privacy-policy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaTiktok />, href: "https://tiktok.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaXTwitter />, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-gray-100 py-8 mt-8 ">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {links.map((section) => (
          <motion.div
            key={section.category}
            whileHover={{ scale: 1.05 }}
            className="mb-6 lg:mb-0"
          >
            <h3 className="text-lg font-bold mb-2 text-center lg:text-left">
              {section.category}
            </h3>
            <ul className="space-y-2 text-center lg:text-left">
              {section.items.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-2 text-center lg:text-left">
            Suivez-nous
          </h3>
          <motion.ul
            className="flex justify-center lg:justify-start space-x-4"
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
                  className="text-gray-600 text-2xl hover:text-gray-900 transition-colors"
                >
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <LanguageSelector />
        </div>
      </motion.div>

      <motion.hr
        className="w-3/4 mx-auto border-gray-300 my-4 lg:my-6"
        initial={{ width: "0%" }}
        animate={{ width: "75%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.p
        className="text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        © {currentYear} learnSup. Tous droits réservés.
      </motion.p>
    </footer>
  );
};

export default Footer;
