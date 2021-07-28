import React from 'react'
import Item from './Item'

const ItemList = ({ items, activeQuests }) => {
  return (
    <div>
      <ul className='item-list'>
        <li>
          {items.map((item) =>
            activeQuests.includes(item.quest) ? (
              <Item key={item.id} name={item.name} img={item.img} amount={item.amount}/>
            ) : ''
          )}
        </li>
      </ul>
    </div>
  );
}

export default ItemList
