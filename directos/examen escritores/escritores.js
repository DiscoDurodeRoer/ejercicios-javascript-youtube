// 
// E S C R I B E    A Q U Í   T U   N O M B R E
// 

let botones;
let clickActive = true;

creaBotones();

function creaBotones() {

  document.getElementById("divMisBotones").innerHTML = "";
  let divParrafos = document.querySelectorAll("#contenedorTexto p");


  for (let j = 0; j < divParrafos.length; j++) {
    let nuevoBoton = document.createElement("a"); // Creación de un elemento <a>
    nuevoBoton.id = "boton_" + (j + 1); // Definición de su identificador
    nuevoBoton.classList.add("muestraoculta"); // Añadimos la clase "muestraoculta" qa nuevo elemento
    nuevoBoton.href = "#";
    nuevoBoton.textContent = "Ocultar  párrafo " + (j + 1); // Definición de su contenido textual
    nuevoBoton.addEventListener("click", function () {
      let hasStyle = document.getElementById("contenidos_" + (j + 1)).getAttribute("style");

      if (hasStyle) {
        nuevoBoton.textContent = "Ocultar párrafo " + (j + 1); // Definición de su contenido textual
        document.getElementById("contenidos_" + (j + 1)).removeAttribute("style");
      } else {
        nuevoBoton.textContent = "Mostrar párrafo " + (j + 1); // Definición de su contenido textual
        document.getElementById("contenidos_" + (j + 1)).setAttribute("style", "display:none");
      }

    });
    document.getElementById("divMisBotones").appendChild(nuevoBoton); // Inserción del nuevo elemento en el panel de botones
  }
  botones = document.querySelectorAll('a.muestraoculta'); // Actualizamos la variable botones que contiene el NodeList correspondiente a los botones
}

function init() {

  document.querySelectorAll("#editaParrafo input")[1].addEventListener("click", function () {
    aniadirParrafo();
  })
  document.querySelectorAll("#editaParrafo input")[2].addEventListener("click", function () {
    eliminarParrafo();
  })
  document.getElementById("botonBuscar").addEventListener("click", function () {
    buscarEscritor();
  });

  const fNoClick = function (e) {
    if (!clickActive) {
      e.preventDefault();
    }
  };

  let elements = document.getElementsByTagName("a");
  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener("click", fNoClick);
  }

  window.addEventListener('keydown', function (e) {

    if (e.altKey == true && e.keyCode == 78) {
      console.log("Se anula comportamiento por defecto de nuestros enlaces");
      clickActive = false;
    }
    if (e.altKey == true && e.keyCode == 83) {
      console.log("Se activa comportamiento por defecto de nuestros enlaces");
      clickActive = true;
    }

  });

}

function aniadirParrafo() {
  let num_p = document.querySelectorAll("#editaParrafo input")[0].value;

  if (!isNaN(num_p)) {
    num_p = parseInt(num_p);

    let num_parrafos_actuales = document.querySelectorAll("#contenedorTexto p").length;

    if (num_p >= 1 && num_p <= num_parrafos_actuales + 1) {

      let divParrafos = document.getElementById("contenedorTexto");

      let p = document.createElement("p");
      let pText = document.createTextNode(document.getElementById("textonuevo").value);
      p.appendChild(pText);
      p.setAttribute("id", "contenidos_" + num_p);

      for (let i = num_parrafos_actuales; i >= num_p; i--) {
        let element = document.getElementById("contenidos_" + i);
        element.setAttribute("id", "contenidos_" + (i + 1))

      }

      divParrafos.insertBefore(p, document.getElementById("contenidos_" + (num_p + 1)));

      creaBotones();

    }

  }




}

function eliminarParrafo() {

  let num_p = document.querySelectorAll("#editaParrafo input")[0].value;

  if (!isNaN(num_p)) {
    num_p = parseInt(num_p);

    let num_parrafos_actuales = document.querySelectorAll("#contenedorTexto p").length;

    if (num_p >= 1 && num_p <= num_parrafos_actuales + 1) {

      let divParrafos = document.getElementById("contenedorTexto");

      let p = document.getElementById("contenidos_" + num_p);
      divParrafos.removeChild(p);

      for (let i = num_p; i <= num_parrafos_actuales; i++) {
        let element = document.getElementById("contenidos_" + (i + 1));
        element.setAttribute("id", "contenidos_" + i)
      }

      creaBotones();

    }


  }
}

function buscarEscritor() {

  // Creo el objeto que hara la llamada
  let llamada = new XMLHttpRequest();

  // Ruta de donde esta el fichero
  let url = "db.json";

  // Indico que debo hacer cuando reciba una respuesta
  llamada.onreadystatechange = function () {
    // Si todo esta bien
    if (this.readyState == 4 && this.status == 200) {
      // Parseo la informacion y la muestro
      let datos = JSON.parse(this.responseText);

      let idEscritor = document.getElementById("idEscritor").value;

      let escritor = datos.escritores.find(e => e.id == idEscritor)

      if (escritor) {
        document.getElementById("nomEscritor").value = escritor.nombre;
        document.getElementById("nomLibro").value = escritor.libro;
        document.getElementById("nacEscritor").value = escritor.nacionalidad;
      } else {
        console.log("REGISTRO NO VÁLIDO");
      }

    } else if (this.status == 404) {
      console.log("ERROR EN LA RED");
    }
  }

  // Abro la llamada o peticion
  llamada.open("GET", url, true);
  // lanzo la peticion
  llamada.send();

}


window.onload = init;