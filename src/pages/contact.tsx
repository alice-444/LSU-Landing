import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactInfoSection />
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
};

export default Contact;
