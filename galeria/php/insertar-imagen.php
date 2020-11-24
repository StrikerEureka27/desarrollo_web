<?php

include 'conexion.php';

if(isset($_POST['agregar'])){

	$imagen = $_FILES['imagen']['name'];
    $nombre = $_POST['labelNom'];
    $id = $_POST['clave'];
    $descripcion = $_POST['labelDes'];
    
    echo $imagen;
    echo ' ';
    echo $nombre;
    echo ' ';
    echo $id;
    echo ' ';
    echo $descripcion;

	if(isset($imagen) && $imagen!=""){

		$tipo = $_FILES['imagen']['type'];
		$temp = $_FILES['imagen']['tmp_name'];

		if(!((strpos($tipo,'webp') || strpos($tipo,'jpeg') || strpos($tipo,'png')))){
			echo "Error archivo incompatible...";
		}else{
			$query="INSERT INTO galeria (nombre,imagen,descripcion,id_usuario) 
            VALUES ('$nombre','$imagen','$descripcion','$id')";
		
		$resultado = mysqli_query($con, $query);

			if($resultado) {
				move_uploaded_file($temp,'../img/'.$imagen);
				echo "Imagen subida corrrectamente.. ";
				header('Location: ../perfil.html');
			}else{
				echo "Error al subir la imagen.. ".mysql_error($resultado);
			}

		}

	}


}


?>





