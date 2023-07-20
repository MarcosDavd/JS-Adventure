const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configuración de las rutas y otros middleware de Express

// Configuración de la comunicación de Socket.IO con los clientes
io.on('connection', (socket) => {
  console.log('¡Un jugador se ha conectado!');

  // Aquí puedes implementar lógica adicional para gestionar la conexión del jugador
});

// Iniciar el servidor
const port = 3006;
server.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
