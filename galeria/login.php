<?php

ob_start();
session_start();
include "php/conexion.php";

if(isset($_SESSION['usuario'])){
	header("Location: galeria.html");
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Bienvenido</title>
	<link rel="icon" href="img/Captura.ico">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> 
    <link rel="stylesheet" href="css/login-style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap" rel="stylesheet">
</head>
<body>
    <main>
        <div class="background">
            <div class="text">
               <img src="img/blanco.png" class="logo">
                <h1>Bienvenido</h1>
                <p>No tienes cuenta? <a href="registrar.html" class="coloregistra">Registrate</a></p>
            </div>
            <div class="box">
                <form class="form" action="" method="post" >
                    <h3>Usuario</h3>
                    <input type="text" class="username" name="nombre" placeholder="Ingresa tu usuario" required>
                    <h3>Contraseña</h3>
                    <input type="password" name="contrasenia" class="password" placeholder="Ingresa tu contraseña" required>
                    <button id="btn-reg" class="button" type="submit"  style="margin-top: 10px;"> Login </button>
                
                <?php
			if(isset($_POST['nombre'])){
				$usuario = $_POST['nombre'];
				$contrasenia = $_POST['contrasenia'];
	            $contrasenia = hash('sha512', $contrasenia);
	            //Consulta
				$query = mysqli_query($con,"SELECT * FROM usuario WHERE usuario ='$usuario' 
				AND contrasenia ='$contrasenia' OR correo ='$usuario' AND contrasenia ='$contrasenia'");
				//Contador registros
				$contar = mysqli_num_rows($query);

				if($contar==1) {
	  				while($row=mysqli_fetch_array($query)) {
		  				if(($usuario = $row[1] && $contrasenia = $row[3]) 
						|| ($usuario = $row[2] && $contrasenia = $row[3])){
			 				$_SESSION['usuario'] = $row[1];
			 				$_SESSION['id'] = $row[0];
		                    header("Refresh: 5; url = galeria.html"); 
								  }
							   }
					}else{ 
					echo 'Los datos ingresados no son correctos';
					}
				 }
		?>
        </form>
            </div>
        </div>
    </main>
</body>
</html>

<?php ob_end_flush(); ?>