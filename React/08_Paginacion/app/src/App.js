//Componente Principal
import React, { Component } from 'react';
import ListaPaginada from './Componentes/ListaPaginada.js'
import './App.css';

class App extends Component {
  render(){
    return (
      <div  className='App'>
        <ListaPaginada  />
      </div>
    )
  }
}

export default App;
