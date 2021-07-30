import React from 'react'
import Item from './Item'

const ItemList = ({ items, activeQuests }) => {
  return (
    <div>
      <ul className='item-list'>
        {items.map((item) =>
          activeQuests.includes(item.quest) ? (
            <Item
              key={item.id}
              name={item.name}
              img={item.img}
              amount={item.amount}
            />
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
}

export default ItemList

