const express = require('express');
const app = express();
const PORT = 8880;
const preguntados = require('./preguntados.js');
const path = require('path');

app.use(express.json());
//app.use(express.static('public'));



// esto es para entrar al lobby y servirlo, es lo primero que e ve
app.get('/', (req, res) => {
    // res.sendFile('public\index.html');
    res.sendFile('index.html', { root: path.join(__dirname, './public') });

});

// sirve el tablero
app.get('/lobby', (req, res) => {
    let nombre = req.body.nombre;
    preguntados.inicio(nombre);
    console.log("Sirvo el tablero desde el inicio");
    res.sendFile('lobby.html', { root: path.join(__dirname, './public') });

});

function joinTateti(req, res) {
    let tablero = preguntados.inicio();
    if (tablero.error) {
        res.status(400).json(tablero);
    } else {
        res.json(tablero);
    }
}


app.listen(PORT, () => console.log("Se ejecuta en el server: ${PORT}"));