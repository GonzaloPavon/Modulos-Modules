//Componente Principal
import React from 'react';//Importamos React para crear las interfaces
import HelloWorld from  './Componentes/HelloWorld.js';//Importo el componente HelloWorld
import Navigation from  './Componentes/Navigation.js';//Importo el componente Navigation
import './App.css';//Importo el css del componente principal

function App() {
  return (
    <div  className='App'>
      <Navigation />
      <HelloWorld />
    </div>
  );//Devolvemos lo que vayamos a mostrar gracias a la funcion
}//Gracias a esta funcion App podemos mostrar por pantalla lo que querramos que aparezca en el navegador

export default App;//De esta forma es que exportamos nuestra funcion App
/*
En las lineas 10 y 11 invocamos los componentes Navigation y HelloWorld en su respectivo orden
*/
