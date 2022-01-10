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
  // const [quests, setQuests] = useState([
  //   {
  //     id: 1,
  //     questName: 'Debut',
  //     questGiver: 'Prapor',
  //     completed: false,
  //     level: 1,
  //   },
  //   {
  //     id: 2,
  //     questName: 'Shortage',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 1,
  //   },
  //   {
  //     id: 3,
  //     questName: 'Acquintance',
  //     questGiver: 'Jaeger',
  //     completed: false,
  //     level: 1,
  //   },
  //   {
  //     id: 4,
  //     questName: 'Sanitary Standards pt1',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 4,
  //   },
  //   {
  //     id: 5,
  //     questName: 'Supplier',
  //     questGiver: 'Skier',
  //     completed: false,
  //     level: 5,
  //   },
  //   {
  //     id: 6,
  //     questName: 'Ice Cream Cones',
  //     questGiver: 'Prapor',
  //     completed: false,
  //     level: 9,
  //   },
  //   {
  //     id: 7,
  //     questName: "What's on the flash drive?",
  //     questGiver: 'Skier',
  //     completed: false,
  //     level: 8,
  //   },
  //   {
  //     id: 8,
  //     questName: 'Sanitary Standards pt2',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 8,
  //   },
  //   {
  //     id: 9,
  //     questName: 'Painkiller',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 8,
  //   },
  //   {
  //     id: 10,
  //     questName: 'Car Repair',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 10,
  //   },
  //   {
  //     id: 11,
  //     questName: 'General Wares',
  //     questGiver: 'Therapist',
  //     completed: false,
  //     level: 12,
  //   },
  //   {
  //     id: 12,
  //     questName: 'Humanitarian Supplies',
  //     questGiver: 'Peacekeeper',
  //     completed: false,
  //     level: 11,
  //   },
  //   {
  //     id: 13,
  //     questName: 'The Punisher - Part 2',
  //     questGiver: 'Prapov',
  //     completed: false,
  //     level: 17,
  //   },
  //   {
  //     id: 14,
  //     questName: 'Dressed to kill',
  //     questGiver: 'Ragman',
  //     completed: false,
  //     level: 15,
  //   },
  //   {
  //     id: 15,
  //     questName: 'The Punisher - Part 4',
  //     questGiver: 'Prapor',
  //     completed: false,
  //     level: 20,
  //   },
  //   {
  //     id: 16,
  //     questName: 'Friend from the West - Part 1',
  //     questGiver: 'Skier',
  //     completed: false,
  //     level: 9,
  //   },
  //   {
  //     id: 17,
  //     questName: 'Spa Tour - Part 3',
  //     questGiver: 'Skier',
  //     completed: false,
  //     level: 12,
  //   },
  //   {
  //     id: 18,
  //     questName: 'Signal - Part 2',
  //     questGiver: 'Mechanic',
  //     completed: false,
  //     level: 12,
  //   },
  //   {
  //     id: 19,
  //     questName: 'Farming - Part 2',
  //     questGiver: 'Mechanic',
  //     completed: false,
  //     level: 12,
  //   },
  //   {
  //     id: 20,
  //     questName: 'Bad Habit',
  //     questGiver: 'Mechanic',
  //     completed: false,
  //     level: 12,
  //   },
  //   {
  //     id: 21,
  //     questName: 'Farming - Part 4',
  //     questGiver: 'Mechanic',
  //     completed: false,
  //     level: 14,
  //   },
  // ]);
  // const [items, setItems] = useState([
  //   {
  //     name: 'Salewa',
  //     quest: 2,
  //     img: 'img/Salewa.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Mp-133',
  //     quest: 1,
  //     img: 'img/Mp133.png',
  //     amount: 1,
  //   },
  //   {
  //     name: 'Iskra Lunchbox',
  //     quest: 3,
  //     img: 'img/Lunchbox.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Emelya Rye Croutons',
  //     quest: 3,
  //     img: 'img/Emelya_Croutons.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Can of Delicious Beef Stew',
  //     quest: 3,
  //     img: 'img/Can_of_beef_stew.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Gas Analyzer',
  //     quest: 4,
  //     img: 'img/Gas_Analyzer.png',
  //     amount: 1,
  //   },
  //   {
  //     name: 'Module-3M bodyarmor',
  //     quest: 5,
  //     img: 'img/3M_icon.png',
  //     amount: 1,
  //   },
  //   {
  //     name: 'TOZ-106 bolt-action shotgun',
  //     quest: 5,
  //     img: 'img/Toz.png',
  //     amount: 1,
  //   },
  //   {
  //     name: '60-round 6L31 5.45x39 magazine for AK-74 and compatibles',
  //     quest: 6,
  //     img: 'img/6L31-60-mag_icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Flash Drive',
  //     quest: 7,
  //     img: 'img/Secure_Flash_drive_Icon.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'Morphine',
  //     quest: 9,
  //     img: 'img/Morphine.png',
  //     amount: 4,
  //   },
  //   {
  //     name: 'Car Battery',
  //     quest: 10,
  //     img: 'img/CarBatt.png',
  //     amount: 4,
  //   },
  //   {
  //     name: 'Spark Plug',
  //     quest: 10,
  //     img: 'img/Sparkplug.png',
  //     amount: 8,
  //   },
  //   {
  //     name: 'Tushonka- Can of Beef Stew',
  //     quest: 11,
  //     img: 'img/Tushonka.png',
  //     amount: 15,
  //   },
  //   {
  //     name: 'MRE lunch box',
  //     quest: 12,
  //     img: 'img/MRE.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'Lower half-mask',
  //     quest: 13,
  //     img: 'img/lowermask.png',
  //     amount: 7,
  //   },
  //   {
  //     name: 'Ushanka ear-flap cap',
  //     quest: 14,
  //     img: 'img/Ushanka.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Kinda cowboy hat',
  //     quest: 14,
  //     img: 'img/Cowboyhat.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Bars A-2607',
  //     quest: 15,
  //     img: 'img/A-2607_Bars.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'USEC Dogtag',
  //     quest: 16,
  //     img: 'img/USEC_Dogtag_Icon.png',
  //     amount: 7,
  //   },
  //   {
  //     name: 'WD-40 100ml',
  //     quest: 17,
  //     img: 'img/WD40_100ml_Icon.png',
  //     amount: 1,
  //   },
  //   {
  //     name: 'Clin Wipers',
  //     quest: 17,
  //     img: 'img/Clin_Wiper_icon.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Corrugated Hoses',
  //     quest: 17,
  //     img: 'img/Hoseicon.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'Ox bleach',
  //     quest: 17,
  //     img: 'img/Bleachicon.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'PC CPU',
  //     quest: 18,
  //     img: 'img/PC_CPU_Icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Rechargeable Battery',
  //     quest: 18,
  //     img: 'img/Recicon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Printed Circuit Board',
  //     quest: 18,
  //     img: 'img/Circuit_Icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Broken GPhone',
  //     quest: 18,
  //     img: 'img/Broken_GPhone_Icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Powercord',
  //     quest: 19,
  //     img: 'img/Powercord_icon.png',
  //     amount: 2,
  //   },
  //   {
  //     name: 'T-Shaped Plug',
  //     quest: 19,
  //     img: 'img/T-Shaped_Plug_Icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'Malboro Cigarettes',
  //     quest: 20,
  //     img: 'img/Malboro_Cigarettes_Icon.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'Strike Cigarettes',
  //     quest: 20,
  //     img: 'img/Cigred.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'Wilston Cigarettes',
  //     quest: 20,
  //     img: 'img/Wilstonicon.png',
  //     amount: 5,
  //   },
  //   {
  //     name: 'Graphics Card',
  //     quest: 21,
  //     img: 'img/Graphics_Card_icon.png',
  //     amount: 3,
  //   },
  //   {
  //     name: 'CPU Fan',
  //     quest: 21,
  //     img: 'img/CPU_Fan_Icon.png',
  //     amount: 8,
  //   },
  // ]);

  const test = () => {
    let items = [];
    let quests = [];
    items = data.items;
    quests = data.quests;
    console.log(items);
    console.log(quests);
  };

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
