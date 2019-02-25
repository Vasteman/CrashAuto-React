import React from "react";

const Tab = ({ label, onMenuBtnClick }) => {
  const { id = null, icon = null, text = null } = label;
  return (
    <div onClick={() => onMenuBtnClick(id)}>
      <img src={icon} img="" />
      {text}
    </div>
  );
};

export default Tab;
