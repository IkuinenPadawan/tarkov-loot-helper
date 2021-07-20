import { React, useState } from 'react'


const Item = () => {
  const [items, setItems] = useState([
    {
      name: 'salewa',
      img: 'img/Salewa.png',
    },
  ]);
  return (
    <div>
      {items.map((item) => (
        <div>
          <img src={item.img} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Item
