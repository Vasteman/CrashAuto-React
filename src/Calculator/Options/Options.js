import React from 'react';
import Option from './Option/option'

import './Options.css'

const Options = ({ options, chosenOptions, onOptionClick }) => {
  const visibleOptions = options.map((opt) => {
    return (
      <Option
        key={opt}
        name={opt}
        visability={chosenOptions[opt]}
        onOptionClick={onOptionClick} />
    )
  })
  return (
    <div className="calc-options">
      {visibleOptions}
    </div>
  )
}

export default Options