import React from "react";

const Tab = ({ label, onMenuBtnClick, isActive }) => {
  const { id = null, icon = null, text = null } = label;
  return (
    <div className={`btn-calc-${isActive}`} onClick={() => onMenuBtnClick(id)}>
      <img src={icon} />
      {text}
    </div>
  );
};

export default Tab;
