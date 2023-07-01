//const saludar = require("./saludar"); -> de esta forma tengo acceso a traves de saludar"." a 
// los modulos que se exporten desde ./saludar 
//otro opcion es la desestrucuturacion en la que se obtienen los mudulos especificados
const { HolaMundo,saludar} = require("./saludar"); // acceso mas facil sin "."
/*

console.log(saludar.HolaMundo())

console.log(saludar.saludar("Koda"))

*/
console.log(HolaMundo())

console.log(saludar("Koda"))
