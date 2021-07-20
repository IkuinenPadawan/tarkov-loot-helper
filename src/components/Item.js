import { React, useState } from 'react'


const Item = ( {name, img} ) => {
  return (
    <div>
          <img src={img} alt="" />
          <p>{name}</p>
    </div>
  )
}

export default Item
