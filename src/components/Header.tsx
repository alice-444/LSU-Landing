const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      <div className="text-left max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          Apprenez et progressez en vous entraidant
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          La première plateforme d'entraide et de réseautage seulement pour les
          étudiants
        </p>
        <button className="bg-gray-800 text-white py-3 px-6 rounded shadow-lg hover:bg-gray-900">
          Inscrivez-vous
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="/studentWorking.jpg"
          alt="Students Working"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
