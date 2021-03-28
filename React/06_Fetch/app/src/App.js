//Componente Principal
import React, { Component } from 'react';
import Publicaciones from './Componentes/Publicaciones.js'
import './App.css';

class App extends Component {

  render(){
    return (
      <div  className='App'>
        <h1>Publicaciones</h1>
        <Publicaciones/>
      </div>
    );
  }

}

export default App;
