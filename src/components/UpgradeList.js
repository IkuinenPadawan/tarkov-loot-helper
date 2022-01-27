import React from 'react';
import HideoutUpgradePicker from './HideoutUpgradePicker';

const UpgradeList = ({ levelShown, upgrades, checkUpgrades }) => {
  return (
    <div className='upgrades-list'>
      <h3>Level {levelShown} Hideout upgrades</h3>
      <HideoutUpgradePicker
        levelShown={levelShown}
        upgrades={upgrades}
        checkUpgrades={checkUpgrades}
      />
    </div>
  );
};

export default UpgradeList;
