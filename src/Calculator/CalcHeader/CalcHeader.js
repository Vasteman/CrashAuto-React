import React from 'react';

import './CalcHeader.css';

const CalcHeader = ({ name }) => {
  return (
    <div className="calc-header clearfix">
      <h2>{name}</h2>
      <p className="flex-to-right">Выбрано <span>1</span></p>
    </div>
  )
}

export default CalcHeader;