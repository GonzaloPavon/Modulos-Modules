import React, { Component } from 'react';

class Publicaciones extends Component {
  render(){
    const publicaciones = this.props.publicaciones;//Establecemos que publicaciones es igual a this.props.publicaciones
    const cargando = this.props.cargando;//Establecemos que cargando es igual a this.props.cargando
    if (cargando) {
      return(
        <div  className="Publicaciones">
          <h4>Cargando..</h4>
        </div>
      )
    }
    else{
      return(
        <div  className="Publicaciones">
          <tr>
            {publicaciones.map(publicacion  =>{//mapeamos las publicaciones
              return(
                <td key={publicacion.id}>{/*le asignamos el id unico que necesita react para trabajar bien*/}
                  <p>{publicacion.title}</p>{/*mostramos el titulo de la publicacion*/}
                </td>
              )
            })
            }
          </tr>
        </div>
      )
    }
  }
}

export default Publicaciones;
