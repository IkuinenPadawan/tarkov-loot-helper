import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestPicker from './components/QuestPicker';

function App() {
  const [quests, setQuests] = useState([
    {
      id: 1,
      questName: 'Debut',
      completed: false,
    },
    {
      id: 2,
      questName: 'Shortage',
      completed: false,
    },
    {
      id: 3,
      questName: 'Acquintance',
      completed: false,
    },
    {
      id: 4,
      questName: 'Sanitary Standards pt1',
      completed: false,
    },
  ]);
   const [items, setItems] = useState([
     {
       name: 'Salewa',
       quest: 'shortage',
       img: 'img/Salewa.png',
     },
     {
       name: 'Mp-133',
       quest: 'debut',
       img: 'img/Mp133.png',
     },
     {
       name: 'Iskra Lunchbox',
       quest: 'acquintance',
       img: 'img/Lunchbox.png',
     },
     {
       name: 'Emelya Rye Croutons',
       quest: 'acquintance',
       img: 'img/Emelya_Croutons.png',
     },
     {
       name: 'Can of Delicious Beef Stew',
       quest: 'acquintance',
       img: 'img/Can_of_beef_stew.png',
     },
     {
       name: 'Gas Analyzer',
       quest: 'sanitaryStandards',
       img: 'img/Gas_Analyzer.png',
     },
   ]);

   const checkQuests = (id) => {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
     console.log(quests)
   }

  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} />
      <QuestPicker quests={quests} checkQuests={checkQuests}/>
      <ItemList items={items}/>
    </div>
  );
}

export default App;
