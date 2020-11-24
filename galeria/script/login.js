$(document).ready(function() {
    console.log('JQuery works!');
});



function iniciarSesion(){
    console.log('entra');
    const data = {
        nombre: $('#nombre').val(), 
        contrasenia: $('#contrasenia').val()
    };
    console.log(data);
    $.post('php/login.php',data,function(response){
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Login correcto',
        })
    });

}