import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SiOpentofu } from "react-icons/si";
import { TbDirectionArrows } from "react-icons/tb";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Découvrir les cours", href: "/", icon: <SiOpentofu /> },
    {
      name: "Je veux enseigner",
      href: "/",
      icon: <PiChalkboardTeacherLight />,
    },
    { name: "Comment ça marche ?", href: "/", icon: <TbDirectionArrows /> },
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
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const underlineEffect = {
    rest: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/50 backdrop-blur-sm"
      } rounded-full transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-2xl font-bold text-gray-800 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/logo.png" width={200} height={350} alt="logo" />
        </motion.a>

        <ul className="hidden lg:flex space-x-8 text-lg font-medium text-gray-800">
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
                  className="text-xl text-gray-600"
                  variants={linkHoverEffect}
                >
                  {link.icon}
                </motion.span>
              )}
              <motion.a
                href={link.href}
                className="ml-2 text-gray-700 group-hover:text-orange-500 transition-colors duration-300"
                variants={linkHoverEffect}
              >
                {link.name}
              </motion.a>
              <motion.div
                className="absolute bottom-[-2px] left-0 h-[2px] bg-orange-500 origin-left"
                style={{ width: "100%" }}
                variants={underlineEffect}
              />
            </motion.li>
          ))}
        </ul>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex"
        >
          <button className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 text-lg">
            Rejoignez-nous
          </button>
        </motion.div>

        <motion.div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl text-gray-800" />
          ) : (
            <AiOutlineMenu className="text-2xl text-gray-800" />
          )}
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed top-20 left-4 right-4 bg-white/90 backdrop-blur-md text-gray-800 shadow-lg rounded-2xl px-6 py-6 lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="space-y-6 text-lg font-medium">
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
                    className="text-xl text-gray-600"
                    variants={linkHoverEffect}
                  >
                    {link.icon}
                  </motion.span>
                )}
                <motion.a
                  href={link.href}
                  className="ml-2 text-gray-700 group-hover:text-orange-500 transition-colors duration-300"
                  variants={linkHoverEffect}
                >
                  {link.name}
                </motion.a>
                <motion.div
                  className="absolute bottom-[-2px] left-0 h-[2px] bg-orange-500 origin-left"
                  style={{ width: "100%" }}
                  variants={underlineEffect}
                />
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-6 w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(false)}
          >
            Rejoignez-nous
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
