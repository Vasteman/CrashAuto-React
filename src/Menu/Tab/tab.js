import React from "react";

const Tab = ({ label, onMenuBtnClick }) => {
  const { id, icon = null, text = null } = label;
  return (
    <div onClick={() => onMenuBtnClick(id)}>
      <img src={icon} />
      {text}
    </div>
  );
};

export default Tab;
