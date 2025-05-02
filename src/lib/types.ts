// privacy page
export interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

// FAQ page
export interface FAQItem {
  question: string;
  answer: string;
}

// Contact page
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}
