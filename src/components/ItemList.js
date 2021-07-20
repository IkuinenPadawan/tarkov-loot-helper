import React from 'react'
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item name={item.name} img={item.img} />
      ))}
    </div>
  );
}

export default ItemList
