import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <form onSubmit={props.handleSearch}>
      <input
        className="search-bar"
        type="text"
        placeholder={'search'}
        value={props.searchInput}
        onChange={props.handleChange}
        onSubmit={props.handleSearch}
        name="searchInput"
      />
    </form>
  );
};

// search component does not receive props

export default SearchBar;
