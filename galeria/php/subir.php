<?php

include "conexion.php";

if(isset($_POST['agregar'])){

	$imagen = $_FILES['imagen']['name'];
	$nombre = $_POST['nombre'];
	$descripcion = $_POST['descripcion'];

	if(isset($imagen) && $imagen!=""){

		$tipo = $_FILES['imagen']['type'];
		$temp = $_FILES['imagen']['tmp_name'];

		if(!((strpos($tipo,'webp') || strpos($tipo,'jpeg') || strpos($tipo,'png')))){
			echo "Error archivo incompatible...";
		}else{
			$query = "INSERT INTO IMAGEN (IMAGEN, NOMBRE, DESCRIPCION) VALUES ('$imagen' , '$nombre', '$descripcion') ";
		
		$resultado = mysqli_query($con, $query);

			if($resultado) {
				move_uploaded_file($temp,'img/'.$imagen);
				echo "Imagen subida corrrectamente.. ";
				header('Location: ../galeria.php');
			}else{
				echo "Error al subir la imagen.. ".mysql_error($resultado);
			}

		}

	}


}



?>