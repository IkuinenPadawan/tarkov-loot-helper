import React from 'react';
import HideoutUpgradePicker from './HideoutUpgradePicker';

const UpgradeList = ({ upgrades, checkUpgrades }) => {
  return (
    <div className='upgrades-list'>
      <h3>Level 1 Hideout upgrades</h3>
      <HideoutUpgradePicker upgrades={upgrades} checkUpgrades={checkUpgrades} />
    </div>
  );
};

export default UpgradeList;
