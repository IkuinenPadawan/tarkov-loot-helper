import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestList from './components/QuestList';
import Search from './components/Search';
import data from './data/data.json';

function App() {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState(data.items);
  const [quests, setQuests] = useState(data.quests);
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState();

  // Fetch quests from local storage if exists
  useEffect(() => {
    const json = localStorage.getItem('quests');
    const savedQuests = JSON.parse(json);
    if (savedQuests) {
      setQuests(savedQuests);
    }
    console.log('Fetch from storage');
  }, []);

  // Save quests to local storage when quests modified
  useEffect(() => {
    const json = JSON.stringify(quests);
    localStorage.setItem('quests', json);
    console.log('Saved to storage');
  }, [quests]);

  // Handle user clicking quests complete
  const checkQuests = (id) => {
    let data = [];
    data.push(...quests);
    const newData = data.map((quest) =>
      quest.id === id ? { ...quest, completed: !quest.completed } : quest
    );
    setQuests(newData);
  };

  const handleLevelChange = (level) => {
    setLevel(level);
  };

  const handleSearch = (val) => {
    setSearchWord(val);
    console.log(val);
    if (searchWord !== '') {
      console.log('IN');
      const filteredItems = items.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      });
      setSearchResults(filteredItems);
    } else {
      setSearchResults(items);
    }
  };

  return (
    <div className='App'>
      <Header title='Tarkov Loot Tool' />
      <LevelPicker levels={20} handleLevelChange={handleLevelChange} />
      <QuestList quests={quests} checkQuests={checkQuests} />
      <Search value={searchWord} handleSearch={handleSearch} />
      <ItemList
        items={searchWord.length < 1 ? items : searchResults}
        activeQuests={quests}
        level={level}
        searchWord={searchWord}
      />
    </div>
  );
}

export default App;
