import Link from "next/link";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "A PROPOS DE NOUS", href: "#" },
    { name: "DÉCOUVRIR LES COURS", href: "#" },
    { name: "JE VEUX ENSEIGNER", href: "#" },
    { name: "COMMENT ÇA MARCHE ?", href: "#" },
    { name: "NOS ÉTUDIANTS", href: "#" },
  ];

  return (
    <div className="relative z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/logo@300x-100.jpg"
              alt="LearnSup Logo"
              className="w-60 h-23"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-black transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="border border-gray-800 text-gray-800 py-2 px-5 rounded-full hover:bg-gray-800 hover:text-white transition-all">
            Créer mon compte
          </button>
          <div className="relative group">
            <div className="flex items-center gap-1 border border-gray-300 py-2 px-3 rounded-full hover:cursor-pointer">
              <TbWorld />
              <span>FR</span>
              <FaChevronDown className="text-gray-600" />
            </div>
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-lg shadow-lg hidden group-hover:block">
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                FR
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                EN
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center z-40">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-red-500"
          >
            <AiOutlineClose />
          </button>

          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-800 text-lg py-2 hover:text-blue-500 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="border border-gray-800 text-gray-800 py-2 px-5 rounded-full mt-4 hover:bg-gray-800 hover:text-white transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Créer mon compte
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
