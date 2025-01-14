import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "DÉCOUVRIR LES COURS", href: "#" },
    { name: "JE VEUX ENSEIGNER", href: "#" },
    { name: "COMMENT ÇA MARCHE ?", href: "#" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <div className="relative z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <motion.img
              src="/logo@300x-100.jpg"
              alt="LearnSup Logo"
              className="w-36 h-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-black transition-all"
              variants={linkVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <motion.button
            className="border border-gray-800 text-gray-800 py-2 px-5 rounded-full hover:bg-gray-800 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Se connecter
          </motion.button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center z-40"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-red-500"
            >
              <AiOutlineClose />
            </button>

            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-800 text-lg py-2 hover:text-blue-500 transition-all"
                onClick={() => setIsMenuOpen(false)}
                variants={linkVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              className="border border-gray-800 text-gray-800 py-2 px-5 rounded-full mt-4 hover:bg-gray-800 hover:text-white transition-all"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
            >
              Créer mon compte
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
