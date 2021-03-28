const express = require('express');//Requerimos express

const app = express();//Alojamos las funcionalidad de express en una constante

app.listen(3000,function () {
  console.log('Servidor corriendo en el puerto 3000');
});//Ponemos el servidor a funcionar

app.get('/', function (req, res) {
  res.send('Home');
});//Cuando hacen una peticion get a la ruta '/' le devolvemos un 'Home' en el navegador
app.get('/about', function (req, res) {
  res.send('Seccion sobre nosotros');
});//Cuando hacen una peticion get a la ruta '/about' le devolvemos un 'Seccion sobre nosotros' en el navegador
