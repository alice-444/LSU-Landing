import React from "react";
import LegalHero from "@/components/legal/LegalHero";
import LegalSection from "@/components/legal/LegalSection";
import LegalLink from "@/components/legal/LegalLink";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ADDRESS,
  SIRET,
  RESPONSIBILITIES,
} from "@/lib/data/legal-notice";

const LegalMentions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <LegalHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <LegalSection title="Informations générales">
          <p className="text-gray-700 leading-relaxed text-lg">
            Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin
            2004 pour la confiance dans l&apos;économie numérique, il est
            précisé aux utilisateurs de notre site web LearnSup (&laquo; le Site
            &raquo;) l&apos;identité des différents intervenants dans le cadre
            de sa réalisation et de son suivi.
          </p>
        </LegalSection>

        <LegalSection title="Éditeur du site">
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            <li>
              <strong>Nom de l&apos;éditeur :</strong> MyDigitalSchool Paris
            </li>
            <li>
              <strong>Adresse :</strong> {ADDRESS}
            </li>
            <li>
              <strong>E-mail :</strong>{" "}
              <LegalLink href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </LegalLink>
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
        </LegalSection>

        <LegalSection title="Hébergeur">
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
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
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p className="text-gray-700 leading-relaxed text-lg">
            Tous les contenus présents sur le Site (textes, images, graphiques,
            logos, icônes, etc.) sont la propriété exclusive de LearnSup, sauf
            mention contraire. Toute reproduction, distribution, modification,
            adaptation, retransmission ou publication, même partielle, de ces
            différents éléments est strictement interdite sans l&apos;accord
            préalable écrit de LearnSup.
          </p>
        </LegalSection>

        <LegalSection title="Responsabilités">
          <ul className="list-disc pl-6 text-gray-700 space-y-3 text-lg">
            {RESPONSIBILITIES.map((item, index) => (
              <li key={index}>
                <strong>{item.title} :</strong> {item.description}
              </li>
            ))}
          </ul>
        </LegalSection>

        <LegalSection title="Données personnelles">
          <p className="text-gray-700 leading-relaxed text-lg">
            Pour toute information concernant le traitement de vos données
            personnelles, nous vous invitons à consulter nos{" "}
            <LegalLink href="/privacy">politique de confidentialité</LegalLink>.
          </p>
        </LegalSection>
      </section>
    </div>
  );
};

export default LegalMentions;
