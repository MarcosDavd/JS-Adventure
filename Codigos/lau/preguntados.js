const fs = require('fs');
const crypto = require('crypto');

module.exports = {
    inicio: inicio
};

const vacio = ' ';

const player = {
    ID: null,
    nombre: vacio
};

const tableroInicial = {
    players: [{}, {}, {}, {}],
    tablero_ID: null,
    tablero: [
        [vacio, vacio, vacio, vacio, vacio],
        [vacio, vacio, vacio, vacio, vacio],
        [vacio, vacio, vacio, vacio, vacio],
        [vacio, vacio, vacio, vacio, vacio]
    ]
};

function generarID (){
    return crypto.randomBytes(6).toString('hex');
}

function partidaCreada(i, nombre, data) {
    if (data[i].find(t => t.player2_ID === null)) {
        player.ID = generarID();
        player.nombre = nombre;
    }
}

function crearPartida(nombre, data) {
    player.ID = generarID();
    player.nombre = nombre;// el 1er participante crea la partida 
    tableroInicial.players[0] = player;// es agregado a la partida
    tableroInicial.tablero_ID = generarID();//genero el id/link del tablero
    data.push(tableroInicial);
    fs.writeFileSync('./partidas.json', JSON.stringify(data, null, 2));
}

function inicio(nombre) {
    console.log('entro a inicio');

    if (!fs.existsSync('./partidas.json')) {
        fs.writeFileSync('./partidas.json', JSON.stringify([], null, 2));
    }

    const JSONdata = fs.readFileSync('./partidas.json');
    const data = JSON.parse(JSONdata);
    const i = data.findIndex(t => t.tablero_ID === tableroInicial.tablero_ID);

    if (i === -1) {
        crearPartida(nombre, data);
    } else {
        partidaCreada(i, nombre, data);
    }
}
