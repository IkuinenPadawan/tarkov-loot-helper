import React from 'react';

const QuestPicker = ({ quests, checkQuests }) => {
  console.log(quests);
  const handleChange = (e) => {
    checkQuests(parseInt(e.target.id));
  };

  return (
    <div className='quest-picker'>
      <ul className='quest-list'>
        {quests.map((quest) => (
          <li>
            <div className='quest-list-item'>
              <input
                type='checkbox'
                id={quest.id}
                name={quest.questName}
                value={quest.questName}
                onChange={handleChange}
              />
              <label htmlFor={quest.questName}>
                {quest.questName} - {quest.questGiver}{' '}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestPicker;
