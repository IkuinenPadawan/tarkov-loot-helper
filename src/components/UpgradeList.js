import React from 'react';
import HideoutUpgradePicker from './HideoutUpgradePicker';

const UpgradeList = ({ upgrades, checkUpgrades }) => {
  console.log(upgrades);

  return (
    <div>
      <h4>Level 1 Hideout upgrades completed</h4>
      <HideoutUpgradePicker upgrades={upgrades} checkUpgrades={checkUpgrades} />
    </div>
  );
};

export default UpgradeList;
