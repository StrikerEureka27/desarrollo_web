$(document).ready(function() {
    console.log('JQuery works!');
});


function registrar(){
    const data = { 
        nombre: $('#nombre').val(),
        correo: $('#correo').val(),
        contra: $('#contrasenia').val(), 
        contra2: $('#contrasenia2').val()
    };
    $.post('php/registrar.php',data, function(response){
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
        })
    });
}