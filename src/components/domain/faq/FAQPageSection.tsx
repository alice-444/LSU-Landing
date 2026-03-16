import React from "react";
import { ChevronRight } from "lucide-react";
import CategoryFilter from "@/components/ui/CategoryFilter";
import FAQItem from "@/components/ui/FAQItem";
import { FAQ } from "@/lib/data/faq";
import Link from "next/link";

interface FAQPageSectionProps {
  faqs: FAQ[];
  categories: string[];
  selectedCategory: string;
  openFAQ: number | null;
  onCategoryChange: (category: string) => void;
  onFAQToggle: (index: number) => void;
}

const FAQPageSection: React.FC<FAQPageSectionProps> = ({
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
              className="mt-4 text-(--brand-orange) hover:text-(--brand-orange-dark) font-bold underline"
            >
              Voir toutes les questions
            </button>
          </div>
        )}

        <div className="mt-12 text-center p-8 bg-linear-to-r from-(--purple)/10 to-(--purple-dark)/10 rounded-3xl border-2 border-(--purple)/20">
          <div className="text-4xl mb-4">🤔</div>
          <h3 className="text-2xl font-bold mb-2">Encore des questions ?</h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour t'aider ! Contacte-nous et on te répond
            super vite 💬
          </p>
          <Link href="/contact">
            <button className="bg-linear-to-r from-(--purple) to-(--purple-dark) text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all font-bold inline-flex items-center gap-2 group">
              Contacter le Support
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPageSection;
