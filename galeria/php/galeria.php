<?php

include 'conexion.php';
include 'sesion-inicio.php';

$actual = $_SESSION['usuario'];

$query = "SELECT nombre, imagen, descripcion, (SELECT usuario FROM usuario WHERE id=id_usuario) FROM galeria";
$result = mysqli_query($con, $query);

if(!$result){
    echo 'Consulta fallida ';
}

$json = array(); //Variable json  
while($fila = mysqli_fetch_array($result)){ 
    //Crear objetos para esta variable 
    $json[] = array(
        'user'=> $fila[3],
        'nombre' => $fila['nombre'], 
        'imagen' => $fila['imagen'], 
        'descripcion' => $fila['descripcion']
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;


?>