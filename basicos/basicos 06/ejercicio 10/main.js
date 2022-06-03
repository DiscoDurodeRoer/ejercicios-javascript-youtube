function recogerDatos() {

    let nombreCliente = document.getElementById("nombre_cliente").value;
    let telefonoCliente = document.getElementById("telefono_cliente").value;
    let emailCliente = document.getElementById("email_cliente").value;

    let sabor = '';

    let saborVainilla = document.getElementById("vainilla");
    let saborChocolate = document.getElementById("chocolate");
    let saborMixto = document.getElementById("mixto");

    if (saborVainilla.checked) {
        sabor = saborVainilla.value;
    } else if (saborChocolate.checked) {
        sabor = saborChocolate.value;
    } else {
        sabor = saborMixto.value;
    }

    let recipiente = '';
    let recipienteCopa = document.getElementById("copa");
    let recipienteTarrina = document.getElementById("tarrina");

    if(recipienteCopa.checked){
        recipiente = recipienteCopa.value;
    }else{
        recipiente = recipienteTarrina.value;
    }

    let extras = [];

    let extraCaramelo = document.getElementById("caramelo");
    let extraKitkat = document.getElementById("kitkat");
    let extraChocolate = document.getElementById("chocolateExtra");

    if(extraCaramelo.checked){
        extras.push(extraCaramelo.value);
    }

    if(extraKitkat.checked){
        extras.push(extraKitkat.value);
    }

    if(extraChocolate.checked){
        extras.push(extraChocolate.value);
    }

    let mensajeFinal = "El cliente con nombre: "+ nombreCliente+
                        ", telefono: "+ telefonoCliente+
                        ", email: "+emailCliente+
                        " ha elegido un helado con el sabor: "+sabor+
                        " en un recipiente de " + recipiente+
                        " con los siguientes extras: ";

    for (let i = 0; i < extras.length; i++) {
        const element = extras[i];
        
        mensajeFinal+= element + " ";
    }

    console.log(mensajeFinal);
    

}