import React from 'react'
import Item from './Item'

const ItemList = ({ items, activeQuests }) => {
  return (
    <div>
      {items.map((item) => (
        activeQuests.includes(item.quest) ? <Item key={item.id} name={item.name} img={item.img} /> : null
      )
      )}
    </div>
  )
}

export default ItemList
