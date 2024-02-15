import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
