//Componente hecho de una clase para usar los estados de los componentes
import React from 'react';

class EstadoComponente extends React.Component  /* Creamos nuestro componente como una clase para pode hacer uso de los estados*/{

  state =  {
    show:true
  }/*Setteamos el estado inicial*/
  cambiarEstado = ()  =>{
    this.setState({show:!this.state.show})//En esta linea cambiamos el estado mendiate el 'setState' y le otorgamos el valor contrario al actual
  }/*Funcion flecha para cambiar el estado con los botones. Usamos la funcion flecha para no bindear la funcion*/

  render() {
    if (this.state.show) {
      return(
        <div>
          <h3>Propiedad de texto: {this.props.textprop}</h3>
          <h3>Propiedad numerica: {this.props.numprop+6}</h3>
          <button onClick={this.cambiarEstado}>Ocultar componente</button>
        </div>
      )
    }
    else{
      return(
        <div>
          <button onClick={this.cambiarEstado}>Mostrar componente</button>
        </div>
      )
    }
  }
}

export default EstadoComponente;

/*
En las lineas 19 y 26 invocamos la funcion para cambiar el estado mediante un boton
*/
