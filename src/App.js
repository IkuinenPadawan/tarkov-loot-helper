import { useState, useEffect } from 'react';

import './App.css';
import './styles/style.scss';
import Header from './components/Header';
import ItemList from './components/ItemList';
import LevelPicker from './components/LevelPicker';
import QuestList from './components/QuestList';
import UpgradeList from './components/UpgradeList';
import SearchBar from './components/SearchBar';
import data from './data/data.json';
import TabContainer from './components/TabContainer';

function App() {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState(data.items);
  const [quests, setQuests] = useState(data.quests);
  const [hideoutModules, setHideoutModules] = useState(data.upgrades);
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [levelShown, setLevelShown] = useState(1);

  // Fetch quests from local storage if exists
  useEffect(() => {
    const json = localStorage.getItem('quests');
    const savedQuests = JSON.parse(json);
    const hideoutJson = localStorage.getItem('upgrades');
    const savedUpgrades = JSON.parse(hideoutJson);
    if (savedQuests) {
      setQuests(savedQuests);
    }
    if (savedUpgrades) {
      setHideoutModules(savedUpgrades);
    }
    console.log('Fetch from storage');
  }, []);

  // Save quests to local storage when quests modified
  useEffect(() => {
    const json = JSON.stringify(quests);
    const hideoutJson = JSON.stringify(hideoutModules);
    localStorage.setItem('quests', json);
    localStorage.setItem('upgrades', hideoutJson);
    console.log('Saved to storage');
  }, [quests, hideoutModules]);

  // Handle user clicking quests complete
  const checkQuests = (id) => {
    let data = [];
    data.push(...quests);
    const newData = data.map((quest) =>
      quest.id === id ? { ...quest, completed: !quest.completed } : quest
    );
    setQuests(newData);
  };

  // Handle user clicking hideout upgrades complete
  const checkUpgrades = (id) => {
    let data = [];
    data.push(...hideoutModules);
    const newData = data.map((module) => {
      let obj = { ...module };
      if (module.id === id) {
        obj.moduleLevels.levelOne.completed =
          !obj.moduleLevels.levelOne.completed;
      }
      return obj;
    });
    setHideoutModules(newData);
  };

  const handleLevelChange = (level) => {
    setLevel(level);
  };

  const handleSearch = (val) => {
    setSearchWord(val, doFilter(val));
  };

  const doFilter = (val) => {
    if (searchWord !== '') {
      const filteredItems = items.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(val.toLowerCase());
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
      <TabContainer levelShown={levelShown} setLevelShown={setLevelShown} />
      <UpgradeList
        levelShown={levelShown}
        upgrades={hideoutModules}
        checkUpgrades={checkUpgrades}
      />
      <SearchBar
        value={searchWord}
        handleSearch={handleSearch}
        items={items}
        searchResults={searchResults}
      />
      <ItemList
        items={searchWord.length < 1 ? items : searchResults}
        activeQuests={quests}
        hideoutModules={hideoutModules}
        level={level}
        searchWord={searchWord}
      />
    </div>
  );
}

export default App;
