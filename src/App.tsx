import React from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import SocialMedia from './components/socialMedia/SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <SocialMedia />
      </header>
    </div>
  );
}

export default App;
