import React from 'react';
import UpgradeList from './UpgradeList';

const Tab = ({
  text,
  id,
  activeTab,
  setActiveTab,
  activeImage,
  defaultImg,
}) => {
  return (
    <div
      className='tab'
      style={activeTab === id ? activeImage : defaultImg}
      onClick={() => {
        setActiveTab(id);
      }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default Tab;
