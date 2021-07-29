import React  from 'react'


const Item = ( {name, img, amount} ) => {
  return (
    <li className='item'>
      <p className='item-name'>{name}</p>
      <div className='item-data'>
        <p className='amount'>x{amount}</p>
        <img src={img} alt='' />
      </div>
    </li>
  );
}

export default Item
