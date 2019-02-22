import React from 'react';

const Tab = ({ label }) => {
  const { icon = null, text = null } = label;
  return <div><img src={icon} />{text}</div>
}

export default Tab;