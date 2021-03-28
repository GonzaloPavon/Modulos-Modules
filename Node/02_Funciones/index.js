const matematica = require('./funcionesMatematicas.js');  //Aca requerimos(importamos) las funciones desde un archivo externo y las alojamos en una constante para poder usarlas en este archivo

var primerNumero = 8; //En este punto estoy declarando variables para pasarlas como parametros en las funciones
var segundoNumero = 2;

console.log('la suma es: '+matematica.suma(primerNumero,segundoNumero));  // Aca estoy invocando la funcion suma y pasandole como parametros las variables
console.log('la resta es: '+matematica.resta(primerNumero,segundoNumero));  // Aca estoy invocando la funcion resta y pasandole como parametros las variables
console.log('la multiplicacion es: '+matematica.multiplicacion(primerNumero,segundoNumero));  // Aca estoy invocando la funcion multiplicacion y pasandole como parametros las variables
console.log('la division es: '+matematica.division(primerNumero,segundoNumero));  // Aca estoy invocando la funcion divisiony pasandole como parametros las variables
