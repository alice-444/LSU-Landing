import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Name
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition duration-300"
              >
                Qui sommes-nous ?
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-white transition duration-300"
              >
                Notre équipe
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Aide</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/faq"
                className="hover:text-white transition duration-300"
              >
                FAQ étudiants
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Légales</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/legal-informations"
                className="hover:text-white transition duration-300"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition duration-300"
              >
                Conditions générales d'utilisation
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition duration-300"
              >
                Politique de protection des données personnelles
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Name Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
