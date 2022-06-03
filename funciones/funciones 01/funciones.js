

function esNumero(num){
    return !isNaN(num);
}

function generarAleatorio(minimo, maximo){

    if(esNumero(minimo) && esNumero(maximo)){

        minimo = parseInt(minimo);
        maximo = parseInt(maximo);
        
        if(minimo > maximo ){
            let aux = maximo;
            maximo = minimo;
            minimo = aux;
        }

        return Math.floor(Math.random() * (maximo - minimo)) + minimo;

    }else{
        console.error("Los numeros no tienen un formato correcto")
    }


}