import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/data/pricing";

interface FAQItemProps {
  faq: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-linear-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all ${
        isOpen
          ? "border-[#FFB647] shadow-2xl"
          : "border-transparent hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between hover:bg-white/50 transition-colors group"
      >
        <div className="flex items-center gap-4 text-left pr-4">
          <span className="text-3xl shrink-0">{faq.emoji}</span>
          <span className="font-bold text-gray-900 group-hover:text-[#FFB647] transition-colors">
            {faq.question}
          </span>
        </div>
        <div
          className={`shrink-0 w-10 h-10 bg-linear-to-br from-[#FFB647] to-[#FF9500] rounded-full flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pl-20 text-gray-600 leading-relaxed border-t border-gray-100 pt-6 animate-fadeIn">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
