import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search articles..."
        className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 border-2 border-transparent bg-gradient-to-r from-pink-100 to-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white transition-all duration-300 placeholder-gray-400 shadow-md"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;