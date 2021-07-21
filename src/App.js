import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestPicker from './components/QuestPicker';

function App() {
   const [items, setItems] = useState([
     {
       name: 'Salewa',
       img: 'img/Salewa.png',
     },
     {
       name: 'Mp-133',
       img: 'img/Mp133.png',
     },
     {
       name: 'Iskra Lunchbox',
       img: 'img/Lunchbox.png',
     },
     {
       name: 'Emelya Rye Croutons',
       img: 'img/Emelya_Croutons.png',
     },
     {
       name: 'Can of Delicious Beef Stew',
       img: 'img/Can_of_beef_stew.png',
     },
     {
       name: 'Gas Analyzer',
       img: 'img/Gas_Analyzer.png',
     },
   ]);
  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} />
      <QuestPicker />
      <ItemList items={items}/>
    </div>
  );
}

export default App;
