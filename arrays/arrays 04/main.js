function init() {
    // Obtengo el formulario y hago que no refresque
    document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
        e.preventDefault();
        calculateSeats()
    })
}

function calculateSeats() {

    // Obtengo el formulario
    const form = document.getElementsByTagName("form")[0];

    // Obtengo los valores
    const p1 = parseInt(form.p1.value);
    const p2 = parseInt(form.p2.value);
    const p3 = parseInt(form.p3.value);
    const p4 = parseInt(form.p4.value);
    const threshold = parseInt(form.threshold.value);
    const votesBlank = parseInt(form.votesBlank.value);
    const seats = parseInt(form.seats.value);

    // Array de partidos politicos
    let pps = [
        {
            name: "A",
            votes: p1,
            percentage: 0,
            seats: 0
        },
        {
            name: "B",
            votes: p2,
            percentage: 0,
            seats: 0
        },
        {
            name: "C",
            votes: p3,
            percentage: 0,
            seats: 0
        },
        {
            name: "D",
            votes: p4,
            percentage: 0,
            seats: 0
        },
    ];

    // Obtengo el total (votos en blanco + todos los votos de los partidos)
    let total = votesBlank + pps.reduce((acum, pp) => pp.votes + acum, 0);

    // Calculo el porcentaje de participacion de cada partido
    pps.forEach(pp => pp.percentage = (pp.votes * 100 / total).toFixed(2));

    // Ordeno los partidos politicos
    pps.sort((a, b) => b.votes - a.votes);

    // Obtenemos el numero de partidos politicos validos
    let numPPs = pps.filter(pp => pp.percentage >= threshold).length;

    // Recorremos los asientos
    for (let i = 0; i < seats; i++) {
        
        // indice seleccionado
        let indexPP = 0;
        let highValue = 0;

        // Recorremos el numero de partidos validos
        // Solo mientras el valor maximo sea menor que el numero de votos
        for (let j = 0; j < numPPs && highValue < pps[j].votes; j++) {

            // Si el numero de votos dividido en el numero de escaños (+1)
            // es mayor que el valor maximo, lo selecciono
            if (pps[j].votes / (pps[j].seats + 1) > highValue) {
                highValue = pps[j].votes / (pps[j].seats + 1);
                indexPP = j;
            }

        }

        // Aumentamos los asientos del partido politico seleccionado
        pps[indexPP].seats++;

    }

    // Total de votos
    console.log("Total de votos: " + total);
    console.log("--------------------");

    // Recorremos los partidos politicos
    for (let i = 0; i < pps.length; i++) {

        // Si i es mayor o igual que el numero de partidos politicos validos, esta descartado
        if (i >= numPPs) {
            console.log("Partido " + pps[i].name + " descartado");
        } else {
            // Mostramos la informacion del partido politico
            console.log("Partido " + pps[i].name);
            console.log("votos: " + pps[i].votes);
            console.log("Escaños: " + pps[i].seats);
            console.log("% votos: " + pps[i].percentage);
        }
        console.log("--------------------");

    }


}

window.onload = init;