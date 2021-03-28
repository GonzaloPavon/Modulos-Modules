const express = require('express');//Requerimos express

const app = express();//Alojamos las funcionalidad de express en una constante

app.listen(3000,function () {
  console.log('Servidor corriendo en puerto 3000');
});//Ponemos el servidor a funcionar

app.get('/', function (req, res) {
  res.send('Probando Express');//En lugar de escribir write, declarar el tipo y demases como con http, solo usamos send
});//Cuando se le haga una peticion GET a la ruta 0('/') nos va a devolver el mensaje de la funcion
