import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="searchBar">
      <input type="text" placeholder="search" />
    </form>
  );
};

// search component does not receive props

export default SearchBar;
