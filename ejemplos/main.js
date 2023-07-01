const { usuarios } = require("./ejemplo.json");

let persona = usuarios.find(user => user.nombreUsuario === process.argv[2]);

if (persona) {
  console.log("Nombre: " + persona.nombreUsuario);
  console.log("Contraseña: " + persona.contrasena);
} else {
  console.log("Usuario no encontrado.");
}
