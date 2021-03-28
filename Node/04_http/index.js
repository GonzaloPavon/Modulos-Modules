const http = require('http'); //Requiero el modulo http para montar un servidor con los modulos internos

const handleServer = function (req, res)/* Como parametros del servidor tenemos las peticiones(req) y las respuesta que este de(res) */ {
  res.writeHead(200, { 'content-type' : 'text/html'});//Un header donde le indique al navegador el estado de la peticion
  res.write('<h1>Prueba de servidor</h1>'); //Cuando alguien haga una peticion al puerto 3000 desde un navegador el buscador va a devolver esto en pantalla
  res.end();//Con esto damos fin a la respuesta
  console.log('Un usuario realizo una peticion');//Aviso a la consola de que un usuario realizo una peticion
};//Declaro nuestro servidor

const server = http.createServer(handleServer);//Alojo la creacion del servidor en una constante

server.listen(3000, function () {
  console.log('Servidor corriendo en el puerto 3000');
});//Monto el servidor en el puerto 3000 y ademas aviso por consola cuando el servedor comience a correr
