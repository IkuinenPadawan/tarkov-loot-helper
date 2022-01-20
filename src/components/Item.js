import React from 'react';

const Item = ({ name, img, relatedQuests, relatedUpgrades }) => {
  return (
    <li className='item'>
      <p className='item-name'>{name}</p>
      <div className='item-data'>
        <img src={img} alt='' />
      </div>
      {relatedQuests.length < 1 ? '' : <h4>Quests</h4>}
      {relatedQuests.map((quest) =>
        quest.completed ? (
          ''
        ) : (
          <div className='item-quest-list'>
            <p>{quest.questGiver}</p>
            <p>{quest.questName}</p>
            <p>x{quest.amount}</p>
          </div>
        )
      )}
      {relatedUpgrades.length < 1 ? '' : <h4>Hideout upgrades</h4>}
      {relatedUpgrades.map((upgrade) =>
        upgrade.completed ? (
          ''
        ) : (
          <div className='item-quest-list'>
            <p>{upgrade.moduleName}</p>
            <p>x{upgrade.amount}</p>
          </div>
        )
      )}
    </li>
  );
};

export default Item;
