import React from 'react';
import './App.scss';

import Menu from './components/menu/Menu';
import SocialMedia from './components/socialMedia/SocialMedia';
import Expertise from './components/expertise/Expertise';
import MidiaContent from './components/midiaContent/MidiaContent';
import Introduction from './components/introduction/Introduction';
import ClinicInformation from './components/clinicInformation/ClinicInformation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <SocialMedia />
        <Introduction />
        <Expertise />
        <MidiaContent />
        <ClinicInformation />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
