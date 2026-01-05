import React from "react";
import PricingCard from "./PricingCard";
import { PricingPlan } from "@/lib/data/pricing";

interface PricingCardsSectionProps {
  plans: PricingPlan[];
  billingPeriod: "monthly" | "annual";
}

const PricingCardsSection: React.FC<PricingCardsSectionProps> = ({
  plans,
  billingPeriod,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            billingPeriod={billingPeriod}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingCardsSection;
