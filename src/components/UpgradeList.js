import React from 'react';
import HideoutUpgradePicker from './HideoutUpgradePicker';

const UpgradeList = ({ upgrades }) => {
  return (
    <div>
      <h4>Hideout upgrades completed</h4>
      <HideoutUpgradePicker upgrades={upgrades} />
    </div>
  );
};

export default UpgradeList;
