<?php

include 'conexion.php';
include 'sesion-inicio.php';

    $actual = $_SESSION['id'];
    $contra = $_POST['nueva'];    

$contra = hash('sha512', $contra);

$query = "UPDATE usuario SET  contrasenia='$contra' WHERE id='$actual'";
$result = mysqli_query($con,$query);

if($result){
    echo 'Consulta realizada con exito!';
}


$jsonstring = json_encode($json);
echo $jsonstring;


?>