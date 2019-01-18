import React from 'react';
import styles from 'styled-components';

const SearchBar = props => {
  return (
    <SearchInput
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

const SearchInput = styles.input`
  padding: 6px 50px;
  background: #F9F9F9;
  border: 1px solid lightgrey;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
