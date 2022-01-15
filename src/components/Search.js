import React from 'react';

const Search = ({ handleSearch, value }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div className='search'>
      <label>Search</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
