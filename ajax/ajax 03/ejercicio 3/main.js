function buscarPersonas() {

    let busqueda = document.getElementById("name").value;

    if (busqueda.length >= 3) {
        // creo el objeto que realizara la llamada
        let llamada = new XMLHttpRequest();

        // url del php a llamar
        let url = "filtrar-nombres.php";

        // Indico los parametros que voy a mandar
        let params = "busqueda=" + busqueda;

        // Funcion que se ejecutara al recibir la respuesta
        llamada.onreadystatechange = function () {
            // si todo esta bien
            if (this.readyState === 4 && this.status === 200) {

                let nombres = JSON.parse(this.responseText);
                let datalist = document.getElementById("names");
                datalist.innerHTML = "";
                for (let nombre of nombres) {
                    let option = document.createElement('option');
                    let text = document.createTextNode(nombre);
                    option.appendChild(text);
                    datalist.appendChild(option);
                }

            }
        }

        // Indico que es una peticion POST
        llamada.open("POST", url, true);
        // Esta linea es necesaria en una peticion POST
        llamada.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        llamada.send(params); // Le paso los parametros
    } else {
        let datalist = document.getElementById("names");
        datalist.innerHTML = "";
    }

}
