import React from "react";

import "./option.css";

const Option = ({ title, isChosen, onOptionClick }) => {
  return (
    <div
      className={`option option-${isChosen}`}
      onClick={() => onOptionClick(title)}
    >
      {title}
    </div>
  );
};

export default Option;
