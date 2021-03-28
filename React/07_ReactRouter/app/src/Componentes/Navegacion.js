import React, { Component} from 'react';
import  { NavLink } from 'react-router-dom';
import MenuMobile from './MenuMobile.js'

import '../Estilos/Navegacion.css'
import '../Icons/icons.css'

class Navegacion  extends Component{

  state =  {
    mostrar:false
  }//Establecemos el estado para el menu mobile
  cambiarEstado = ()  =>{
    this.setState({mostrar:!this.state.mostrar})
  }//Funcion para cambiar el estado al valor booleano contrario al actual
  render(){
    return(
      <div  className="Navbar">
        <ul className="NavbarUlE">
          <div className="NavbarLogoE"><NavLink exact to="/" className='NavbarNavLinkLogoE'>Inicio</NavLink></div>
          <div  className="NavbarLiListE">
            <li className="NavbarLiE"><NavLink to="/ayuda" className='NavbarNavLinkE'>Ayuda</NavLink></li>
            <li className="NavbarLiE"><NavLink to="/notificaciones" className='NavbarNavLinkE'>Notificaciones</NavLink></li>
          </div>
        </ul>
        <ul className="NavbarUlM">
          <div  className="NavbarMenuM">
            <li className="NavbarLogoM"><NavLink  exact to="/"  className='NavbarNavLinkM'>Inicio</NavLink></li>
            <div  className="NavbarBotonM"><button className="iconMenu" onClick={this.cambiarEstado}></button></div>{/*Invocamos la funcion en el boton del menu mobile*/}
          </div>
          <MenuMobile estado={this.state.mostrar}/>{/*Traigo el menu mobile como componente y le paso como prop el estado para mostrarlo*/}
        </ul>
      </div>
    )
  }
}

export default Navegacion;
