//Componente para practicar propiedades
import React from 'react';

function PruebaPropiedades(props)/*por aca le pasamos las propiedades desde donde es invocdado*/ {
  return (
    <div  className='PruebaPropiedades'>
      {props.textprop} {props.subprop}
    </div>
  );
}

export default PruebaPropiedades;

/*
En la linea 7, usando '{}' traemos las propiedades que pasamos de la App principal
Adentro de las llaves especificamos que objeto de las propiedades vamos a usar
*/
