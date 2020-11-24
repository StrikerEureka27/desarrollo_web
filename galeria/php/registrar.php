<?php

		include "conexion.php";

		 if(isset($_POST['nombre'])){

                $usuario = $_POST['nombre'];
                $correo = $_POST['correo'];
                $contrasenia = $_POST['contra'];
                $contrasenia2 = $_POST['contra2'];

                if( $contrasenia!= $contrasenia2){
                    echo "Contraseñas no coinciden... ";
                }else{

                $contrasenia = hash('sha512', $contrasenia);
                // $contrasenia2 = hash('sha512', $contrasenia2);
                
                $query2 = mysqli_query($con, "INSERT INTO usuario (usuario,correo,contrasenia) 
                VALUES ('$usuario','$correo','$contrasenia')");

            if (!mysqli_query($con,$query2)) {
                    echo "Datos ingresados correctamente";
                } else {
                    echo "Error al ingresar datos";
                }
                mysqli_close($con);

            }

            }

		?>