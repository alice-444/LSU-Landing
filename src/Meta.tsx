import Head from "next/head";

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  favicon?: string;
};

const Meta: React.FC<MetaProps> = ({
  title = "learnSup",
  description = "This is a description of my app.",
  keywords = "student learning, collaborative learning, knowledge sharing, study resources, academic support",
  favicon = "/logo_blanc.svg"
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Meta;
