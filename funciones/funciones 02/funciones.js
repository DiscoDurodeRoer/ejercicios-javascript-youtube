

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



















