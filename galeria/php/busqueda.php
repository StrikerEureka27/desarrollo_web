<?php


include "conexion.php";

$search = $_POST['search'];

if(!empty($search)){

    $query2 = "SELECT *FROM usuario WHERE usuario LIKE '$search%'";
    $result2 = mysqli_query($con, $query2);

    $json2 = array();
    while($fila2 =  mysqli_fetch_array($result2)){
        $json2[] = array(
			'id' => $fila2['id'],
			'nombre' => $fila2['usuario'],
			'mail' => $fila2['correo'],
		);
    }
    $jsonstring2 = json_encode($json2);
    echo $jsonstring2;
    

}else{

    $query = "SELECT *FROM usuario";
    $result = mysqli_query($con, $query);

    $json = array();
    while($fila =  mysqli_fetch_array($result)){
        $json[] = array(
			'id' => $fila['id'],
			'nombre' => $fila['usuario'],
			'mail' => $fila['correo'],
		);
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
    

}


?>