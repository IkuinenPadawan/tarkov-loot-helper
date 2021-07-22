import React  from 'react'


const Item = ( {name, img, amount} ) => {
  return (
    <div className='item'>
      <p id='amount'>x{amount}</p>
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default Item
