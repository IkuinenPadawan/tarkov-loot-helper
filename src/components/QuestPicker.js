import React from 'react'

const QuestPicker = () => {
  return (
    <div>
      <h4>Quests completed</h4>
      <div>
        <input type='checkbox' id='debut' name='debut' value='Debut' />
        <label htmlFor='debut'> Debut</label>
        <input type='checkbox' id='shortage' name='shortage' value='Shortage' />
        <label htmlFor='shortage'> Shortage</label>
        <input
          type='checkbox'
          id='acquintance'
          name='acquintance'
          value='Acquintance'
        />
        <label htmlFor='Acquintance'> Acquintance</label>
        <input
          type='checkbox'
          id='sanitaryStandards'
          name='sanitaryStandards'
          value='Sanitary Standards'
        />
        <label htmlFor='sanitaryStandards'> Sanitary Standards</label>
      </div>
    </div>
  );
}

export default QuestPicker
