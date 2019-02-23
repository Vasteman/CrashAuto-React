import React from "react";

import "./option.css";

const Option = ({ name, visability, onOptionClick }) => {
  return (
    <div
      className={`option option-${visability}`}
      onClick={() => onOptionClick(name)}
    >
      {name}
    </div>
  );
};

export default Option;
