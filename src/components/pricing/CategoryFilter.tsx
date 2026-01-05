import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
            selectedCategory === category
              ? "bg-linear-to-r from-[#FFB647] to-[#FF9500] text-white shadow-lg scale-105"
              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FFB647] hover:shadow-md"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
