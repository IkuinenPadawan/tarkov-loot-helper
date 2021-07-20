import React from 'react'

const LevelPicker = () => {
  const level = '0'

  function handleLevelChange() {
    return 0
  }

  const buildOptions = () => {
    var arr = [];

    for (let i = 1; i <= 20; i++) {
      arr.push(<option key={i} value="{i}">{i}</option>)
    }

      return arr; 
  }

  return (
    <div>
      <label for='cars'>Choose a level:</label>
      <select name='level' id='cars'>
        {buildOptions()}
      </select>
    </div>
  );
}

export default LevelPicker
