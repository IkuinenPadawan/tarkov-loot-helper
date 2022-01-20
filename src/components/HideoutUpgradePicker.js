import React from 'react';

const HideoutUpgradePicker = ({ upgrades, checkUpgrades }) => {
  console.log(upgrades);
  const handleChange = (e) => {
    checkUpgrades(parseInt(e.target.id));
  };
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
                onChange={handleChange}
                checked={module.moduleLevels.levelOne.completed ? true : false}
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
