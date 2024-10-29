import React from 'react';

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-colors duration-200 ${
        isActive
          ? 'bg-coral-600 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {category}
    </button>
  );
};

export default FilterButton;