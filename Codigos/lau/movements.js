// se tomo como accion de el Tirar un dado , el valor del dado es recibido
// para realizar las siquientes verificaciones respecto a las posicion a la 
// que debe ir el jugador 
// Casos a analizar : 
//      Si (Posicion player = rival)
            //se tira el dado nuevamente hasta que sea diferente
//      Sino  
            //Si (ganodor())    
                //modifico los movimientos para quedar en PosFinal
            //Sino 
                //me muevo a las posicion
//funcion para saber si el jugador gana al moverse
function winner(dado,positionPlayer){
    if( positionPlayer+dado >= positionWinner){
        dado=(dado+positionPlayer)-positionWinner;
        return true;
    }else{
        return true;
    }
}

//funcion para hacer el movimieto
//No se donde se haria lo de enviar los nuevos datos al json
//Lo del html lo 
function move(dado,positionPlayer){
    positionPlayer+=dado;
    //hacer el avance en el html
    //enviar los estados del tablero
}
function moveOn(dado,positionPlayer,positionRival){

    if((dado + positionPlayer) == positionRival){
        throwDice(dado);
    }
    if(winner(dado,positionPlayer)){
        move(dado,positionPlayer);
        //terminar partida
    }else{
        move(dado,positionPlayer);
        //turno del rival
    }

}