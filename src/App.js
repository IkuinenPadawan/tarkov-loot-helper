import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestPicker from './components/QuestPicker';

function App() {
   const [items, setItems] = useState([
     {
       name: 'salewa',
       img: 'img/Salewa.png',
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
