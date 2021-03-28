//Componente individual de las tareas
import React, { Component } from 'react';

import  '../Estilos/TareaIndividual.css';

class ComponenteTarea extends Component {

  render(){
    const {tarea} = this.props; /*  Para no andar usando el 'this.props' para utilizar las propiedades lo guardo en una constante llamada tarea*/
    return(
      <div className='Tarea'>
        <div className='ContainerTarea'>
          <span>{tarea.id}</span>{/*Mostramos el id de cada tarea*/}
          <h4>Titulo: <b>{tarea.titulo}</b></h4>{/*Mostramos el titulo de cada tarea*/}
        </div>
        <div className='DescripcionTarea'>
          <h4>Descripcion:</h4>
          <p>
            {tarea.descripcion}{/*Mostramos la descripcion de cada tarea*/}
          </p>
        </div>
        <div  className='ContainerCheck'>
          {tarea.done}  {/*realizacion de la tarea*/}
          <input  type='checkbox'/>
        </div>
        <div  className='ContainerBoton'>
          <button onClick={this.props.eliminarTarea.bind(this, tarea.id)}>x</button>{/*Invocamos la funcion eliminarTarea que le pasamos por las propiedades asociandolos al id de cada tarea*/}
        </div>
      </div>
    )
  }
}

export default ComponenteTarea;
