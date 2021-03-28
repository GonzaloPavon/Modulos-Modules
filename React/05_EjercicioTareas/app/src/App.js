//Componente Principal
import React, { Component } from 'react';

//Componentes
import ComponenteTareas from './Componentes/ComponenteTareas.js';
import FormularioTareas from './Componentes/FormularioTareas.js';

//Estilos
import './App.css';

//Datos
import tareas from  './Datos/tareas.json';

//Componente App
class App extends Component {

  //Estado del componente
  state = {
    tareas: tareas
  }

  //Funciones del componente
  agregarTarea  = (titulo, descripcion)  =>{
    const nuevaTarea =  {
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })
  }/*Funcion para agregar tarea*/
  eliminarTarea = (id) =>{
    const nuevaTarea  = this.state.tareas.filter(tarea => tarea.id !== id);
    this.setState({
      tareas: nuevaTarea
    });
  }/*Funcion para eliminar tarea*/

//Renderizado del componente
  render(){
    return(
      <div className='App'>
        <FormularioTareas agregarTarea={this.agregarTarea}/>{/*Ademas de invocar el FormularioTareas le pasamos como propiedad la funcion agregarTarea*/}
        <ComponenteTareas tareas={this.state.tareas}  eliminarTarea={this.eliminarTarea}/>{/* Invocamos ComponenteTareas y le paso como propiedad los datos de 'tareas' y la funcion eliminarTarea*/}
      </div>
    )
  }
}

export default App;
