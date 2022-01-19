import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ handleSearch, value, searchResults }) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', dropToggle);
    return () => {
      document.removeEventListener('mousedown', dropToggle);
    };
  });

  const handleChange = (val) => {
    handleSearch(val);
  };

  const handleClick = (val) => {
    handleSearch(val);
    setVisible(false);
  };

  const dropToggle = (e) => {
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
      <label>Search</label>
      <input
        value={value}
        onClick={() => setVisible(true)}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className='dropdown' ref={wrapperRef}>
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
