import React from 'react';
import Item from './Item';

const ItemList = ({ items, activeQuests }) => {
  console.log(activeQuests);
  const questItems = [];
  for (let quests of activeQuests) {
    for (let item of quests.items) {
      questItems.push(item);
    }
  }
  // console.log(questItems);

  const test = (el) => {
    for (let item of questItems) {
      if (item.id === el.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <ul className='item-list'>
        {items.map((item) => {
          return test(item) ? (
            <Item key={item.id} name={item.name} img={item.img} />
          ) : (
            ''
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
