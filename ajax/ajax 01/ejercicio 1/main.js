
function cargarJSON() {

    // Creo el objeto que hara la llamada
    let llamada = new XMLHttpRequest();

    // Ruta de donde esta el fichero
    let url = "datos.json";

    // Indico que debo hacer cuando reciba una respuesta
    llamada.onreadystatechange = function () {
        // Si todo esta bien
        if (this.readyState == 4 && this.status == 200) {

            // Parseo la informacion y la muestro
            console.log("Recibida la informacion del fichero");
            let datos = JSON.parse(this.responseText);
            console.log(datos);
        }
    }

    console.log("Se envia la peticion");

    // Abro la llamada o peticion
    llamada.open("GET", url, true);
    // lanzo la peticion
    llamada.send();

}

window.onload = cargarJSON;