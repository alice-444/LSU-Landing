import { useState } from "react";
import Newsletter from "@/components/newsletter/Newsletter";
import CTA from "@/components/CTA";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCardsSection from "@/components/pricing/PricingCardsSection";
import FAQSection from "@/components/pricing/FAQSection";
import { pricingPlans, faqs, faqCategories } from "@/lib/data/pricing";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tout");

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <PricingHero
        billingPeriod={billingPeriod}
        onBillingPeriodChange={setBillingPeriod}
      />
      <PricingCardsSection plans={pricingPlans} billingPeriod={billingPeriod} />
      <FAQSection
        faqs={faqs}
        categories={faqCategories}
        selectedCategory={selectedCategory}
        openFAQ={openFAQ}
        onCategoryChange={setSelectedCategory}
        onFAQToggle={handleFAQToggle}
      />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default PricingPage;
