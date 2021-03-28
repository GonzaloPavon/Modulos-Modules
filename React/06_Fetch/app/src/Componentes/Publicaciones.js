//Componente de Publicaciones
import React, { Component } from 'react';
import '../Estilos/Publicaciones.css'

class Publicaciones extends Component {

//Estado del componente
state = {
  publicaciones : [] //setteamos las publicaciones en un arreglo vacio
}

//Funciones del componente
  async componentDidMount(){ //usamos la funcion interna para que cuando el componente este activo realice la funcion de forma asincrona
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')//Uso fetch para traer datos de un servidor  y los alojo en la constante res
    const datos = await res.json();//tranformo los datos que traje antes a Json y los alojo en una constante datos(ya transformados)
    this.setState({publicaciones: datos})//setteo el valor de las publicaciones con los datos que traje
    console.log(this.state.publicaciones);//muestro por pantalla las publicacions desde el estado
  }

//Renderizado del componente
  render(){
    return(
      <div  className="Publicaciones">
        {
          this.state.publicaciones.map(publicacion =>{//Con la funcion map recorremos el array que ahora tenemos en el estado del componente
            return(
              <div  key={publicacion.id}>{/*Uso la id que tiene cada publicacion para que no ocurran errores al mostrar cada iteracion*/}
                <h2>{publicacion.title}</h2>
                <p>{publicacion.body}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Publicaciones;
