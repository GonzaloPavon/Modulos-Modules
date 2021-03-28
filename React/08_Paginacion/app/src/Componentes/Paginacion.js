import React, { Component } from 'react';

class Paginacion extends Component {
  render(){
    const numeroDePaginas =  [];//establecemos que el valor inicial de el numeroDePaginas es un array vacio
    for(let i = 1; i <= Math.ceil(this.props.publicacionesTotales  / this.props.publicacionesPorPagina); i++){//iniciamos un for para tener un contador de las paginas,con math.ceil redondeamos el resultado de la division
      numeroDePaginas.push(i);//actualizamos el valor de numeroDePaginas con el resultado final de 'i'
    }
    return(
      <div  className="Paginacion">
        <ul>
          {numeroDePaginas.map(numero=>{/*mapeamos el numero de paginas para hacer la navegacion de paginado*/
            return(
              <li key={numero}>
                <a onClick={()=> this.props.paginado(numero)} href="#">{/*Asignamos la funcion 'paginado' que habiamos pasado desde ListaPaginada asi podemos cambiar de pagina*/}
                  {numero}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Paginacion;
