import React, { Component } from 'react';
import Paginacion from './Paginacion.js';
import Publicaciones from './Publicaciones.js';

import '../Estilos/ListaPaginada.css';

class ListaPaginada extends Component {
  //Estado del componente
  state = {
    publicaciones : [],
    cargando: false,
    paginaActual: 1,
    publicacionesPorPagina: 10
  }

  //Funciones del componente
    async componentDidMount(){
      this.setState({cargando: true});
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const datos = await res.json();
      this.setState({publicaciones: datos})
      this.setState({cargando: false});
      console.log(this.state.publicaciones);
    }//Funcion que al montarse el componente me sirve desde la pagina jsonplaceholder un json con comentarios
    paginado = (numero)/*Retroalimentamos la funcion con el numero conseguido en el componente paginacion*/ =>{
      this.setState({paginaActual:  numero})
    }//Funcion para cambiar la pagina actual a la seleccionada

//renderizamos el componente
  render(){
    const indiceDeUltimaPubli = this.state.paginaActual * this.state.publicacionesPorPagina;//Establecemos que el indice de la ultima publicacion es paginaActual * publicacionesPorPagina
    const indiceDePrimerPubli = indiceDeUltimaPubli - this.state.publicacionesPorPagina;//Establecemos que para el indice de la primera publicacion tenemos que hacer indiceDeUltimaPubli - publicacionesPorPagina
    const publisActuales  = this.state.publicaciones.slice(indiceDePrimerPubli,  indiceDeUltimaPubli);//Establecemos que las publicacion que nos muestra actualmente son el resto de los indices
    return(
      <div  className="ListaPaginada">
        <div  className="TituloLista"><h4 className="NombreLista">Publicaciones listadas</h4></div>
        <Publicaciones  cargando={this.state.cargando} publicaciones={publisActuales}/>
        <Paginacion
          publicacionesPorPagina={this.state.publicacionesPorPagina}/*le pasamos el estado de publicacionesPorPagina*/
          publicacionesTotales={this.state.publicaciones.length}/*le decimos que las publicacionesTotales son iguales a lo largo del array que contiene las publicaciones*/
          paginado={this.paginado}/>{/*Pasamos la funcion de paginado*/}
      </div>
    )
  }
}

export default ListaPaginada;
