import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import LevelPicker from './components/LevelPicker'
import QuestPicker from './components/QuestPicker'

function App() {
  const [quests, setQuests] = useState([
    {
      id: 1,
      questName: 'Debut',
      questGiver: 'Prapor',
      completed: false,
    },
    {
      id: 2,
      questName: 'Shortage',
      questGiver: 'Therapist',
      completed: false,
    },
    {
      id: 3,
      questName: 'Acquintance',
      questGiver: 'Jaeger',
      completed: false,
    },
    {
      id: 4,
      questName: 'Sanitary Standards pt1',
      questGiver: 'Therapist',
      completed: false,
    },
    {
      id: 5,
      questName: 'Supplier',
      questGiver: 'Skier',
      completed: false,
    },
    {
      id: 6,
      questName: 'Ice Cream Cones',
      questGiver: 'Prapor',
      completed: false,
    },
    {
      id: 7,
      questName: 'What\'s on the flash drive?',
      questGiver: 'Skier',
      completed: false,
    },
  ]);
   const [items, setItems] = useState([
     {
       name: 'Salewa',
       quest: 2,
       img: 'img/Salewa.png',
     },
     {
       name: 'Mp-133',
       quest: 1,
       img: 'img/Mp133.png',
     },
     {
       name: 'Iskra Lunchbox',
       quest: 3,
       img: 'img/Lunchbox.png',
     },
     {
       name: 'Emelya Rye Croutons',
       quest: 3,
       img: 'img/Emelya_Croutons.png',
     },
     {
       name: 'Can of Delicious Beef Stew',
       quest: 3,
       img: 'img/Can_of_beef_stew.png',
     },
     {
       name: 'Gas Analyzer',
       quest: 4,
       img: 'img/Gas_Analyzer.png',
     },
     {
       name: 'Module-3M bodyarmor',
       quest: 5,
       img: 'img/3M_icon.png',
     },
     {
       name: 'TOZ-106 bolt-action shotgun',
       quest: 5,
       img: 'img/Toz.png',
     },
     {
       name: '60-round 6L31 5.45x39 magazine for AK-74 and compatibles',
       quest: 6,
       img: 'img/6L31-60-mag_icon.png',
     },
     {
       name: 'Flash Drive',
       quest: 7,
       img: 'img/Secure_Flash_drive_Icon.png',
     },
   ]);

   const checkQuests = (id) => {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    )
   }

   const getIncompleteQuests = () => {
     const activeQuests = []
     quests.forEach(el => {
       if(!el.completed) {
         activeQuests.push(el.id)
       }
     })
     return activeQuests
   }

  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} />
      <QuestPicker quests={quests} checkQuests={checkQuests}/>
      <ItemList items={items} activeQuests={getIncompleteQuests()} />
    </div>
  );
}

export default App
