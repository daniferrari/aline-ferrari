import React from 'react';
import './menu.scss';

import logo from '../../assets/images/logo.png';
import sanduiche from '../../assets/icons/menu.svg';

class Menu extends React.Component<{}, { openMenu: boolean }> {

  constructor (props: any) {
    super(props)
    this.state = { openMenu: true };

    this.click = this.click.bind(this);
  }


  click = () => {
    this.setState(state => ({
      openMenu: !state.openMenu
    }))
  }

  render () {
    return (
      <div className="Menu">
        <div className="menuContainer">
          <div className="menuHeader">
            <h1>Dra. Aline</h1>
            <img src={logo} alt="Logo" />
            <img onClick={this.click} className="sanduiche" src={sanduiche} alt="Icone do menu"/>
          </div>
    
          { this.state.openMenu ? <div className="menuContent">
            <ul>
              <li>Sobre</li>
              <li>Especialidades</li>
              <li>Na Mídia</li>
              <li>Marque sua consulta</li>
              <li>Entre em contato</li>
            </ul>
          </div> : null  }
        </div>
      </div>
    )
  }
}

export default Menu;