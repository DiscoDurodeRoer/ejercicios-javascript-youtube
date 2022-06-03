function init() {

    let select = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "value1");
    let option1Text = document.createTextNode("Opcion 1");
    option1.appendChild(option1Text);
    
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Text = document.createTextNode("Opcion 2");
    option2.appendChild(option2Text);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "value3");
    let option3Text = document.createTextNode("Opcion 3");
    option3.appendChild(option3Text);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    let selectContenedor = document.getElementById("select-contenedor");
    selectContenedor.appendChild(select);


    let input = document.createElement("input");
    input.setAttribute("list", "lista");

    let datalist = document.createElement("datalist");
    datalist.setAttribute("id", "lista");

    let optionDL1 = document.createElement("option");
    optionDL1.setAttribute("value", "opcion 1");
    
    let optionDL2 = document.createElement("option");
    optionDL2.setAttribute("value", "opcion 2");

    let optionDL3 = document.createElement("option");
    optionDL3.setAttribute("value", "opcion 3");

    datalist.appendChild(optionDL1);
    datalist.appendChild(optionDL2);
    datalist.appendChild(optionDL3);

    let datalistContenedor = document.getElementById("datalist-contenedor");
    datalistContenedor.appendChild(input);
    datalistContenedor.appendChild(datalist);

}

window.onload = init;