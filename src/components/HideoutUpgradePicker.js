import React from 'react';

const HideoutUpgradePicker = ({ upgrades }) => {
  return (
    <div>
      <ul className='quest-list'>
        {upgrades.map((module) => (
          <li>
            <div className='quest-list-item'>
              <input
                type='checkbox'
                id={module.id}
                name={module.moduleName}
                value={module.moduleName}
                checked={module.completed ? true : false}
              />
              <label htmlFor={module.moduleName}>
                {module.moduleName} - 'level1'{' '}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HideoutUpgradePicker;
