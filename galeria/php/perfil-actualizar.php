<?php

    include 'conexion.php';
    include 'sesion-inicio.php';

    $actual = $_SESSION['id'];

    $user = $_POST['user'];
    $des =  $_POST['des'];
    $mail = $_POST['mail'];

    $query = "UPDATE usuario SET usuario='$user', descripcion='$des', correo='$mail' WHERE id='$actual'";
    $result = mysqli_query($con, $query);

    if($result){
        echo 'Consulta realizada con exito';
    }else{
        echo 'Error al realizar la consulta';
    }

?>