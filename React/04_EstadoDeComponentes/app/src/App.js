//Componente Principal
import React from 'react';
import EstadoComponente from './Componentes/EstadoDeComponentes';
import './App.css';

function App() {
  return (
    <div  className='App'>
      <EstadoComponente textprop='Primer Componente' numprop={6}/>
      <EstadoComponente textprop='Segundo Componente' numprop={7}/>
    </div>
  );
}

export default App;
