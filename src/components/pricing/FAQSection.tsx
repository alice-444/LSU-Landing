import React from "react";
import { ChevronRight } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import FAQItem from "./FAQItem";
import { FAQ } from "@/lib/data/pricing";

interface FAQSectionProps {
  faqs: FAQ[];
  categories: string[];
  selectedCategory: string;
  openFAQ: number | null;
  onCategoryChange: (category: string) => void;
  onFAQToggle: (index: number) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  categories,
  selectedCategory,
  openFAQ,
  onCategoryChange,
  onFAQToggle,
}) => {
  const filteredFAQs = faqs.filter((faq) => {
    if (selectedCategory === "Tout") return true;
    return faq.category === selectedCategory;
  });

  const hasNoResults = filteredFAQs.length === 0 && selectedCategory !== "Tout";

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-linear-to-r from-[#C9A0DC] to-[#A66FD9] text-white px-6 py-3 rounded-full mb-4 font-bold transform hover:scale-105 transition-transform">
            Questions / Réponses 💬
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">FAQ Paiements</h2>
          <p className="text-xl text-gray-600">
            Tout ce que tu dois savoir sur nos tarifs et paiements
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />

        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const originalIndex = faqs.indexOf(faq);
            return (
              <FAQItem
                key={originalIndex}
                faq={faq}
                index={originalIndex}
                isOpen={openFAQ === originalIndex}
                onToggle={() => onFAQToggle(originalIndex)}
              />
            );
          })}
        </div>

        {hasNoResults && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-xl text-gray-600">
              Aucune question dans la catégorie &quot;{selectedCategory}&quot;
            </p>
            <button
              onClick={() => onCategoryChange("Tout")}
              className="mt-4 text-[#FFB647] hover:text-[#FF9500] font-bold underline"
            >
              Voir toutes les questions
            </button>
          </div>
        )}

        <div className="mt-12 text-center p-8 bg-linear-to-r from-[#FFB647]/10 to-[#FF9500]/10 rounded-3xl border-2 border-[#FFB647]/20">
          <div className="text-4xl mb-4">🤔</div>
          <h3 className="text-2xl font-bold mb-2">Encore des questions ?</h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour t'aider ! Contacte-nous et on te répond
            super vite 💬
          </p>
          <button className="bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all font-bold inline-flex items-center gap-2 group">
            Contacter le Support
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
