import React from 'react';

const HideoutUpgradePicker = ({ levelShown, upgrades, checkUpgrades }) => {
  const handleChange = (e) => {
    checkUpgrades(parseInt(e.target.id));
  };
  return (
    <div>
      <ul className='upgrade-list'>
        {upgrades.map((module) => {
          if (levelShown === 1 && module.moduleLevels.levelOne) {
            return (
              <li>
                <div className='list-item checkbox-container'>
                  <input
                    type='checkbox'
                    id={module.id}
                    name={module.moduleName}
                    value={module.moduleName}
                    onChange={handleChange}
                    checked={
                      module.moduleLevels.levelOne.completed ? true : false
                    }
                  />
                  <label htmlFor={module.moduleName}>{module.moduleName}</label>
                </div>
              </li>
            );
          } else if (levelShown === 2 && module.moduleLevels.levelTwo) {
            return (
              <li>
                <div className='list-item checkbox-container'>
                  <input
                    type='checkbox'
                    id={module.id}
                    name={module.moduleName}
                    value={module.moduleName}
                    onChange={handleChange}
                    checked={
                      module.moduleLevels.levelTwo.completed ? true : false
                    }
                  />
                  <label htmlFor={module.moduleName}>{module.moduleName}</label>
                </div>
              </li>
            );
          } else if (levelShown === 3 && module.moduleLevels.levelThree) {
            return (
              <li>
                <div className='list-item checkbox-container'>
                  <input
                    type='checkbox'
                    id={module.id}
                    name={module.moduleName}
                    value={module.moduleName}
                    onChange={handleChange}
                    checked={
                      module.moduleLevels.levelThree.completed ? true : false
                    }
                  />
                  <label htmlFor={module.moduleName}>{module.moduleName}</label>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default HideoutUpgradePicker;
