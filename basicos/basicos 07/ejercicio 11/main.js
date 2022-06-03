fechas = [];

function aniadirFecha(){
    const form = document.forms["formFechas"];
    const fecha = form.fecha.value;
    if(fecha !== ""){
        fechas.push(new Date(fecha));
        fechas.sort(function(a,b) {
            return a - b;
        })
        alert("Fecha se ha añadido correctamente");
    }else{
        alert("Fecha no se ha añadido correctamente");
    }

}

function mostrarResultados(){

    const fechaMenor = fechas[0];
    const fechaMayor = fechas[fechas.length - 1];
    const numFechas = fechas.length;

    const etiqFechaMenor = document.getElementById("fechaMenor");
    const etiqFechaMayor = document.getElementById("fechaMayor");
    const etiqNumFechas = document.getElementById("numFechas");

    etiqFechaMenor.innerHTML = fechaMenor ? fechaMenor: "No hay fecha";
    etiqFechaMayor.innerHTML = fechaMayor ? fechaMayor: "No hay fecha";
    etiqNumFechas.innerHTML = numFechas;

}