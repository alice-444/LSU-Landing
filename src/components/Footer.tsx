import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  const navLinks = [
    { title: "A propos de nous", href: "#" },
    { title: "Découvrir les professeurs", href: "#" },
    { title: "Je veux enseigner", href: "#" },
    { title: "Comment ça marche ?", href: "#" },
    { title: "Nos étudiants", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Newsletter", href: "#" },
  ];

  const legalLinks = [
    { title: "Conditions d'utilisation générales", href: "#" },
    { title: "Mentions légales", href: "#" },
    { title: "Politique de confidentialité et gestion des cookies", href: "#" },
  ];

  return (
    <footer className="bg-[#019D3B] text-white py-8">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo-blanc.svg"
                alt="LearnSup Logo"
                className="w-50 h-20"
              />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white text-green-600 p-3 rounded-full shadow hover:bg-gray-200"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-white text-green-600 p-3 rounded-full shadow hover:bg-gray-200"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="bg-white text-green-600 p-3 rounded-full shadow hover:bg-gray-200"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium text-white">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <ul className="space-y-2 text-sm font-medium text-center lg:text-right">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm font-medium text-white">
          COPYRIGHT &copy; {new Date().getFullYear()} - LEARNSUP TOUS DROITS
          RÉSERVÉS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
