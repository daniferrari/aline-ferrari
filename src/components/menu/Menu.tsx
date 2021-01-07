import React from 'react';
import ReactDOM from 'react-dom';
import './menu.scss';

import logo from '../../assets/images/logo.png';
import sanduiche from '../../assets/icons/menu.svg';

class Menu extends React.Component<{}, { openMenu: boolean }> {

  constructor (props: any) {
    super(props)
    this.state = { openMenu: false };

    this.click = this.click.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event: any) => {
      const domNode = ReactDOM.findDOMNode(this);

      if (!domNode || !domNode.contains(event.target)) {
          this.setState({
            openMenu: false
          });
      }
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
              <li onClick={() => {this.goToTarget('midia')}}>Conteúdos</li>
              <li onClick={() => {this.goToTarget('apointment')}}>Clínicas que atendo</li>
              <li onClick={() => {this.goToTarget('contact')}}>Entre em contato</li>
            </ul>
          </div> : null  }
        </div>

        {/* menu para maiores resoluções */}
        <div className="deskMenu">
          <ul>
            <li className="menuLogo">
              <img src={logo} alt="Logo" />
              <p className="menuTitle">Dra. Aline Ferrari</p>
            </li>
            <li onClick={() => {this.goToTarget('introduction')}}>Sobre</li>
            <li onClick={() => {this.goToTarget('expertise')}}>Especialidades</li>
            <li onClick={() => {this.goToTarget('midia')}}>Conteúdos</li>
            <li onClick={() => {this.goToTarget('apointment')}}>Clínicas que atendo</li>
            <li onClick={() => {this.goToTarget('contact')}}>Entre em contato</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;