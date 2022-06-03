function cargarCombo() {


    let dateInit = new Date();
    dateInit.setHours(0);
    dateInit.setMinutes(0);
    dateInit.setSeconds(0);
    dateInit.setMilliseconds(0);

    let dateFinish = new Date();
    dateFinish.setHours(23);
    dateFinish.setMinutes(59);
    dateFinish.setSeconds(0);
    dateFinish.setMilliseconds(0);

    let numMinutes = 20;

    let ms = 1000 * 60 * numMinutes;

    let combo = document.getElementById("hour");

    while (dateInit.getTime() < dateFinish.getTime()) {

        let option = document.createElement('option');
        option.setAttribute("value", dateInit);

        console.log(dateInit.toTimeString());

        let time = dateInit.toTimeString().split(' ')[0];

        console.log(time);

        time = time.split(':');

        time = time[0] + ":" + time[1];

        let text = document.createTextNode(time);
        option.appendChild(text);

        combo.appendChild(option);

        dateInit.setTime(dateInit.getTime() + ms);

    }


}

window.onload = cargarCombo;