import React from 'react';
import Tab from './Tab/tab';

import './menu.css'

const Menu = ({ labels, onMenuBtnClick }) => {

  const Tabs = labels.map((label) => {
    return (
      <li key={label.id}>
        <Tab label={label} onMenuBtnClick={onMenuBtnClick} />
      </li>
    )
  })

  return <ul className="menu">{Tabs}</ul>
}

export default Menu;