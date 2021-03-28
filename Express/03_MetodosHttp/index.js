const express = require('express');//Requerimos express

const app = express();//Alojamos las funcionalidad de express en una constante

app.listen(3000,function () {
  console.log('Servidor corriendo en el puerto 3000');
});//Ponemos el servidor a funcionar

app.get('/',function (req, res) {
  res.send('Home');
  console.log('Se realizo una peticion GET');
});//Cuando se haga una peticion GET el servidor les responde con un Home y nos muestra por consola que re realizo una peticion
app.post('/',function (req, res) {
  res.send('Datos enviados');
  console.log('Se realizo una peticion POST');
});//Cuando se haga una peticion POST nos avisa tanto por consola como por el navegador
app.put('/',function (req, res) {
  res.send('Datos actualizados');
  console.log('Se realizo una peticion PUT');
});//Cuando se haga una peticion PUT nos avisa tanto por consola como por el navegador
app.delete('/',function (req, res) {
  res.send('Datos eliminados');
  console.log('Se realizo una peticion DELETE');
});//Cuando se haga una peticion DELETE nos avisa tanto por consola como por el navegador
