import React from 'react';
import Option from './Option/option'

import './Options.css'

const Options = ({ options }) => {
  const visibleOptions = options.map((opt) => {
    return(
      <Option key={opt} name={opt} />
    )
  })
  return (
    <div className="calc-options">
      {visibleOptions}
    </div>
  )
}

export default Options