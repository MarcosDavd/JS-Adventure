const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const { log } = require('console');
const bodyParser = require('body-parser');
// Configurar middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.post('/LogIn',(req,res) => {
    console.log("Entro al LogIn");
    let examp={
        email:"david@gmail.com",
        pass:"Marcos2001"
    };
    const pass = req.body.password;
    const user = req.body.email;
    console.log('Datos : '+pass +'\n'+ user);
    if((examp.email == user ) && (pass == examp.pass)){
        console.log("Verificacion correcta");
        res.redirect('/Home'); //Aca se hace una nueva peticion a lo que debo desponder con get/post
    }
});

app.get('/Home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html');
});
app.listen(port,() =>  {
    console.log("Servidor en el Puerto "+port);
});