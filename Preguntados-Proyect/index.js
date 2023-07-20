const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// Configurar middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));

const port=3000;


app.use(express.static('public'));


app.post('/create-game',(req,res)=>{
    res.redirect('/lobby');
});

app.get('/lobby',(req,res)=>{
    res.sendFile(__dirname+('/public/lobby.html'));
});

app.listen(port,()=>{
    console.log("Servidor en puerto "+ port);
});