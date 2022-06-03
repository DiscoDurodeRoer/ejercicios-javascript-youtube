

function esNumero(num) {
    return !isNaN(num);
}

function generarAleatorio(minimo, maximo) {

    if (esNumero(minimo) && esNumero(maximo)) {

        minimo = parseInt(minimo);
        maximo = parseInt(maximo);

        if (minimo > maximo) {
            let aux = maximo;
            maximo = minimo;
            minimo = aux;
        }

        return Math.floor(Math.random() * (maximo - minimo)) + minimo;

    } else {
        console.error("Los numeros no tienen un formato correcto")
    }


}


function sumaArray(array) {

    let total = 0;

    if (Array.isArray(array)) {

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (esNumero(element)) {
                total += element;
            }

        }

    } else {
        console.error("Debes pasar un array como parametro");
    }

    return total;
}

function mediaArray(array) {

    let media = 0;

    if (Array.isArray(array)) {

        let suma = sumaArray(array);

        media = suma / array.length;

    } else {
        console.error("Debes pasar un array como parametro");
    }

    return media;

}

function exists(array, elemento) {

    if (Array.isArray(array)) {

        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (element == elemento) {
                return true;
            }
        }

        // if (array.find(e => e == elemento)) {
        //     return true;
        // }

    } else {
        console.error("Debes pasar un array como parametro");
    }

    return false;

}

function createP(text){
    
    let p = document.createElement("p");
    if(text){
        let pText = document.createTextNode(text);
        p.appendChild(pText);
    }

    return p;
}

function createA(link, text){

    let a = document.createElement("a");
    if(link){
        a.setAttribute("href", link);
    }
    if(text){
        let aText = document.createTextNode(text);
        a.appendChild(aText);
    }

    return a;

}

function createUL(elements){

    let ul = document.createElement("ul");

    if(Array.isArray(elements)){
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            if(element){
                let li = document.createElement("li");
                let liText = document.createTextNode(element);
                li.appendChild(liText);
                ul.appendChild(li);
            }
        }
    }

    return ul;
}



















