"use client";

import React, { useState } from "react";
import FAQHero from "@/components/faq/FAQHero";
import FAQPageSection from "@/components/faq/FAQPageSection";
import { faqs, faqCategories } from "@/lib/data/faq";

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <FAQHero />
      <FAQPageSection
        faqs={faqs}
        categories={faqCategories}
        selectedCategory={selectedCategory}
        openFAQ={openFAQ}
        onCategoryChange={setSelectedCategory}
        onFAQToggle={handleFAQToggle}
      />
    </div>
  );
};

export default FAQPage;
