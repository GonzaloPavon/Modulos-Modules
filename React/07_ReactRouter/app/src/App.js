//Componente Principal
import React, { Component } from 'react';
import  { BrowserRouter as Router,  Route}  from  'react-router-dom';
import Home from './Componentes/Home.js';
import Ayuda from './Componentes/Ayuda.js';
import Noti from './Componentes/Notificaciones.js';
import Navegacion from './Componentes/Navegacion.js';

import './App.css';

class App extends Component {

  render(){
    return (
      <div  className='App'>
      <Router>{/*Usamos router para establecer las rutas y los componentes que se renderizan en cada ruta*/}
        <Route path="/" component={Navegacion}/>
        <Route exact  path="/" component={Home}/>{/*Con exact marcamos que solo se renderice en la ruta exacta*/}
        <Route path="/ayuda" component={Ayuda}/>
        <Route path="/notificaciones" component={Noti}/>
      </Router>
      </div>
    );
  }

}

export default App;
