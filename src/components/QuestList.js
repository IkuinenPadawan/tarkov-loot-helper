import React from 'react'
import QuestPicker from './QuestPicker'

const QuestList = ({ quests, checkQuests }) => {
  return (
    <div>
      <h4>Quests completed</h4>
      <QuestPicker quests={quests} checkQuests={checkQuests} />
    </div>
  );
};

export default QuestList
