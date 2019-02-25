import React from "react";
import Option from "./Option";

import "./Options.css";

const Options = ({ options, chosenOptions, onOptionClick }) => {
  const visibleOptions = options.map(option => {
    return (
      <Option
        key={option}
        title={option}
        isChosen={chosenOptions.includes(option)}
        onOptionClick={onOptionClick}
      />
    );
  });

  return <div className="calc-options">{visibleOptions}</div>;
};

export default Options;
