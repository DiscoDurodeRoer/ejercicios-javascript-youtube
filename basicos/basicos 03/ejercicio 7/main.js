function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarNumeros(){

    let elementos = document.getElementById("elementos");
    
    let opcionesGeneradas = "";
    for(let i=0;i<10;i++){
        opcionesGeneradas +="<option>" + getRandomInt(1,100) + "</option>";
    }

    elementos.innerHTML = opcionesGeneradas;

}