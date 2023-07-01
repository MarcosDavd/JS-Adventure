    var alice = {
        name : "Alice",
        dob : new Date(2001, 3, 4),
        height : 1.65,
        weight : 68
    };
    var bob = {
     name : "Robert",
     dob : new Date(1997, 0, 31),
     height : 1.70,
     weight : 88
    };
    var charly = {
     name : "Charles",
     dob : new Date(1978, 9, 15),
     height : 1.88,
     weight : 102
    };
    var lucy = {
     name : "Lucía",
     dob : new Date(1955, 7, 7),
     height : 1.55,
     weight : 61
    };
    var peter = {
     name : "Peter",
     dob : new Date(1988, 2, 9),
     height : 1.65,
     weight : 99
    };
    var luke = {
     name : "Lucas",
     dob : new Date(1910, 11, 4),
     height : 1.72,
     weight : 75
    };
var arreglo=[alice,bob,charly,lucy,peter,luke];

function nuevoarray(arreglo){
    let imc=25;
    let nuevo= arreglo.filter(function(person){
        return (person.weight/(Math.pow(person.height,2))> imc);
    }).map(function(person){
        return person.name;
    });
    return nuevo;
}
 var nombres=nuevoarray(arreglo);
 
 for(let i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}
console.log(nombres.length);
// saber edad de una persona
function CalcularIMC(persona){
    return persona.weight/(Math.pow(persona.height,2));
}
function retornarEdad(persona){
    const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25;// define el número de milisegundos en un año, incluyendo años bisiestos
    let fecha=new Date();
    let diferencia= fecha.getTime()-persona.dob.getTime();
    let edad= Math.floor(diferencia/milisegundosPorAnio);
    return edad;
}   
function crearVectorIMC(arreglo){
    let nuevo= arreglo.filter(function(persona){
        return retornarEdad(persona) > 40;
    }).map(function(persona){
        return CalcularIMC(persona);
    });
    return nuevo;
}
let arrayIMC=crearVectorIMC(arreglo);
for (let i = 0; i < arrayIMC.length; i++) {
    console.log(arrayIMC[i]);    
}

//  4. Implemente una función que devuelva el IMC promedio de todas las personas.
function promedio(arreglo){
    let p=0;
    for (let i = 0; i < arreglo.length; i++) {
        p += CalcularIMC(arreglo[i]);
    }
    return p/arreglo.length;
}

console.log(promedio(arreglo));
//Implemente una función que devuelva a la persona más joven.
function personaMasJoven(){
    let menor=arreglo[0];
    for(let i=0; i< arreglo.length; i++){
        console.log("Edad de "+arreglo[i].name +" : "+ retornarEdad(arreglo[i]));
        if(retornarEdad(arreglo[i])< retornarEdad(menor)){
            menor=arreglo[i];
        }
    }
    return menor;
}

console.log("Nombre de la persona con edad menor : "+personaMasJoven(arreglo).name);

//. Implemente una función que devuelva un arreglo de personas ordenado por estatura.
arreglo.sort(function(a,b){
    return retornarEdad(a)-retornarEdad(b);
});
for(let i=0;i <arreglo.length;i++){
    console.log(retornarEdad(arreglo[i]));
}

