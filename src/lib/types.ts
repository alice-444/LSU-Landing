import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";

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

