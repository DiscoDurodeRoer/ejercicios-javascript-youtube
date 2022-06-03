nombres = []

function insertarNombre(evt) {
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
    } else if(!existeNombre(nombre)) {
        let opcion = "<li> " + nombre + "</li>";

        let lista = document.getElementById("lista-nombres");

        lista.innerHTML += opcion;

        nombres.push(nombre);

        alert("Se ha insertado el nombre");
    }else{
        alert("Existe el nombre");
    }

}

function existeNombre(nombre){

    // Busco el nombre
    const nombreEncontrado = nombres.find(element => element.trim().toLowerCase() === nombre.trim().toLowerCase());

    if(nombreEncontrado){
        return true;
    }else{
        return false;
    }

   /* 
   // Opcion clasica
   for(let i=0; i < nombres.length; i++){
        const element = nombres[i];

        if(element.trim().toLowerCase() === nombre.trim().toLowerCase()){
            return true;
        }

    }

    return false;
    */

}