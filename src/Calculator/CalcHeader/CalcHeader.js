import React from "react";

import "./CalcHeader.css";

const CalcHeader = ({ title, count }) => {
  return (
    <div className="calc-header clearfix">
      <h2>{title}</h2>
      <p className="flex-to-right">
        Выбрано <span>{count}</span>
      </p>
    </div>
  );
};

export default CalcHeader;
