import Image from "next/image";

const System: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="relative z-10">
            <Image
              src="/enjoy.png"
              alt="Unique system"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="relative z-10">
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

      <div className="absolute bg-[#34B162] w-[650px] h-[650px] rounded-full top-1/4 right-0 transform translate-x-1/2"></div>
      <div className="absolute bg-[#019D3B] w-[400px] h-[400px] rounded-full top-1/2 right-10 transform translate-x-1/4"></div>
    </div>
  );
};

export default System;
