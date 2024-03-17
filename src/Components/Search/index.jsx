import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const Search = ({ handleSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  console.log('search');
  useEffect(() => {
    const searchText = searchParams.get("search") ?? "";
    setSearchValue(searchText);
  }, []);

  const onSearchValueChange = (e) => {
    const searchText = e.currentTarget.value;
    
    handleSearchChange(searchText ?? '');
    setSearchValue(searchText);
    if(searchText) {
      setSearchParams({search: searchText});
    } else {
      setSearchParams("");
    }
  };

  return (
    <input 
      onChange={onSearchValueChange}
      value={searchValue}
      type="text" 
      placeholder="Search a Product" 
      className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
    />
  );
};

Search.propTypes = {
  handleSearchChange: PropTypes.func.isRequired
};

export default Search;
