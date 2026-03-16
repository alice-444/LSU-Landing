import React from "react";

interface LegalLinkProps {
  href: string;
  children: React.ReactNode;
}

const LegalLink: React.FC<LegalLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-(--primary-blue) font-semibold hover:text-(--blue) underline transition-colors duration-300"
  >
    {children}
  </a>
);

export default LegalLink;
