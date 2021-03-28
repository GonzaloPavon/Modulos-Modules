//Componente con un formulario para crear tareas
import React, { Component } from 'react';

import  '../Estilos/FormularioTareas.css';

class FormularioTareas extends Component {

//Estado del componente
  state = {
    titulo:'',
    descripcion:''
  }

//Funciones del componente
  alEnviar  = (e)  =>{
    e.preventDefault();
    this.props.agregarTarea(this.state.titulo,  this.state.descripcion);
  }//Funcion para que al enviar el formulario se agregue una tarea mediante la Funcion  agregarTarea(que pasamos desde el componente App), como parametros le enviamos el estado del componente
  alCambiar = (e) =>{
    this.setState({
      [e.target.name]:  e.target.value
    })
  }//Funcion para que cuando haya cambios en los input y textarea se cambien el estado del componente

//Renderizado del componente
  render(){
    return(
      <div  className='FormularioTareas'>
        <form onSubmit={this.alEnviar}>{/* Invocamos las funcion alEnviar con un evento onSubmit*/}
          <input  name="titulo" type="text" placeholder="Escribe una tarea" onChange={this.alCambiar} value={this.state.titulo}/>{/* Invocamos las funcion alCambiar con un evento onChange*/}
          <textarea name="descripcion" placeholder="Escribe una descripcion" onChange={this.alCambiar}  value={this.state.descripcion}></textarea>{/* Invocamos las funcion alCambiar con un evento onChange*/}
          <input  type="submit"/>
        </form>
      </div>
    )
  }
}

export default FormularioTareas;
