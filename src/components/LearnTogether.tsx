import Image from "next/image";

const LearnTogether: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#019D3B] mb-6">
            Apprendre ensemble pour aller plus loin
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Trouve le soutien dont tu as besoin pour réussir ! Sur notre
            plateforme, tu peux te connecter à d’autres étudiants prêts à
            partager leurs connaissances et leur expérience. Que ce soit pour
            comprendre une notion complexe, approfondir un sujet ou préparer un
            examen, tu n’es plus seul face à tes défis.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Ensemble, on apprend mieux et plus vite. Laisse-toi guider par ceux
            qui maîtrisent les sujets qui te posent problème et avance
            sereinement vers tes objectifs !
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Partagez votre savoir, gagnez en confiance et enrichissez vos
            propres compétences pédagogiques. Ensemble, créons un réseau où
            l’apprentissage est une aventure collective et stimulante.
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <Image
              src="/Etudiant_Enseignant_carte.png"
              alt="Thibaut Déprez Profile Card"
              className="rounded-lg shadow-lg"
              width={300}
              height={400}
            />
          </div>

          <div className="w-1/2">
            <Image
              src="/Etudiant_Enseignant_carte_1.png"
              alt="Alina Forestier Profile Card"
              className="rounded-lg shadow-lg"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTogether;
