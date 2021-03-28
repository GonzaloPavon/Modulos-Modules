const express = require('express');//Requiero el framework express para un manejo mas facil y mejor del servidor

const server = express();//Alojo express en la constante server para usar sus funcionalidades

server.listen(3000, function () {
  console.log('Servidor corriendo en el puerto 3000');
});//Pongo a correr al servidor

server.get('/', function (req, res) {
  res.send('<h1>Prueba de Express y Node</h1>');
  res.end();
});//Le asigno una ruta y un contenido para servir
