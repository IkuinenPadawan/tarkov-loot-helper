import React, { useState } from 'react';

const Search = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className='search'>
      <label>Search</label>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
