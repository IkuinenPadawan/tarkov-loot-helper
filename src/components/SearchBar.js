import React, { useState } from 'react';

const SearchBar = ({ handleSearch, value, searchResults }) => {
  const [visible, setVisible] = useState(false);

  const handleChange = (val) => {
    console.log('SearchBar val' + val);
    handleSearch(val);
  };

  const handleClick = (val) => {
    handleSearch(val);
    setVisible(false);
  };
  return (
    <div className='search'>
      <label>Search</label>
      <input
        value={value}
        onClick={() => setVisible(!visible)}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className='dropdown'>
        {value !== '' && visible
          ? searchResults.map((item, key) => {
              return (
                <div
                  className='dropdown-item'
                  onClick={() => handleClick(item.name)}
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
