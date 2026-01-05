import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BrainCircuit, BadgeEuro } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: ReactNode;
}

const NAV_LINKS: NavLink[] = [
  { name: "Services", href: "/services", icon: <BrainCircuit /> },
  { name: "Tarifs", href: "/pricing", icon: <BadgeEuro /> },
  {
    name: "Ecoles",
    href: "/school",
    icon: <PiChalkboardTeacherDuotone />,
  },
];

const CTA_BUTTON = {
  href: "https://learn-sup.vercel.app/",
  text: "Rejoins-nous",
  colors: "from-[#FFB647] to-[#FF9500]",
} as const;

const SCROLL_THRESHOLD = 20;
const LOGO_CONFIG = {
  src: "/logo/logo.png",
  width: 180,
  height: 315,
  alt: "logo",
  className: "w-48 sm:w-48 md:w-48 h-auto",
} as const;

const linkHoverEffect: Variants = {
  rest: { x: 0, opacity: 1 },
  hover: {
    x: 5,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  },
};

const underlineEffect: Variants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

interface NavLinkItemProps {
  link: NavLink;
  isMobile?: boolean;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  link,
  isMobile = false,
}) => {
  const iconSize = isMobile ? "text-xl sm:text-lg" : "text-xl md:text-xl";
  const textSize = isMobile ? "text-xl sm:text-xl" : "text-base md:text-lg";

  return (
    <motion.li
      className={`relative flex items-center cursor-pointer group ${
        isMobile ? "" : "space-x-6 md:space-x-6"
      }`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {link.icon && (
        <motion.span
          className={`${iconSize} text-gray-600 group-hover:text-[var(--primary-blue)] transition-colors duration-300`}
          variants={linkHoverEffect}
        >
          {link.icon}
        </motion.span>
      )}
      <motion.a
        href={link.href}
        className={`ml-2 md:ml-2 text-gray-700 group-hover:text-[var(--primary-blue)] transition-colors duration-300 ${textSize} font-medium`}
        variants={linkHoverEffect}
      >
        {link.name}
      </motion.a>
      <motion.div
        className="absolute bottom-[-2px] left-0 h-[2px] bg-linear-to-r from-[var(--primary-blue)] to-[var(--secondary-blue)] origin-left"
        style={{ width: "100%" }}
        variants={underlineEffect}
      />
    </motion.li>
  );
};

interface CTAButtonProps {
  isMobile?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ isMobile = false, onClick }) => {
  const baseClasses = `bg-linear-to-r ${CTA_BUTTON.colors} text-white rounded-full shadow-md hover:shadow-lg transition duration-300`;
  const desktopClasses = "px-4 sm:px-6 py-2 sm:py-2 text-base sm:text-lg";
  const mobileClasses =
    "w-full px-4 sm:px-5 py-2 sm:py-2 text-lg sm:text-xl font-medium hover:opacity-90 shadow-lg hover:shadow-xl mt-4 sm:mt-6";

  return (
    <motion.div
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      whileTap={{ scale: isMobile ? 0.98 : 0.95 }}
      transition={{ duration: 0.3 }}
      className={isMobile ? "w-full" : "hidden lg:flex"}
    >
      <Link href={CTA_BUTTON.href}>
        <button
          className={`${baseClasses} ${
            isMobile ? mobileClasses : desktopClasses
          }`}
          onClick={onClick}
        >
          {CTA_BUTTON.text}
        </button>
      </Link>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            src={LOGO_CONFIG.src}
            width={LOGO_CONFIG.width}
            height={LOGO_CONFIG.height}
            alt={LOGO_CONFIG.alt}
            className={LOGO_CONFIG.className}
          />
        </motion.a>

        <ul className="hidden lg:flex space-x-6 md:space-x-6 text-base md:text-lg font-medium text-gray-800">
          {NAV_LINKS.map((link) => (
            <NavLinkItem key={link.name} link={link} />
          ))}
        </ul>

        <CTAButton />

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
          <ul className="space-y-6 sm:space-y-6">
            {NAV_LINKS.map((link) => (
              <NavLinkItem key={link.name} link={link} isMobile />
            ))}
          </ul>
          <CTAButton isMobile onClick={() => setIsOpen(false)} />
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
