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

import CarouselFunction from './components/carousel/Carousel';

function App() {

  var animateHTML = function() {
    var elems:any, windowHeight:any;
    
    var init = function() {
      elems = document.getElementsByClassName("hidden");
      windowHeight = window.innerHeight;
      _addEventHandlers();
    }
    
    var _addEventHandlers = function() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function() {
      for ( var i = 0; i < elems.length; i++ ) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    
    return {
      init: init
    }
  }

  animateHTML().init();

  return (
    <div className="App">
      <Menu />
      <SocialMedia />
      {/* <CarouselFunction/> */}
      <Introduction />
      <Expertise />
      <MidiaContent />
      <ClinicInformation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
