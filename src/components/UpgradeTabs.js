import React, { useState } from 'react';
import UpgradeList from './UpgradeList';

const UpgradeTabs = ({ upgrades, checkUpgrades }) => {
  const [level, setLevel] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const activeImage = {
    backgroundImage: 'url(img/tab_hideout.png)',
  };
  const defaultImg = {
    backgroundImage: 'url(img/tab_hideout.png)',
    filter: 'brightness(50%)',
  };
  return (
    <div className='tab-container'>
      <div
        className='tab'
        style={activeTab === 1 ? activeImage : defaultImg}
        onClick={() => {
          setActiveTab(1);
        }}
      >
        <h3>Level 1</h3>
      </div>
      <div
        className='tab'
        style={activeTab === 2 ? activeImage : defaultImg}
        onClick={() => {
          setActiveTab(2);
        }}
      >
        <h3>Level 2</h3>
      </div>
      <div
        className='tab'
        style={activeTab === 3 ? activeImage : defaultImg}
        onClick={() => {
          setActiveTab(3);
        }}
      >
        <h3>Level 3</h3>
      </div>
      {/* <UpgradeList upgrades={upgrades} checkUpgrades={checkUpgrades} /> */}
    </div>
  );
};

export default UpgradeTabs;
