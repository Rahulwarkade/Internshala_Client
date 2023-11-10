'use client'
import React, { useRef } from 'react';

function SearchComponent() {
  const searchRef = useRef(null);

  const focusSearch = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <div className="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
      <button className="focus:outline-none" onClick={focusSearch}>
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        ref={searchRef}
        type="text"
        placeholder="Describe your issue"
        className="text-base w-full bg-transparent focus:outline-none"
      />
    </div>
  );
}

export default SearchComponent;
