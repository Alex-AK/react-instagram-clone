import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder={'search'}
      value={props.searchInput}
      onChange={props.handleSearch}
      name="searchInput"
    />
  );
};

// search component does not receive props

export default SearchBar;
