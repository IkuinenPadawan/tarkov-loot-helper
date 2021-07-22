import React from 'react'

const LevelPicker = ({ levels, handleLevelChange }) => {
  const level = '0'

  const handleChange = (e) => {
    handleLevelChange(e.target.value)
  }

  const buildOptions = () => {
    var arr = [];
    console.log(levels)

    for (let i = 1; i <= levels; i++) {
      arr.push(<option key={i} value={i}>{i}</option>)
    }
      return arr; 
  }

  return (
    <div>
      <label htmlFor='cars'>Choose a level:</label>
      <select name='level' id='cars' onChange={handleChange}>
        {buildOptions()}
      </select>
    </div>
  );
}

export default LevelPicker
