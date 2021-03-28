//index JS desde el que sirvo y configuro mi aplicacion
import React from 'react';//Biblioteca que nos permite crear interfaces
import ReactDOM from 'react-dom';//Biblioteca que nos permite crear interfaces de usuarios en el navegador
import './index.css';
import App from './App';//Importamos nuestra aplicacion principal
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//Le decimos a nuestra aplicacion en que ID del html principal tiene que mostrarse(en nuestro caso actual seria'root')
);//Renderizamos la aplicacion que importamos anteriormente

serviceWorker.unregister();//Con este serviceWorker el usuario podra seguir usando la aplicacion incluso sin internet(aloja los datos en memoria cache)

/*
En la linea 10 invocamos nuestro componente principal(el componente App)
*/
