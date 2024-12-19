import Image from "next/image";

const System: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-green-500 -skew-y-3 transform origin-bottom-left rounded-tr-[8rem] z-0"></div>
          <div className="relative z-10 flex justify-center">
            <Image
              src="/enjoy.png"
              alt="Unique system"
              className="rounded-lg shadow-lg"
              width={500}
              height={350}
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#019D3B] mb-6">
            Un système d’entraide unique !
          </h2>
          <p className="text-lg text-black mb-6">
            Sur notre plateforme, tout est basé sur l’échange. Un étudiant qui
            maîtrise un sujet peut guider un autre étudiant souhaitant
            approfondir ses connaissances. Vous choisissez ensemble le format
            qui vous convient : une explication détaillée, une mise en pratique
            ou simplement une discussion pour éclaircir des points précis.
          </p>
          <p className="text-lg text-black">
            Pas de hiérarchie, juste une collaboration entre pairs pour
            progresser efficacement et atteindre vos objectifs communs. Vous
            apprenez, vous partagez, vous grandissez ensemble.
          </p>
        </div>
      </div>
    </div>
  );
};

export default System;
