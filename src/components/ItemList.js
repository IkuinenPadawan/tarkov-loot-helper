import React from 'react';
import Item from './Item';

const ItemList = ({ items, activeQuests, hideoutModules }) => {
  const questItems = [];
  for (let quests of activeQuests) {
    if (!quests.completed) {
      for (let item of quests.items) {
        questItems.push(item);
      }
    }
  }

  for (let upgrade of hideoutModules) {
    if (!upgrade.moduleLevels.levelOne.completed) {
      for (let item of upgrade.moduleLevels.levelOne.items) {
        questItems.push(item);
      }
    }
    if (upgrade.moduleLevels['levelTwo']) {
      if (!upgrade.moduleLevels.levelTwo.completed) {
        for (let item of upgrade.moduleLevels.levelTwo.items) {
          questItems.push(item);
        }
      }
    }
    if (upgrade.moduleLevels['levelThree']) {
      if (!upgrade.moduleLevels.levelThree.completed) {
        for (let item of upgrade.moduleLevels.levelThree.items) {
          questItems.push(item);
        }
      }
    }
  }

  const itemNeeded = (el) => {
    for (let item of questItems) {
      if (item.id === el.id) {
        return true;
      }
    }
    return false;
  };

  const getRelatedQuests = (el) => {
    const questList = [];
    for (let quests of activeQuests) {
      for (let item of quests.items) {
        if (el.id === item.id) {
          const quest = {
            questName: quests.questName,
            questGiver: quests.questGiver,
            amount: item.amount,
            completed: quests.completed,
          };
          questList.push(quest);
        }
      }
    }
    return questList;
  };

  const getRelatedUpgrades = (el) => {
    const upgradeList = [];
    for (let upgrade of hideoutModules) {
      for (let item of upgrade.moduleLevels.levelOne.items) {
        if (el.id === item.id) {
          const upgrades = {
            moduleName: upgrade.moduleName,
            amount: item.amount,
            completed: upgrade.moduleLevels.levelOne.completed,
            level: 'Level 1',
          };
          upgradeList.push(upgrades);
        }
      }
      if (upgrade.moduleLevels['levelTwo']) {
        for (let item of upgrade.moduleLevels.levelTwo.items) {
          if (el.id === item.id) {
            const upgrades = {
              moduleName: upgrade.moduleName,
              amount: item.amount,
              completed: upgrade.moduleLevels.levelTwo.completed,
              level: 'Level 2',
            };
            upgradeList.push(upgrades);
          }
        }
      }
      if (upgrade.moduleLevels['levelThree']) {
        for (let item of upgrade.moduleLevels.levelThree.items) {
          if (el.id === item.id) {
            const upgrades = {
              moduleName: upgrade.moduleName,
              amount: item.amount,
              completed: upgrade.moduleLevels.levelThree.completed,
              level: 'Level 3',
            };
            upgradeList.push(upgrades);
          }
        }
      }
    }
    return upgradeList;
  };

  return (
    <div>
      <ul className='item-list'>
        {items.map((item) => {
          return itemNeeded(item) ? (
            <Item
              key={item.id}
              name={item.name}
              img={item.img}
              relatedQuests={getRelatedQuests(item)}
              relatedUpgrades={getRelatedUpgrades(item)}
            />
          ) : (
            ''
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
