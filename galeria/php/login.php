<?php
      include 'conexion.php';

            if(isset($_POST['nombre'])){

                $usuario = $_POST['nombre'];
                $contrasenia = $_POST['contrasenia'];

                $contrasenia = hash('sha512', $contrasenia);
                
                $query = mysqli_query($con,"SELECT * FROM usuario WHERE usuario ='$usuario' 
                AND contrasenia ='$contrasenia' OR correo ='$usuario' AND contrasenia ='$contrasenia'");

                $contar = mysqli_num_rows($query);

                if($contar==1) {
                  while($row=mysqli_fetch_array($query)) {
                      if(($usuario = $row[1] && $contrasenia = $row[3]) 
                        || ($usuario = $row[2] && $contrasenia = $row[3])){

                         $_SESSION['usuario'] = $row[1];
                         $_SESSION['id'] = $row[0];
                    
                         header("Refresh: 5; url = galeria.php"); 
                          
                                              }
                                           }

                                } else { 

                        echo 'Los datos ingresados no son correctos';
                                
                                }
                             }

              
?>