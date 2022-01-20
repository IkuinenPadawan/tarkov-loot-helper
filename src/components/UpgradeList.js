import React from 'react';
import HideoutUpgradePicker from './HideoutUpgradePicker';

const UpgradeList = ({ upgrades, checkUpgrades }) => {
  return (
    <div className='upgrades-list'>
      <h4>Level 1 Hideout upgrades completed</h4>
      <HideoutUpgradePicker upgrades={upgrades} checkUpgrades={checkUpgrades} />
    </div>
  );
};

export default UpgradeList;
