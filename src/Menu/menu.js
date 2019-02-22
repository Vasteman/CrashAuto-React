import React from 'react';
import Tab from './Tab/tab';

import './menu.css'

const Menu = ({ labels }) => {

  const Tabs = labels.map((label) => {
    return (
      <li key={label.id}>
        <Tab label={label} />
      </li>
    )
  })

  return <ul>{Tabs}</ul>
}

export default Menu;