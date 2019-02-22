import React from 'react';
import Logo from './Logo/logo';
import Menu from './Menu/menu';
import ContactNumber from './ContactNumber/contactNumber';

import './header.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <ContactNumber />
    </div>
  )
}

export default Header;