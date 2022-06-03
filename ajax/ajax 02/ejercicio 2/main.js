
function enviarPersona() {

    // creo el objeto que realizara la llamada
    let llamada = new XMLHttpRequest();

    // url del php a llamar
    let url = "guardarPersona.php";

    // Creo la persona que voy a insertar
    let persona = {
        "nombre": "Pepe",
        "apellido": "Alcazar",
        "profesion": "Comerciante"
    };

    // Indico los parametros que voy a mandar
    let params = "persona=" + JSON.stringify(persona);

    // Funcion que se ejecutara al recibir la respuesta
    llamada.onreadystatechange = function () {
        // si todo esta bien
        if (this.readyState === 4 && this.status === 200) {

            let personaRecibida = JSON.parse(this.responseText);
            console.log("Se ha insertado correctamente: " , personaRecibida);

        }
    }

    // Indico que es una peticion POST
    llamada.open("POST", url, true);
    // Esta linea es necesaria en una peticion POST
    llamada.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    llamada.send(params); // Le paso los parametros


}

window.onload = enviarPersona;