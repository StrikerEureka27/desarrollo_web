<?php

include 'conexion.php';
include 'sesion-inicio.php';

$actual = $_SESSION['usuario'];

$query = "SELECT * FROM usuario WHERE usuario='$actual'";
$result = mysqli_query($con,$query);

if(!$result){
    echo 'Consulta fallida ';
}

$json = array(); //Variable json  
while($fila = mysqli_fetch_array($result)){ 
    //Crear objetos para esta variable 
    $json[] = array(
        'id'=> $fila['id'],
        'usuario' => $fila['usuario'], 
        'mail' => $fila['correo'], 
        'imagen' => $fila['imagen'], 
        'descripcion' => $fila['descripcion']
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;



?>