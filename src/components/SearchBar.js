import React, { useState, useEffect, useRef } from 'react';

import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleSearch, value, searchResults }) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleChange = (val) => {
    handleSearch(val);
  };

  const handleSelect = (val) => {
    handleSearch(val);
    setVisible(false);
  };

  const handleClickOutside = (e) => {
    if (
      wrapperRef.current &&
      visible &&
      !wrapperRef.current.contains(e.target)
    ) {
      setVisible(false);
    }
  };

  return (
    <div className='search'>
      <div className='searchbar'>
        <FaSearch />
        <input
          value={value}
          onClick={() => setVisible(true)}
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search items...'
        />
      </div>
      <div className='dropdown' ref={wrapperRef}>
        {value !== '' && visible
          ? searchResults.map((item, key) => {
              return (
                <div
                  className='dropdown-item'
                  onClick={() => handleSelect(item.name)}
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
