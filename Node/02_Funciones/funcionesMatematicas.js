const matematica = {};  //Creo un objeto que contenga todas las funciones juntas(un modulo)

function suma(x1, x2) {
  return x1 + x2;
} //Creo la funcion para sumar
function resta(x1, x2) {
  return x1 - x2;
} //Creo la funcion para restar
function multiplicacion(x1, x2) {
  return x1 * x2;
} //Creo la funcion para multiplicar
function division(x1, x2) {
  if (x2 == 0) {
    console.log('no se puede dividir por 0');
  } //Como no se puede divdir por 0 aca declaramos un if en el caso de que alguien lo intente
  else {
    return x1 / x2;
  }
} //Creo la funcion para dividir

matematica.suma = suma; //defino como declarar la funcion suma en el objeto
matematica.resta = resta; //defino como declarar la funcion resta en el objeto
matematica.multiplicacion = multiplicacion; //defino como declarar la funcion multiplicacion en el objeto
matematica.division = division; //defino como declarar la funcion division en el objeto

module.exports = matematica;  //exporto el modulo completo que contiene todas las funciones juntas

/*
Esta forma es para exportar funciones de modo individual
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division = division;
*/
