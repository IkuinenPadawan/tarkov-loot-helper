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
      <QuestPicker quests={prapor} checkQuests={checkQuests} />
      <QuestPicker quests={therapist} checkQuests={checkQuests} />
      <QuestPicker quests={fence} checkQuests={checkQuests} />
      <QuestPicker quests={skier} checkQuests={checkQuests} />
      <QuestPicker quests={peacekeeper} checkQuests={checkQuests} />
      <QuestPicker quests={mechanic} checkQuests={checkQuests} />
      <QuestPicker quests={ragman} checkQuests={checkQuests} />
      <QuestPicker quests={jaeger} checkQuests={checkQuests} />
    </div>
  );
};

export default QuestList;
