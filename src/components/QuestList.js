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

  console.log(quests);

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
    <div className='quests-container'>
      <div className='quest-giver'>
        <h4>Prapor</h4>
        <img src='img/Prapor.jpg' alt='Prapor'></img>
        <QuestPicker quests={prapor} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Therapist</h4>
        <img src='img/Therapist.jpg' alt='Therapist'></img>
        <QuestPicker quests={therapist} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Fence</h4>
        <img src='img/Fence.png' alt='Fence'></img>
        <QuestPicker quests={fence} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Skier</h4>
        <img src='img/Skier.jpg' alt='Skier'></img>
        <QuestPicker quests={skier} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Peacekeeper</h4>
        <img src='img/Peacekeeper.jpg' alt='Peacekeeper'></img>
        <QuestPicker quests={peacekeeper} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Mechanic</h4>
        <img src='img/Mechanic.jpg' alt='Mechanic'></img>
        <QuestPicker quests={mechanic} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Ragman</h4>
        <img src='img/Ragman.jpg' alt='Ragman'></img>
        <QuestPicker quests={ragman} checkQuests={checkQuests} />
      </div>
      <div className='quest-giver'>
        <h4>Jaeger</h4>
        <img src='img/Jaeger.jpg' alt='Jaeger'></img>
        <QuestPicker quests={jaeger} checkQuests={checkQuests} />
      </div>
    </div>
  );
};

export default QuestList;
