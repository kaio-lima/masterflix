import React, { Component } from 'react';
import './App.css';
import dunkirk from './img/dunkirk.jpg';
import AceVentura from './img/ace-ventura.jpg';
import ItACoisa from './img/it-a-coisa.jpg';
import OMaskaca from './img/o-maskara.jpg';
import Piratas from './img/piratas-do-caribe.jpg';
import Poltergeist from './img/poltergeist.jpg';
class App extends Component {
  render() {
    return <section>
    <div className="header">
    <div>
    <p>MasterFlix</p>
    </div>
    <nav className="menu">
    <p>AÇÃO</p>
    <p>COMÉDIA</p>
    <p>DRAMA</p>
    <p>TERROR</p>
    </nav>
    </div>
    
    <div className="banner">
    
    </div>
    
    <div className="main">
    <div className="cartao Piratas">
    <img src={Piratas} alt=""/>
    </div>
    <div className="cartao Mascara">
    <img src={OMaskaca} alt=""/>
    </div>
    <div className="cartao IT">
    <img src={ItACoisa} alt=""/>
    </div>
    <div className="cartao Poltergest">
    <img src={Poltergeist} alt=""/>
    </div>
    <div className="cartao Dunkirk">
    <img src={dunkirk} alt="" />
    </div>
    <div className="cartao AceVentura">
    <img src={AceVentura} alt="" />
    </div>
    </div>
    </section>
  }
}

export default App;
