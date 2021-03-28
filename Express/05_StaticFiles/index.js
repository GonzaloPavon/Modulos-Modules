const express = require('express');//Requerimos express
const morgan = require('morgan');//Requerimos morgan

const app = express();//Alojamos las funcionalidad de express en una constante

app.use(express.json());//Middleware que le permite a express entender los archivos Json
app.use(morgan('dev'));//Middleware que nos sirve para obtener el metodo de la peticion, la latencia, el estado de la peticion y demas.

app.listen(3000,  function () {
  console.log('Servidor corriendo en el puerto 3000');
});//Ponemos el servidor a funcionar

app.get('/user', function (req, res) {
  res.send('Usuario');
});//Cuando nos hagan una peticion GET a la ruta '/user' le mostramos en el navegador la palabra 'Usuario'
app.post('/user', function (req, res) {
  res.send('Datos enviados');//Informamos mediante el navegador que los datos fueron enviados
  console.log(req.body);//Por consola mostramos los datos que se enviaron en el cuerpo
});
app.put('/user', function (req, res) {
  res.send('Datos actualizados');
});//Comunicamos por navegador que los datos fueron actualizados
app.delete('/user', function (req, res) {
  res.send('Datos eliminados');
});//Comunicamos por navegador que los datos fueron eliminados

app.use(express.static('public'));//Middleware que se usa para servir archivos estaticos desde la carpeta asignada
