const os = require('os'); //para requerir modulos instalados en node, solamente hacemos require con el nombre del modulo
const fs = require('fs');//modulo para trabajar con archivos del sistema

console.log(os.platform());//nos muestra por consola en que S.O. estamos ejecutando
console.log(os.release());//nos muestra por consola la version del S.O.

fs.readFile('./texto.txt', function(err, data){
  if(err){
    console.log(err);
  }//Si ocurrieron errores nos imprime por consola los errores ocurridos
  console.log(data.toString());//Si no hay errores convertimos los datos del archivo en string y los mostramos por consola
});//Funcion para leer un archivo en el sistema
