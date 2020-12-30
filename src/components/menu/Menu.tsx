import React from 'react';
import './menu.scss';

import logo from '../../assets/images/logo.png';
import sanduiche from '../../assets/icons/menu.svg';

class Menu extends React.Component<{}, { openMenu: boolean }> {

  constructor (props: any) {
    super(props)
    this.state = { openMenu: false };

    this.click = this.click.bind(this);
  }


  click = () => {
    this.setState(state => ({
      openMenu: !state.openMenu
    }))
  }

  goToTarget = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView();
    } 
    this.setState(state => ({
      openMenu: false
    }))
  }

  render () {
    return (
      <div className="Menu">
        <div className="mobileMenu">
          <div className="menuHeader">
            <h1>Dra. Aline</h1>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="menuButton">
              <img onClick={this.click} className="sanduiche" src={sanduiche} alt="Icone do menu"/>
            </div>
          </div>
    
          { this.state.openMenu ? <div className="menuContent">
            <ul>
              <li onClick={() => {this.goToTarget('introduction')}}>Sobre</li>
              <li onClick={() => {this.goToTarget('expertise')}}>Especialidades</li>
              <li onClick={() => {this.goToTarget('midia')}}>Na Mídia</li>
              <li onClick={() => {this.goToTarget('apointment')}}>Marque sua consulta</li>
              <li onClick={() => {this.goToTarget('contact')}}>Entre em contato</li>
            </ul>
          </div> : null  }
        </div>

        {/* menu para maiores resoluções */}
        <div className="deskMenu">
          <ul>
            <li onClick={() => {this.goToTarget('introduction')}}>Sobre</li>
            <li onClick={() => {this.goToTarget('expertise')}}>Especialidades</li>
            <li onClick={() => {this.goToTarget('midia')}}>Na Mídia</li>
            <li onClick={() => {this.goToTarget('apointment')}}>Marque sua consulta</li>
            <li onClick={() => {this.goToTarget('contact')}}>Entre em contato</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;