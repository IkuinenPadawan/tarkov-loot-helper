import React from 'react'

const QuestPicker = ({ quests, checkQuests }) => {
  const handleChange = (e) => {
    console.log(e.target.id);
    checkQuests(parseInt(e.target.id))
  }
  return (
    <div>
      <h4>Quests completed</h4>
      <div>
        {quests.map((quest) => (
          <div>
            <input
              type='checkbox'
              id={quest.id}
              name={quest.questName}
              value={quest.questName}
              onChange={handleChange}
            />
            <label htmlFor={quest.questName}> {quest.questName} </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestPicker
