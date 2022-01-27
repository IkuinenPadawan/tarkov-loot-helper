import React, { useState } from 'react';
import Tab from './Tab';

const TabContainer = ({ levelShown, setLevelShown }) => {
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
        activeTab={levelShown}
        setActiveTab={setLevelShown}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 1'}
      />
      <Tab
        id={2}
        activeTab={levelShown}
        setActiveTab={setLevelShown}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 2'}
      />
      <Tab
        id={3}
        activeTab={levelShown}
        setActiveTab={setLevelShown}
        activeImage={activeImage}
        defaultImg={defaultImg}
        text={'Level 3'}
      />
    </div>
  );
};

export default TabContainer;
