import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SiOpentofu } from "react-icons/si";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose, AiFillProduct } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Découvrir Learnsup", href: "/", icon: <SiOpentofu /> },
    {
      name: "Produit",
      href: "/product",
      icon: <SiOpentofu />,
    },
    {
      name: "Tarifs",
      href: "/pricing",
      icon: <AiFillProduct />,
    },
    {
      name: "Learnsup pour les écoles",
      href: "/school",
      icon: <PiChalkboardTeacherDuotone />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkHoverEffect = {
    rest: { x: 0, opacity: 1 },
    hover: {
      x: 5,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const underlineEffect = {
    rest: { scaleX: 0, opacity: 0 },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-md shadow-xl"
          : "bg-white/30 backdrop-blur-md"
      } rounded-full transition-all duration-500 border border-white/20`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 flex justify-between items-center">
        <motion.a
          href="/"
          className="text-2xl sm:text-2xl text-gray-800 flex items-center space-x-2 sm:space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/logo/logo.png"
            width={180}
            height={315}
            alt="logo"
            className="w-48 sm:w-48 md:w-48 h-auto"
          />
        </motion.a>

        <ul className="hidden lg:flex space-x-6 md:space-x-6 text-base md:text-lg font-medium text-gray-800">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              className="relative flex items-center cursor-pointer group"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {link.icon && (
                <motion.span
                  className="text-xl md:text-xl text-gray-600 group-hover:text-[var(--primary-blue)] transition-colors duration-300"
                  variants={linkHoverEffect}
                >
                  {link.icon}
                </motion.span>
              )}
              <motion.a
                href={link.href}
                className="ml-2 md:ml-2 text-gray-700 group-hover:text-[var(--primary-blue)] transition-colors duration-300"
                variants={linkHoverEffect}
              >
                {link.name}
              </motion.a>
              <motion.div
                className="absolute bottom-[-2px] left-0 h-[2px] bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] origin-left"
                style={{ width: "100%" }}
                variants={underlineEffect}
              />
            </motion.li>
          ))}
        </ul>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex"
        >
          <Link href="https://learn-sup.vercel.app/">
            <button className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-4 sm:px-6 py-2 sm:py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 text-base sm:text-lg">
              Rejoignez-nous
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="lg:hidden cursor-pointer p-2 sm:p-2 rounded-lg hover:bg-gray-100/50 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl sm:text-2xl text-gray-800" />
          ) : (
            <AiOutlineMenu className="text-2xl sm:text-2xl text-gray-800" />
          )}
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed top-16 sm:top-20 left-2 sm:left-4 right-2 sm:right-4 bg-white/95 backdrop-blur-xl text-gray-800 shadow-xl rounded-2xl px-4 sm:px-6 py-4 sm:py-6 lg:hidden border border-white/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="space-y-6 sm:space-y-6 text-xl sm:text-xl">
            {links.map((link) => (
              <motion.li
                key={link.name}
                className="flex items-center cursor-pointer group relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {link.icon && (
                  <motion.span
                    className="text-xl sm:text-lg text-gray-600 group-hover:text-[var(--primary-blue)] transition-colors duration-300"
                    variants={linkHoverEffect}
                  >
                    {link.icon}
                  </motion.span>
                )}
                <motion.a
                  href={link.href}
                  className="ml-2 sm:ml-2 text-gray-700 group-hover:text-[var(--primary-blue)] transition-colors duration-300"
                  variants={linkHoverEffect}
                >
                  {link.name}
                </motion.a>
                <motion.div
                  className="absolute bottom-[-2px] left-0 h-[2px] bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] origin-left"
                  style={{ width: "100%" }}
                  variants={underlineEffect}
                />
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] text-white px-4 sm:px-5 py-2 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg sm:text-xl font-medium hover:opacity-90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(false)}
          >
            <Link href="https://learn-sup.vercel.app/">Rejoignez-nous</Link>
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
