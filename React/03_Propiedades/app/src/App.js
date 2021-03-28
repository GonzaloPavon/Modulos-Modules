//Componente Principal
import React from 'react';
import PruebaPropiedades from './Componentes/Propiedades.js';
import PruebaPropiedadesNum from './Componentes/PropiedadesNum.js';
import './App.css';

function App() {
  return (
    <div  className='App'>
      <PruebaPropiedades textprop='Probando propiedades con un texto'/>
      <PruebaPropiedades textprop='Texto y un:' subprop='Subtitulo de prueba'/>
      <PruebaPropiedadesNum numprop={6}/>
      <PruebaPropiedadesNum numprop={3}/>
    </div>
  );
}

export default App;

/*
En las lineas 10, 11, 12 y 13 invocamos nuestros componentes y ademas les pasamos las propiedades que van a utilizar
*/
