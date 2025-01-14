const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#000080] mb-6">
          CONFIDENTIALITÉS
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-700">
            L’adresse de notre site Web est :{" "}
            <a href="https://learnsup.fr/" className="text-blue-500 underline">
              https://learnsup.fr/
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Données collectées
          </h2>
          <p className="text-gray-700 mb-4">
            Lorsque vous visitez notre landing page, nous pouvons collecter les
            données suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Données techniques :</strong> Adresse IP, type de
              navigateur, pages consultées et durée de navigation.
            </li>
            <li>
              <strong>Données communiquées volontairement :</strong> Votre nom,
              prénom, adresse e-mail ou tout autre renseignement soumis via un
              formulaire de contact ou d’inscription.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Nous ne collectons pas de données sensibles (état de santé,
            religion, etc.).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Finalités de l’utilisation des données
          </h2>
          <p className="text-gray-700">
            Les informations collectées sur notre site sont utilisées uniquement
            pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
            <li>Répondre à vos demandes via notre formulaire de contact.</li>
            <li>Vous informer sur le projet et ses actualités.</li>
            <li>
              Améliorer l’expérience utilisateur et analyser la performance du
              site.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Partage des données
          </h2>
          <p className="text-gray-700">
            Vos données personnelles ne sont pas vendues, louées ou partagées
            avec des tiers, sauf dans les cas suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
            <li>Lorsque la loi nous y oblige.</li>
            <li>Pour répondre à une demande légale ou protéger nos droits.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Protection des données
          </h2>
          <p className="text-gray-700">
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre tout accès non autorisé, perte,
            destruction ou divulgation. Toutefois, aucune transmission de
            données sur Internet n’est totalement sécurisée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Vos droits
          </h2>
          <p className="text-gray-700 mb-4">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Droit d’accès :</strong> Consulter les données
              personnelles que nous détenons sur vous.
            </li>
            <li>
              <strong>Droit de rectification :</strong> Demander la correction
              de données inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l’effacement :</strong> Demander la suppression de
              vos données personnelles.
            </li>
            <li>
              <strong>Droit à la limitation :</strong> Restreindre le traitement
              de vos données dans certaines conditions.
            </li>
            <li>
              <strong>Droit d’opposition :</strong> Vous opposer au traitement
              de vos données.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Pour exercer ces droits, veuillez nous contacter à :{" "}
            <a
              href="mailto:contact@maxence-chabot.fr"
              className="text-blue-500 underline"
            >
              contact@maxence-chabot.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#019D3B] mb-4">
            Informations de contact
          </h2>
          <p className="text-gray-700">
            Le délégué à la protection des données est : MyDigitalSchool Paris
          </p>
          <p className="text-gray-700 mt-2">
            Si vous souhaitez exercer votre droit à la modification, à la
            consultation, ou à la suppression de vos données personnelles, merci
            de le faire par mail à l’adresse :{" "}
            <a
              href="mailto:contact@maxence-chabot.fr"
              className="text-blue-500 underline"
            >
              contact@maxence-chabot.fr
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
