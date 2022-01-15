import React from 'react';

const SearchBar = ({ handleSearch, value, searchResults }) => {
  const handleChange = (val) => {
    console.log('SearchBar val' + val);
    handleSearch(val);
  };
  return (
    <div className='search'>
      <label>Search</label>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
      <div className='dropdown'>
        {value !== ''
          ? searchResults.map((item, key) => {
              return (
                <div
                  className='dropdown-item'
                  onClick={() => handleChange(item.name)}
                >
                  {item.name}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default SearchBar;
