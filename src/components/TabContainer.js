import React, { useState } from 'react';
import UpgradeList from './UpgradeList';
import Tab from './Tab';

const TabContainer = ({ upgrades, checkUpgrades }) => {
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
      <Tab
        id={1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 1'}
      />
      <Tab
        id={2}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 2'}
      />
      <Tab
        id={3}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 3'}
      />
      {/* <div
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
      </div> */}
    </div>
  );
};

export default TabContainer;
