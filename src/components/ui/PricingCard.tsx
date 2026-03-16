import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Check, X, Star, ChevronRight } from "lucide-react";
import { PricingPlan } from "@/lib/data/pricing";

const showComingSoonToast = () =>
  toast("En cours de déploiement — à très bientôt ! 🚀", {
    icon: "🔨",
    duration: 4000,
    style: {
      background: "linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-orange-dark) 100%)",
      color: "#fff",
      fontWeight: 600,
    },
  });

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "annual";
  index: number;
}

interface PriceDisplayProps {
  price: number;
  billingPeriod: "monthly" | "annual";
  annualTotal: number | null;
  savings?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, billingPeriod, annualTotal, savings }) => (
  <>
    <div className="flex items-end gap-2 mb-2">
      <span className="text-6xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {price === 0 ? "0" : price}
      </span>
      <div className="pb-2">
        <span className="text-2xl font-bold text-gray-900">€</span>
        <span className="text-gray-600 text-lg">
          /mois
        </span>
      </div>
    </div>
    {billingPeriod === "annual" && price > 0 && (
      <div className="space-y-1">
        <div className="text-sm text-gray-500">
          Soit{" "}
          <span className="font-bold text-gray-700">
            {annualTotal ? annualTotal.toFixed(2) : ""}€
          </span>{" "}
          par an
        </div>
        {savings && (
          <div className="inline-block bg-linear-to-r from-(--green) to-[#7BC9A6] text-white text-sm px-3 py-1 rounded-full font-bold">
            Économise {savings}
          </div>
        )}
      </div>
    )}
  </>
);

interface LimitationsListProps {
  limitations: string[];
}

const LimitationsList: React.FC<LimitationsListProps> = ({ limitations }) => {
  if (limitations.length === 0) return null;
  return (
    <div className="space-y-3 pt-6 border-t border-gray-200">
      <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">
        ⚠️ Non inclus :
      </div>
      {limitations.map((limitation, limitIndex) => (
        <div key={limitIndex} className="flex items-start gap-3">
          <div className="shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-0.5">
            <X className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-gray-500 text-sm">{limitation}</span>
        </div>
      ))}
    </div>
  );
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingPeriod, index }) => {
  const price = plan.price ? plan.price[billingPeriod] : null;
  const annualTotal = price && billingPeriod === "annual" ? price * 12 : null;

  const wrapperClass = plan.highlight
    ? "md:scale-110 md:-translate-y-4 z-10"
    : index === 0
      ? "md:-rotate-1"
      : "md:rotate-1";

  return (
    <div className={`relative group ${wrapperClass}`}>
      {plan.popular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
          <div
            className={`${plan.badgeColor} text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 animate-bounce`}
          >
            <Star className="w-5 h-5 fill-current" />
            <span>{plan.badgeText}</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
        </div>
      )}

      <div
        className={`relative bg-linear-to-br ${plan.color} rounded-[32px] p-1 shadow-xl hover:shadow-2xl transition-all ${plan.highlight ? "animate-pulse-soft" : ""
          }`}
      >
        <div className="bg-white rounded-[28px] p-8 h-full">
          <div className="flex items-center justify-between mb-6">
            <div
              className={`w-20 h-20 bg-linear-to-br ${plan.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all`}
            >
              <span className="text-4xl">{plan.emoji}</span>
            </div>
            {!plan.popular && plan.badgeText && (
              <div className={`${plan.badgeColor} text-white text-xs px-4 py-2 rounded-full font-bold`}>
                {plan.badgeText}
              </div>
            )}
          </div>

          <h3 className="text-3xl mb-2 font-bold">{plan.name}</h3>
          <p className="text-gray-600 mb-6 min-h-12">{plan.description}</p>

          <div className="mb-6">
            {price !== null ? (
              <PriceDisplay
                price={price}
                billingPeriod={billingPeriod}
                annualTotal={annualTotal}
                savings={plan.savings}
              />
            ) : (
              <div className="text-center py-4">
                <span className="text-3xl font-bold bg-linear-to-r from-(--purple) to-(--purple-dark) bg-clip-text text-transparent">
                  Sur devis
                </span>
              </div>
            )}
          </div>

          {plan.ctaHref.startsWith("http") ? (
            <button
              onClick={showComingSoonToast}
              className={`w-full py-5 rounded-full mb-8 font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${plan.highlight
                  ? `bg-linear-to-r ${plan.color} text-white`
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
            >
              {plan.cta}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <Link href={plan.ctaHref}>
              <button
                className={`w-full py-5 rounded-full mb-8 font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group ${plan.highlight
                    ? `bg-linear-to-r ${plan.color} text-white`
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
              >
                {plan.cta}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          )}

          <div className="space-y-4 mb-6">
            <div className="text-sm font-bold text-gray-900 uppercase tracking-wide">
              ✨ Inclus :
            </div>
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 bg-linear-to-br from-(--green) to-[#7BC9A6] rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <LimitationsList limitations={plan.limitations} />
        </div>
      </div>

      {plan.highlight && (
        <div className="absolute -z-10 inset-0 bg-linear-to-br from-(--brand-orange)/20 to-(--brand-orange-dark)/20 rounded-[32px] blur-xl scale-105"></div>
      )}
    </div>
  );
};

export default PricingCard;
