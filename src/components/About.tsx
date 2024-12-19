const About: React.FC = () => {
  return (
    <div className="bg-[#019D3B] text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">A propos de nous</h2>
          <p className="text-lg mb-6">
            Nous sommes six étudiants déterminés à révolutionner l’entraide
            entre étudiants de l’enseignement supérieur. Notre plateforme offre
            un espace unique où chacun peut apprendre, réviser ou transmettre
            ses connaissances dans un esprit collaboratif. Pas de professeurs,
            juste des étudiants qui se soutiennent et grandissent ensemble.
          </p>
          <img
            src="/illustration.png"
            alt="Illustration collaborative"
            className="w-3/4 mx-auto md:hidden"
          />
        </div>

        <div className="relative">
          <img
            src="/illustration.png"
            alt="Students working together"
            className="rounded-lg shadow-lg w-full mb-4"
          />
          <img
            src="/illustrations.png"
            alt="Collaborative illustration"
            className="absolute -bottom-16 -left-8 hidden md:block w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
