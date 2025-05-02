import React from "react";
import { SectionProps, LinkProps } from "@/lib/types";
import {
  DATA_COLLECTION,
  DATA_PURPOSES,
  DATA_SHARING,
  USER_RIGHTS,
  CONTACT_EMAIL,
  WEBSITE_URL,
} from "@/lib/data/privacy";

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-[var(--tertiary-blue)] mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-[var(--primary-blue)] underline hover:text-[var(--secondary-blue)] transition-colors duration-300"
  >
    {children}
  </a>
);

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5]">
      <div className="py-20">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--primary-blue)] mb-6">
            CONFIDENTIALITÉS
          </h1>

          <Section title="Qui sommes-nous ?">
            <p className="text-gray-700">
              L&apos;adresse de notre site web est :{" "}
              <Link href={WEBSITE_URL}>{WEBSITE_URL}</Link>
            </p>
          </Section>

          <Section title="Données collectées">
            <p className="text-gray-700 mb-4">
              Lorsque vous visitez notre landing page, nous pouvons collecter
              les données suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {DATA_COLLECTION.map((item, index) => (
                <li key={index}>
                  <strong>{item.title} :</strong> {item.description}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              Nous ne collectons pas de données sensibles (état de santé,
              religion, etc.).
            </p>
          </Section>

          <Section title="Finalités de l'utilisation des données">
            <p className="text-gray-700">
              Les informations collectées sur notre site sont utilisées
              uniquement pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              {DATA_PURPOSES.map((purpose, index) => (
                <li key={index}>{purpose}</li>
              ))}
            </ul>
          </Section>

          <Section title="Partage des données">
            <p className="text-gray-700">
              Vos données personnelles ne sont pas vendues, louées ou partagées
              avec des tiers, sauf dans les cas suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              {DATA_SHARING.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Protection des données">
            <p className="text-gray-700">
              Nous mettons en place des mesures techniques et organisationnelles
              pour protéger vos données contre tout accès non autorisé, perte,
              destruction ou divulgation. Toutefois, aucune transmission de
              données sur Internet n&apos;est totalement sécurisée.
            </p>
          </Section>

          <Section title="Vos droits">
            <p className="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {USER_RIGHTS.map((right, index) => (
                <li key={index}>
                  <strong>{right.title} :</strong> {right.description}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, veuillez nous contacter à :{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
            </p>
          </Section>

          <Section title="Informations de contact">
            <p className="text-gray-700">
              Le délégué à la protection des données est : MyDigitalSchool Paris
            </p>
            <p className="text-gray-700 mt-2">
              Si vous souhaitez exercer votre droit à la modification, à la
              consultation, ou à la suppression de vos données personnelles,
              merci de le faire par mail à l&apos;adresse :{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
