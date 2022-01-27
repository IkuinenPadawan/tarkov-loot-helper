import React, { useState } from 'react';
import UpgradeList from './UpgradeList';

const UpgradeTabs = ({ upgrades, checkUpgrades }) => {
  const [level, setLevel] = useState(1);
  return (
    <div>
      <h3>Level 1</h3>
      <UpgradeList upgrades={upgrades} checkUpgrades={checkUpgrades} />
    </div>
  );
};

export default UpgradeTabs;
