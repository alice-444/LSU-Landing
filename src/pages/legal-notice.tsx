import React from "react";
import { SectionProps, LinkProps } from "@/lib/types";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ADDRESS,
  SIRET,
  RESPONSIBILITIES,
} from "@/lib/data/legal-notice";

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

const LegalMentions: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffaf5] via-white to-[#fffaf5]">
      <div className="py-20">
        <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[var(--primary-blue)] mb-6">
            MENTIONS LÉGALES
          </h1>

          <Section title="Informations générales">
            <p className="text-gray-700">
              Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l&apos;économie numérique, il est précisé aux
              utilisateurs de notre site web LearnSup (&laquo; le Site &raquo;) l&apos;identité
              des différents intervenants dans le cadre de sa réalisation et de
              son suivi.
            </p>
          </Section>

          <Section title="Éditeur du site">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Nom de l&apos;éditeur :</strong> MyDigitalSchool Paris
              </li>
              <li>
                <strong>Adresse :</strong> {ADDRESS}
              </li>
              <li>
                <strong>E-mail :</strong>{" "}
                <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>
              </li>
              <li>
                <strong>Numéro de téléphone :</strong> {CONTACT_PHONE}
              </li>
              <li>
                <strong>Numéro SIRET :</strong> {SIRET}
              </li>
              <li>
                <strong>Directeur de la publication :</strong> LearnSup
              </li>
            </ul>
          </Section>

          <Section title="Hébergeur">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Nom de l&apos;hébergeur :</strong> MyDigitalSchool Paris
              </li>
              <li>
                <strong>Adresse :</strong> {ADDRESS}
              </li>
              <li>
                <strong>Numéro de téléphone :</strong> {CONTACT_PHONE}
              </li>
            </ul>
          </Section>

          <Section title="Propriété intellectuelle">
            <p className="text-gray-700">
              Tous les contenus présents sur le Site (textes, images,
              graphiques, logos, icônes, etc.) sont la propriété exclusive de
              LearnSup, sauf mention contraire. Toute reproduction,
              distribution, modification, adaptation, retransmission ou
              publication, même partielle, de ces différents éléments est
              strictement interdite sans l&apos;accord préalable écrit de LearnSup.
            </p>
          </Section>

          <Section title="Responsabilités">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {RESPONSIBILITIES.map((item, index) => (
                <li key={index}>
                  <strong>{item.title} :</strong> {item.description}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Données personnelles">
            <p className="text-gray-700">
              Pour toute information concernant le traitement de vos données
              personnelles, nous vous invitons à consulter nos{" "}
              <Link href="/privacy">politique de confidentialité</Link>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default LegalMentions;
