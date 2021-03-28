import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';

import '../Estilos/Navegacion.css'

class MenuMobile  extends Component{

  render(){
    if (this.props.estado === true)/*Condicional para mostrar el menu mobile*/ {
    return (
      <div  className="NavbarLiListM">
        <li className="NavbarLiM"><NavLink to="/ayuda" className='NavbarNavLinkM'>Ayuda</NavLink></li>
        <li className="NavbarLiM"><NavLink to="/notificaciones" className='NavbarNavLinkM'>Notificaciones</NavLink></li>
      </div>
    )
  }// Si el estado que pasamos por prop es verdadero renderizamos la lista de links
    else {
      return (null)
    }//si el estado es false no devolvemos nada
  }
}

export default MenuMobile;
