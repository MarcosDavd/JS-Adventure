const fs = require('fs');
const crypto = require('crypto');

module.exports = {
    inicio : inicio
}

const vacio = ' ';

const player = {
    ID : null,
    nombre : vacio
    //color : vacio
}

const tableroInicial = {
    // hacer un arreglo de jugadores objeto
    players: [{},{},{},{}],
    tablero_ID : null,
    tablero: [
        [vacio,vacio,vacio,vacio,vacio],
        [vacio,vacio,vacio,vacio,vacio],
        [vacio,vacio,vacio,vacio,vacio],
        [vacio,vacio,vacio,vacio,vacio]
    ]

}

function generarID (){
    return crypto.randomBytes(32);
}

function partidaCreada (i, nombre, data){
    if (data[i].find(t => t.player2_ID === null)){
        player.ID = generarID();
        player.nombre = nombre;
    /*
        data[i]=tableroInicial;
    }else{
        if (data[i].find(t => t.player3_ID === null)){
            tableroInicial.player3_ID = generarID();
            tableroInicial.nombre3 = nombre;
            data[i]=tableroInicial;
        }else{
            if (data[i].find(t => t.player4_ID === null)){
                tableroInicial.player4_ID = generarID();
                tableroInicial.nombre4 = nombre;
                data[i]=tableroInicial;
            }else{
                // devolver alerta al frontend  
                console.log('????????');
            }
        }   
    } */   
    }
}

// se guarda en el objeto tablero los datos de id y luego se guardan en la BDD
function crearPartida(nombre, data){
    player.ID = generarID();
    console.log("ID del jugador : "+player.ID);
    player.nombre = nombre;
    
    tableroInicial.players[0] = player;
    tableroInicial.tablero_ID = generarID();
    data.push(tableroInicial);
    fs.writeFileSync('./partidas.json', data);
}


function inicio (nombre){
    console.log('entro a inicio');
    // pregunto si existe el archivo
    if (!fs.existsSync('./partidas.json')){
        fs.writeFileSync('./partidas.json', JSON.stringify([]));
    }
    JSONdata = fs.readFileSync('./partidas.json');
    data = JSON.parse(JSONdata); 
    let i = data.findIndex(t => t.tablero_ID === tableroInicial.tablero_ID);
    if(i == -1){
        crearPartida(nombre, data);
    }else{
        partidaCreada(i, nombre, data);
    }    
}