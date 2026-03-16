import React from "react";

interface LegalLinkProps {
  href: string;
  children: React.ReactNode;
}

const LegalLink: React.FC<LegalLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-[#4A90E2] font-semibold hover:text-[#26547C] underline transition-colors duration-300"
  >
    {children}
  </a>
);

export default LegalLink;
