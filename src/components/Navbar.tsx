import { TbWorld } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <img src="/logo@300x-100.jpg" alt="LearnSup Logo" className="w-60 h-23" />
      </div>
      <nav className="flex gap-8 text-sm font-medium">
        <a href="#" className="text-gray-600 hover:text-black">
          A PROPOS DE NOUS
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          DÉCOUVRIR LES COURS
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          JE VEUX ENSEIGNER
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          COMMENT ÇA MARCHE ?
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          NOS ÉTUDIANTS
        </a>
      </nav>
      <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Navbar;
