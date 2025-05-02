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
