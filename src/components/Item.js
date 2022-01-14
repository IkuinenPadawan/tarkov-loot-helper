import React from 'react';

const Item = ({ name, img, relatedQuests }) => {
  console.log(relatedQuests);
  return (
    <li className='item'>
      <p className='item-name'>{name}</p>
      <div className='item-data'>
        <img src={img} alt='' />
      </div>
      <h4>Quests</h4>
      {relatedQuests.map((quest) => (
        <div>
          <p>{quest.questName}</p>
          <p>{quest.questGiver}</p>
          <p>{quest.amount}</p>
          <p></p>
          <p></p>
        </div>
      ))}
    </li>
  );
};

export default Item;
