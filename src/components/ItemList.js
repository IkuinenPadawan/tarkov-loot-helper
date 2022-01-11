import React from 'react';
import Item from './Item';

const ItemList = ({ items, activeQuests }) => {
  console.log(activeQuests);
  return (
    <div>
      <ul className='item-list'>
        {items.map((item) => (
          <Item key={item.id} name={item.name} img={item.img} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
