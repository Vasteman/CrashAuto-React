import React, { Component } from "react";
import Menu from "../../Menu/menu";
import CalcHeader from "./CalcHeader/CalcHeader";
import Options from "./Options/Options";

import "./calculator.css";

const Calculator = ({
  pagesData,
  page,
  title,
  options,
  chosenOptions,
  onMenuBtnClick,
  onOptionClick
}) => {
  return (
    <div className="right-part">
      <div className="calculator">
        <Menu labels={pagesData} page={page} onMenuBtnClick={onMenuBtnClick} />
        <CalcHeader title={title} count={chosenOptions.length} />
        <Options
          options={options}
          chosenOptions={chosenOptions}
          onOptionClick={onOptionClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
