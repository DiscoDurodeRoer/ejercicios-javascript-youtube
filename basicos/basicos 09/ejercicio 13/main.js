
function init() {
    document.getElementById("aniadir").addEventListener("click", function () {
        aniadir();
    })
    document.getElementById("eliminar").addEventListener("click", function () {
        eliminar();
    })
    document.getElementById("mostrar").addEventListener("click", function () {
        mostrar();
    })
    document.getElementById("limpiar").addEventListener("click", function () {
        limpiar();
    })

}

function aniadir() {

    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;

    if (clave != "") {

        if (localStorage.getItem(clave)) {
            document.getElementById("mensaje").innerHTML = "<p>Se edito el registro</p>";
        } else {
            document.getElementById("mensaje").innerHTML = "<p>Se añade el registro</p>";
        }

        localStorage.setItem(clave, valor);
    } else {
        document.getElementById("mensaje").innerHTML = "<p>Clave debe tener un valor</p>";
    }

}

function eliminar() {


    const clave = document.getElementById("clave").value;

    if (localStorage.getItem(clave)) {
        document.getElementById("mensaje").innerHTML = "<p>Se elimino el registro</p>";
        localStorage.removeItem(clave)
    } else {
        document.getElementById("mensaje").innerHTML = "<p>No existe la clave</p>";
    }

}

function mostrar() {

    const divDatos = document.getElementById("datos");
    divDatos.innerHTML = "";

    if (localStorage.length === 0) {

        document.getElementById("mensaje").innerHTML = "<p>No hay datos</p>";
    } else {

        let tabla = document.createElement("table");
        tabla.setAttribute("border", "1");

        let tr = document.createElement("tr");

        let th = document.createElement("th");
        let thTexto = document.createTextNode("Clave");

        th.appendChild(thTexto);
        tr.appendChild(th);

        th = document.createElement("th");
        thTexto = document.createTextNode("Valor");

        th.appendChild(thTexto);
        tr.appendChild(th);

        tabla.appendChild(tr);

        for (let index = 0; index < localStorage.length; index++) {

            const key = localStorage.key(index);

            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let tdText = document.createTextNode(key);

            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode(localStorage.getItem(key));

            td.appendChild(tdText);
            tr.appendChild(td);

            tabla.appendChild(tr);

        }

        divDatos.appendChild(tabla);

    }


}

function limpiar() {
    document.getElementById("mensaje").innerHTML = "<p>Se borran todos los elementos</p>";
    document.getElementById("datos").innerHTML = "";
    localStorage.clear();
}

window.onload = init;