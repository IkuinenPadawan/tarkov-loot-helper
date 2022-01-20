import React from 'react';

const Item = ({ name, img, relatedQuests, relatedUpgrades }) => {
  return (
    <li className='item'>
      <p className='item-name'>{name}</p>
      <div className='item-data'>
        <img src={img} alt='' />
      </div>
      <ul className='related-quests-upgrades'>
        {relatedQuests.length < 1 ? '' : <h4>Quests</h4>}
        {relatedQuests.map((quest) =>
          quest.completed ? (
            ''
          ) : (
            <li className='related-list'>
              <p>{quest.questGiver}</p>
              <p>{quest.questName}</p>
              <p>x{quest.amount}</p>
            </li>
          )
        )}
        {relatedUpgrades.length < 1 ? '' : <h4>Hideout upgrades</h4>}
        {relatedUpgrades.map((upgrade) =>
          upgrade.completed ? (
            ''
          ) : (
            <li className='related-list'>
              <p>{upgrade.moduleName}</p>
              <p>x{upgrade.amount}</p>
            </li>
          )
        )}
      </ul>
    </li>
  );
};

export default Item;
