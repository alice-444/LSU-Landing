const LegalMentions: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#000080] mb-6">
          MENTIONS LÉGALES
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Informations générales
          </h2>
          <p className="text-gray-700">
            Conformément à l’article 6 de la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l’économie numérique, il est précisé aux
            utilisateurs de notre landing page LearnSup (« le Site ») l’identité
            des différents intervenants dans le cadre de sa réalisation et de
            son suivi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Éditeur du site
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Nom de l’éditeur :</strong> MyDigitalSchool Paris
            </li>
            <li>
              <strong>Adresse :</strong> 40 Rue du Chemin Vert, Paris, 75011
            </li>
            <li>
              <strong>E-mail :</strong> contact@maxence-chabot.fr
            </li>
            <li>
              <strong>Numéro de téléphone :</strong> 01 55 07 07 65
            </li>
            <li>
              <strong>Numéro SIRET :</strong> 32922456200796
            </li>
            <li>
              <strong>Directeur de la publication :</strong> LearnSup
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Hébergeur
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Nom de l’hébergeur :</strong> MyDigitalSchool Paris
            </li>
            <li>
              <strong>Adresse :</strong> 40 Rue du Chemin Vert, Paris, 75011
            </li>
            <li>
              <strong>Numéro de téléphone :</strong> 01 55 07 07 65
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Propriété intellectuelle
          </h2>
          <p className="text-gray-700">
            Tous les contenus présents sur le Site (textes, images, graphiques,
            logos, icônes, etc.) sont la propriété exclusive de LearnSup, sauf
            mention contraire. Toute reproduction, distribution, modification,
            adaptation, retransmission ou publication, même partielle, de ces
            différents éléments est strictement interdite sans l’accord
            préalable écrit de LearnSup.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Responsabilités
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Contenu du site :</strong> LearnSup s’efforce d’assurer
              l’exactitude des informations diffusées sur le Site. Cependant, il
              ne peut garantir que les informations soient complètes, précises
              ou à jour.
            </li>
            <li>
              <strong>Disponibilité du site :</strong> L’accès au Site est
              normalement disponible 24h/24 et 7j/7, sauf en cas de force
              majeure ou d’événements hors du contrôle de LearnSup. Une
              interruption pour maintenance technique peut également être
              décidée.
            </li>
            <li>
              <strong>Liens externes :</strong> Le Site peut contenir des liens
              vers d’autres sites internet. LearnSup ne peut être tenu
              responsable du contenu de ces sites tiers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Données personnelles
          </h2>
          <p className="text-gray-700">
            Pour toute information concernant le traitement de vos données
            personnelles, nous vous invitons à consulter nos{" "}
            <a href="/privacyPolicy" className="text-blue-500 underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalMentions;
