import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import ItemList from './components/ItemList'
import LevelPicker from './components/LevelPicker'
import QuestPicker from './components/QuestPicker'

function App() {
  const [level, setLevel] = useState(1)
  const [quests, setQuests] = useState([
    {
      id: 1,
      questName: 'Debut',
      questGiver: 'Prapor',
      completed: false,
      level: 1,
    },
    {
      id: 2,
      questName: 'Shortage',
      questGiver: 'Therapist',
      completed: false,
      level: 1,
    },
    {
      id: 3,
      questName: 'Acquintance',
      questGiver: 'Jaeger',
      completed: false,
      level: 1,
    },
    {
      id: 4,
      questName: 'Sanitary Standards pt1',
      questGiver: 'Therapist',
      completed: false,
      level: 4,
    },
    {
      id: 5,
      questName: 'Supplier',
      questGiver: 'Skier',
      completed: false,
      level: 5,
    },
    {
      id: 6,
      questName: 'Ice Cream Cones',
      questGiver: 'Prapor',
      completed: false,
      level: 9,
    },
    {
      id: 7,
      questName: "What's on the flash drive?",
      questGiver: 'Skier',
      completed: false,
      level: 8,
    },
    {
      id: 8,
      questName: "Sanitary Standards pt2",
      questGiver: 'Therapist',
      completed: false,
      level: 8,
    },
    {
      id: 9,
      questName: "Painkiller",
      questGiver: 'Therapist',
      completed: false,
      level: 8,
    },
    {
      id: 10,
      questName: "Car Repair",
      questGiver: 'Therapist',
      completed: false,
      level: 10,
    },
  ]);
   const [items, setItems] = useState([
     {
       name: 'Salewa',
       quest: 2,
       img: 'img/Salewa.png',
       amount: 3,
     },
     {
       name: 'Mp-133',
       quest: 1,
       img: 'img/Mp133.png',
       amount: 1,
     },
     {
       name: 'Iskra Lunchbox',
       quest: 3,
       img: 'img/Lunchbox.png',
       amount: 3,
     },
     {
       name: 'Emelya Rye Croutons',
       quest: 3,
       img: 'img/Emelya_Croutons.png',
       amount: 2,
     },
     {
       name: 'Can of Delicious Beef Stew',
       quest: 3,
       img: 'img/Can_of_beef_stew.png',
       amount: 2,
     },
     {
       name: 'Gas Analyzer',
       quest: 4,
       img: 'img/Gas_Analyzer.png',
       amount: 1,
     },
     {
       name: 'Module-3M bodyarmor',
       quest: 5,
       img: 'img/3M_icon.png',
       amount: 1,
     },
     {
       name: 'TOZ-106 bolt-action shotgun',
       quest: 5,
       img: 'img/Toz.png',
       amount: 1,
     },
     {
       name: '60-round 6L31 5.45x39 magazine for AK-74 and compatibles',
       quest: 6,
       img: 'img/6L31-60-mag_icon.png',
       amount: 3,
     },
     {
       name: 'Flash Drive',
       quest: 7,
       img: 'img/Secure_Flash_drive_Icon.png',
       amount: 5,
     },
     {
       name: 'Morphine',
       quest: 9,
       img: 'img/Morphine.png',
       amount: 4,
     },
     {
       name: 'Car Battery',
       quest: 10,
       img: 'img/CarBatt.png',
       amount: 4,
     },
     {
       name: 'Spark Plug',
       quest: 10,
       img: 'img/Sparkplug.png',
       amount: 8,
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

   const handleLevelChange = (level) => {
     setLevel(level)
   }

  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} handleLevelChange={handleLevelChange} />
      <QuestPicker quests={quests} checkQuests={checkQuests} />
      <ItemList items={items} activeQuests={getIncompleteQuests()} level={level} />
    </div>
  );
}

export default App
