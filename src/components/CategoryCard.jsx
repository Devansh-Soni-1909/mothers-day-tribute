import React from 'react';

function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={() => onClick(category)}
      className="bg-gray-800 text-white p-4 rounded-lg cursor-pointer hover:bg-pink-600 transition duration-300 flex items-center justify-center h-24 w-72"
    >
      <span className="text-lg font-medium">{category}</span>
    </div>
  );
}

export default CategoryCard;
