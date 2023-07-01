function saludar(name) {
    console.log("Hola "+name);
}
function HolaMundo() {
    console.log("Hola Mundo");
}
// como exportar , exports es un objeto por lo tanto la funcion saludar sera agregada
// a export como atributo (acceder mediante  ".")

// module.exports.saludar=saludar;
// module.exports.HolaMundo=HolaMundo;
module.exports = {
    saludar : saludar,
    HolaMundo : HolaMundo
};