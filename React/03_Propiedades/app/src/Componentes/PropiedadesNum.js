//Componente para practicar propiedades numericas
import React from 'react';

function PruebaPropiedadesNum(props) /*por aca le pasamos las propiedades desde donde es invocdado*/{
  return (
    <div  className='PruebaPropiedadesNum'>
      Probando propiedades numericas : {props.numprop + 6}
    </div>
  );
}

export default PruebaPropiedadesNum;

/*
En la linea 7, usando '{}' traemos las propiedades que pasamos de la App principal
Adentro de las llaves especificamos que objeto de las propiedades vamos a usar
Al ser las llaves tomadas como elementos JS podemos realizar operaciones adentro
*/
