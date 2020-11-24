<?php
    ob_start();
    session_start();
    include 'conexion.php';
    if(isset($_SESSION['usuario'])){
        $json = array(); //Variable json  
        $json[] = array('usuario'=> $_SESSION['usuario']);
        
        $jsonstring = json_encode($json);
        //echo $jsonstring;
        
           }
?>