import React from 'react';
import QuestPicker from './QuestPicker';

const QuestList = ({ quests, checkQuests }) => {
  const prapor = [];
  const therapist = [];
  const fence = [];
  const skier = [];
  const peacekeeper = [];
  const mechanic = [];
  const ragman = [];
  const jaeger = [];

  for (const quest of quests) {
    switch (quest.questGiver) {
      case 'Prapor':
        prapor.push(quest);
        break;

      case 'Therapist':
        therapist.push(quest);
        break;

      case 'Fence':
        fence.push(quest);
        break;

      case 'Skier':
        skier.push(quest);
        break;

      case 'Peacekeeper':
        peacekeeper.push(quest);
        break;

      case 'Mechanic':
        mechanic.push(quest);
        break;

      case 'Ragman':
        ragman.push(quest);
        break;

      case 'Jaeger':
        jaeger.push(quest);
        break;

      default:
    }
  }

  return (
    <div>
      <h4>Quests completed</h4>
      <QuestPicker quests={quests} checkQuests={checkQuests} />
    </div>
  );
};

export default QuestList;
