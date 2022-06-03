<?php

require 'conexion.php';

$busqueda = strtolower(str_replace("'", "", $_POST['busqueda']));

$resultado = mysqli_query($conexion, "select * from nombres where lower(nombre) LIKE '%" . $busqueda . "%'");

$data = array();

while ($fila = mysqli_fetch_assoc($resultado)) {
    array_push($data, $fila['nombre']);
}

echo json_encode($data);
