import React from "react";
import PrivacyHero from "@/components/legal/PrivacyHero";
import LegalSection from "@/components/legal/LegalSection";
import LegalLink from "@/components/legal/LegalLink";
import {
  DATA_COLLECTION,
  DATA_PURPOSES,
  DATA_SHARING,
  USER_RIGHTS,
  CONTACT_EMAIL,
  WEBSITE_URL,
} from "@/lib/data/privacy";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PrivacyHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <LegalSection title="Qui sommes-nous ?">
          <p className="text-gray-700 leading-relaxed text-lg">
            L&apos;adresse de notre site web est :{" "}
            <LegalLink href={WEBSITE_URL}>{WEBSITE_URL}</LegalLink>
          </p>
        </LegalSection>

        <LegalSection title="Données collectées">
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Lorsque vous visitez notre landing page, nous pouvons collecter les
            données suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            {DATA_COLLECTION.map((item, index) => (
              <li key={index}>
                <strong>{item.title} :</strong> {item.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Nous ne collectons pas de données sensibles (état de santé,
            religion, etc.).
          </p>
        </LegalSection>

        <LegalSection title="Finalités de l'utilisation des données">
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Les informations collectées sur notre site sont utilisées uniquement
            pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            {DATA_PURPOSES.map((purpose, index) => (
              <li key={index}>{purpose}</li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection title="Partage des données">
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Vos données personnelles ne sont pas vendues, louées ou partagées
            avec des tiers, sauf dans les cas suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            {DATA_SHARING.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection title="Protection des données">
          <p className="text-gray-700 leading-relaxed text-lg">
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre tout accès non autorisé, perte,
            destruction ou divulgation. Toutefois, aucune transmission de
            données sur Internet n&apos;est totalement sécurisée.
          </p>
        </LegalSection>

        <LegalSection title="Vos droits">
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            {USER_RIGHTS.map((right, index) => (
              <li key={index}>
                <strong>{right.title} :</strong> {right.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Pour exercer ces droits, veuillez nous contacter à :{" "}
            <LegalLink href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </LegalLink>
          </p>
        </LegalSection>

        <LegalSection title="Informations de contact">
          <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            Le délégué à la protection des données est : MyDigitalSchool Paris
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Si vous souhaitez exercer votre droit à la modification, à la
            consultation, ou à la suppression de vos données personnelles, merci
            de le faire par mail à l&apos;adresse :{" "}
            <LegalLink href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </LegalLink>
          </p>
        </LegalSection>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
