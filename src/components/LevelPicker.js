import React from 'react'

const LevelPicker = ({ levels }) => {
  const level = '0'

  function handleLevelChange() {
    return 0
  }

  const buildOptions = () => {
    var arr = [];
    console.log(levels)

    for (let i = 1; i <= levels; i++) {
      arr.push(<option key={i} value="{i}">{i}</option>)
    }

      return arr; 
  }

  return (
    <div>
      <label htmlFor='cars'>Choose a level:</label>
      <select name='level' id='cars'>
        {buildOptions()}
      </select>
    </div>
  );
}

export default LevelPicker
