import { ReactNode } from "react";
import { FieldErrors, RegisterOptions } from "react-hook-form";

import { UseFormRegister } from "react-hook-form";

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

export interface FormFieldProps {
  label: string;
  id: keyof ContactFormData;
  type?: string;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  placeholder: string;
  validation?: RegisterOptions<ContactFormData, keyof ContactFormData>;
  isTextarea?: boolean;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

// Footer
export interface FooterProps {
  setActiveSection?: (section: Section) => void;
}

// LearnSup page
export type Section = "mission" | "approche" | "équipe" | "contact";

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export interface SectionContentProps {
  activeSection: Section;
}

// Product page
export interface KeyPointProps {
  icon: ReactNode;
  label: string;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export interface ComparisonRow {
  label: string;
  lsu: boolean;
  sp: boolean;
  tr: boolean;
}

export interface ComparisonTableProps {
  rows: ComparisonRow[];
}
