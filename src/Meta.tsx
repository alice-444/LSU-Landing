import Head from "next/head";

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  favicon?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
};

const SITE_NAME = "LearnSup";
const BASE_URL = "https://www.learnsup.fr";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const Meta: React.FC<MetaProps> = ({
  title = "LearnSup — Réussis tes études avec des ateliers entre étudiants",
  description = "LearnSup est la plateforme collaborative qui connecte les étudiants pour apprendre ensemble grâce à des ateliers, du tutorat et de l'entraide. Gratuit pour commencer.",
  keywords = "entraide étudiante, ateliers étudiants, tutorat, apprentissage collaboratif, révisions, plateforme étudiante, LearnSup",
  favicon = "/logo/icon-bg.png",
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl = BASE_URL,
  noIndex = false,
}) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return (
    <Head>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content="#FFB647" />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="fr_FR" />


      {/* Favicon */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href="/logo/icon-bg.png" />
    </Head>
  );
};

export default Meta;
