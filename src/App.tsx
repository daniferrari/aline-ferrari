import React from 'react';
import './App.scss';

import Menu from './components/menu/Menu';
import SocialMedia from './components/socialMedia/SocialMedia';
import Expertise from './components/expertise/Expertise';
import MidiaContent from './components/midiaContent/MidiaContent';
import Introduction from './components/introduction/Introduction';
import ClinicInformation from './components/clinicInformation/ClinicInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <SocialMedia />
        <Expertise />
        <MidiaContent />
        <Introduction />
        <ClinicInformation />
      </header>
    </div>
  );
}

export default App;
