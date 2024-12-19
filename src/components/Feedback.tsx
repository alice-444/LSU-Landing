import Image from "next/image";

const Feedback: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          Des étudiants engagés et satisfaits
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Nous sommes six étudiants déterminés à révolutionner l’entraide entre
          étudiants de l’enseignement supérieur. Notre plateforme offre un
          espace unique où chacun peut apprendre, réviser ou transmettre ses
          connaissances dans un esprit collaboratif. Pas de professeurs, juste
          des étudiants qui se soutiennent et grandissent ensemble.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/feedback.png"
              alt="Caroline Tuesday"
              className="rounded-lg"
              layout="responsive"
              width={150}
              height={50}
            />
          </div>

          <div className="relative">
            <Image
              src="/feedback1.png"
              alt="Quentin Léonard"
              className="rounded-lg"
              layout="responsive"
              width={50}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
