import React from 'react';
import Logo from './Logo/logo';
import Menu from '../Menu/menu';
import ContactNumber from './ContactNumber/contactNumber';

import './header.css'
const labels = [
  { id: 0, text:'Наши услуги' },
  { id: 1, text:'Расчет стоимости' },
  { id: 2, text:'Советы' },
  { id: 3, text:'Контакты' }
];

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu labels={labels} />
      <ContactNumber />
    </div>
  )
}

export default Header;