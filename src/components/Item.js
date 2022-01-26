import React from 'react';

const Item = ({ name, img, relatedQuests, relatedUpgrades }) => {
  console.log(relatedUpgrades);
  return (
    <li className='item'>
      <p className='item-name'>{name}</p>
      <div className='item-data'>
        <img src={img} alt='' />
      </div>
      {relatedQuests.length < 1 ? '' : <h4>Quests</h4>}
      <table>
        {relatedQuests.length < 1 ? (
          ''
        ) : (
          <tr>
            <th>Guest giver</th>
            <th>Guest name</th>
            <th>Amount</th>
          </tr>
        )}

        {relatedQuests.map((quest) =>
          quest.completed ? (
            ''
          ) : (
            <tr>
              <td>{quest.questGiver}</td>
              <td>{quest.questName}</td>
              <td>{quest.amount}</td>
            </tr>
          )
        )}
      </table>
      {relatedUpgrades.length < 1 ? '' : <h4>Hideout upgrades</h4>}
      <table>
        {relatedUpgrades.length < 1 ? (
          ''
        ) : (
          <tr>
            <th>Module name</th>
            <th>Module level</th>
            <th>Amount</th>
          </tr>
        )}

        {relatedUpgrades.map((upgrade) =>
          upgrade.completed ? (
            ''
          ) : (
            <tr>
              <td>{upgrade.moduleName}</td>
              <td>{upgrade.level}</td>
              <td>{upgrade.amount}</td>
            </tr>
          )
        )}
      </table>
    </li>
  );
};

export default Item;
