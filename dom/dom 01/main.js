function init() {

    let contenedor = document.getElementById("resultado");

    // parrafos

    let p1 = document.createElement("p");
    let p1Texto = document.createTextNode("Parrafo 1");
    p1.appendChild(p1Texto);

    let p2 = document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo 2");
    p2.appendChild(p2Texto);

    let p3 = document.createElement("p");
    let p3Texto = document.createTextNode("Parrafo 3");
    p3.appendChild(p3Texto);

    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    // enlace

    let enlace = document.createElement("a");
    enlace.setAttribute("href", "http://discoduroderoer.es");
    let enlaceTexto = document.createTextNode("Enlace");
    enlace.appendChild(enlaceTexto);

    contenedor.appendChild(enlace);

    // lista desordenada

    let lista = document.createElement("ul");

    for (let index = 0; index < 3; index++) {
        let li = document.createElement("li");
        let liTexto = document.createTextNode("elemento " + index);
        li.appendChild(liTexto);
        lista.appendChild(li);
    }

    contenedor.appendChild(lista);

}

window.onload = init;