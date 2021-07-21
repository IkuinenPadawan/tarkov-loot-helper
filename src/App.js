import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestPicker from './components/QuestPicker';

function App() {
  const [quests, setQuests] = useState([
    {
      questName: 'Debut',
      completed: 'false'
    },
    {
      questName: 'Shortage',
      completed: 'false'
    },
    {
      questName: 'Acquintance',
      completed: 'false'
    },
    {
      questName: 'Sanitary Standards pt1',
      completed: 'false'
    },
  ])
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
  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} />
      <QuestPicker quests={quests}/>
      <ItemList items={items}/>
    </div>
  );
}

export default App;
