import React from 'react'

const QuestPicker = ({ quests }) => {
  return (
    <div>
      <h4>Quests completed</h4>
      <div>
        {quests.map((quest) => (
          <div>
            <input
              type='checkbox'
              id={quest.questName}
              name={quest.questName}
              value={quest.questName}
            />
            <label htmlFor={quest.questName}> {quest.questName} </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestPicker
