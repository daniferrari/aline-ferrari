import React from 'react';
import './menu.scss';

import logo from '../../assets/images/logo.png';
import sanduiche from '../../assets/icons/menu.svg';

function Menu() {
  return (
    <div className="Menu">
      <h1>Aline</h1>
      <img src={logo} alt="Logo" />
      <img className="sanduiche" src={sanduiche} alt="Icone do menu"/>
    </div>
  );
}

export default Menu;