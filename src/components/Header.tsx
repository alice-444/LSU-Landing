const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      <div className="text-left max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900 leading-snug">
          Apprenez et progressez en
          <br /> vous entraidant
        </h1>
        <p className="text-gray-600 text-lg mt-6 mb-8">
          La première plateforme d'entraide et de réseautage exclusivement pour
          les étudiants.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Inscrivez-vous →
        </button>
      </div>
      <div className="w-full max-w-md mt-8 md:mt-0 md:ml-12">
        <img
          src="/studentWorking.jpg"
          alt="Students Working"
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Header;
