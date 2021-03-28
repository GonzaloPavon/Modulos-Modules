import React from 'react';//Importamos React para crear las interfaces
import '../Css/Navigation.css';//Importamos el css de nuestro componente Navigation

function Navigation() {
  return (
    <div  className='Navigation'>
      <header className='Navbar'>
        <ul className='NavbarUlE'>
          <li className='NavbarLiE'><a  href='/'>Inicio</a></li>
          <li className='NavbarLiE'><a  href='#'>¿Quienes Somos?</a></li>
          <li className='NavbarLiE'><a  href='#'>Ayuda</a></li>
        </ul>
      </header>
    </div>
  );
}

export default Navigation;//De esta forma es que exportamos nuestro componente Navigation
