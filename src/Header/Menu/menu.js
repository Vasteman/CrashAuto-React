import React from 'react';
import Tab from './Tab/tab';

import './menu.css'

const Menu = () => {
  const labels = [
    { id: 1, text:'Наши услуги' },
    { id: 2, text:'Расчет стоимости' },
    { id: 3, text:'Советы' },
    { id: 4, text:'Контакты' }
  ];
  
  const Tabs = labels.map((label) => <li key={label.id}><Tab text={label.text} /></li>)

  return <ul>{Tabs}</ul>
}

export default Menu;