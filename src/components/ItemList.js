import React from 'react';
import Item from './Item';

const ItemList = ({ items, activeQuests }) => {
  const questItems = [];
  for (let quests of activeQuests) {
    if (!quests.completed) {
      for (let item of quests.items) {
        questItems.push(item);
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
