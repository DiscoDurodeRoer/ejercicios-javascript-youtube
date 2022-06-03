<?php
    // Decodifico el parametro persona que me envian
    $data = json_decode($_POST['persona']);

    // Fichero donde voy a crear las personas
    $fichero = "personas.json";

    // Abro el fichero en modo lectura
    $fd = fopen($fichero,"w");

    // Escribo el objeto codificado
    fputs($fd,json_encode($data));

    // cierro el fichero
    fclose($fd);

    // Vuelvo a mandar a la persona en la respuesta
    echo json_encode($data);
?>