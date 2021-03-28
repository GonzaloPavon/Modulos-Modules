//Componente que muestra todas las tareas
import React, { Component } from 'react';
import ComponenteTarea from  './ComponenteTarea.js';
import  '../Estilos/ComponenteTareas.css';

class ComponenteTareas extends Component {
  render(){
    return(
      <div className='ComponenteTareas'>
        { this.props.tareas.map(tarea => /*invoco la propiedad 'tareas' que viene de la app principal y la recorro con la funcion 'map', ademas defino que los datos de cada iteracion individual los guardo en 'tarea'*/
            <ComponenteTarea tarea={tarea}  key={tarea.id}  eliminarTarea={this.props.eliminarTarea}/>/*Invocamos el componente de tarea individual para darle forma a cada iteracion del arreglo hecho con 'map'*/
                            /*Tambien le paso como propiedad las tareas de forma individual('tarea'), un id para cada iteracion y la funcion eliminarTarea*/
        )}
      </div>
    )
  }
}

export default ComponenteTareas;
