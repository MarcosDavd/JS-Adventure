
function ocultarTodas(){
    let arrayElems= document.getElementsByTagName("img");
    for(let i=0; i< arrayElems.length; i++){
        arrayElems[i].style.display="none"
    }
}
function mostrar(){
    let opcion = document.getElementById('texto').value;
    ocultarTodas();
    switch (opcion) {
      case "imagen 1":
            document.getElementById("imagen-1").style.display="block"
        break;
      case "imagen 2":
        document.getElementById("imagen-2").style.display = "block"
        break;
      case "imagen 3":
        document.getElementById("imagen-3").style.display="block"
        break;
      case "":
        alert("Ingrese un texto");
        break;
      default:
        alert("La opcion no es valida");
        break;
    }
  }