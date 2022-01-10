import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestList from './components/QuestList';
import data from './data/data.json';

function App() {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState(data.items);
  const [quests, setQuests] = useState(data.quests);

  const checkQuests = (id) => {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
    test();
  };

  const getIncompleteQuests = () => {
    const activeQuests = [];
    quests.forEach((el) => {
      if (!el.completed) {
        activeQuests.push(el.id);
      }
    });
    return activeQuests;
  };

  const handleLevelChange = (level) => {
    setLevel(level);
  };

  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} handleLevelChange={handleLevelChange} />
      <QuestList quests={quests} checkQuests={checkQuests} />
      <ItemList
        items={items}
        activeQuests={getIncompleteQuests()}
        level={level}
      />
    </div>
  );
}

export default App;
