function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function ordenar() {

    let array = [];

    // Relleno el array con numeros aleatorios
    for (let i = 0; i < 10; i++) {
        array.push(getRandomInt(1, 100));
    }

    console.log("Array sin ordenar");

    console.log(array);

    // Ordeno el array. Es importate lo de a-b.
    // Si quieres de mayor a menor, porn b-a
    array.sort(function (a, b) { return a - b });

    console.log("Array ordenado");

    console.log(array);

    // Creo el elemento ul
    let ul = document.createElement("ul");

    // Recorro el array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        // Creo el li
        let li = document.createElement("li");
        
        // Creo el texto del li
        let textLi = document.createTextNode(element);
        
        // Añado el texto del li al li
        li.appendChild(textLi);
        
        // Añado el li al ul
        ul.appendChild(li);

    }

    // Añado el ul al div de valores
    let valores = document.getElementById("valores");
    valores.appendChild(ul);

}

window.onload = ordenar;