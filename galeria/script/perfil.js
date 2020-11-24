

$(document).ready(function() {
    console.log('JQuery works!');

    // var contraInput = document.getElementById('contraNueva');
    // contraInput.disabled = true;

    $.ajax({
		url: 'php/perfil.php',
		type:'GET',
		success: function(response){
			let list = JSON.parse(response);
			let template = '';
			list.forEach(lists => {
                template += `
                <div class="header-label">
                    <h6>${lists.usuario}</h6>
                </div>
                <img src="img/${lists.imagen}" alt="Foto de perfil" style="width: 100px; height: 100px;" >
                <div class="content-label">
                    <p>${lists.descripcion}</p>
                </div>
                <div class="footer-label">
                <h6>${lists.mail}</h6>
                </div>
                `
            });
			$('#info').html(template);
		}
    });


    
    $.ajax({
		url: 'php/perfil-galeria.php',
		type:'GET',
		success: function(response){
			let list = JSON.parse(response);
			let template = '';
			list.forEach(lists => {
                template += `
                <div class="card m-2 " >
                    <img src="img/${lists.imagen}" class="card-img-top" alt="" style=" width: 100%; height: 200px; " >
                    <div class="card-body">
                            <h6>${lists.nombre}</h6>
                         <p class="card-text">${lists.descripcion}</p>
                         <div class="row">
                         <div class="col-8">
                            <input type="text" class="form-control form-control-sm" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                         </div>
                         <div class="col-1">
                            <button type="button" class="btn btn-primary btn-sm"><i class="fas fa-comment-dots"></i></button>
                         </div>
                         </div>
                    </div>
                </div>
                `
            });
			$('#card').html(template);
		}
    });
    
    $.ajax({
		url: 'php/perfil.php',
		type:'GET',
		success: function(response){
			let list = JSON.parse(response);
			let template = '';
			list.forEach(lists => {
                template = `
                    <label for="exampleFormControlInput1">Nombre</label>
                    <input type="email" class="form-control" value="${lists.usuario}" id="user" placeholder="${lists.usuario}">
                    <label class="title mt-2" for="exampleFormControlInput1">Descripcion</label>
                    <input type="email" class="form-control" value="${lists.descripcion}" id="des" placeholder="${lists.descripcion}">
                    <label class="title mt-2" for="exampleFormControlInput1">Correo</label>
                    <input type="email" class="form-control" value="${lists.mail}"  id="mail" placeholder="${lists.mail}">
                    <label class="title mt-2"  for="exampleFormControlFile1">Foto de perfil</label>
                    <input type="file" class="form-control-file" id="">
                `
            });
			$('#form-modal').html(template);
		}
    });
    
    $.ajax({
		url: 'php/perfil.php',
		type:'GET',
		success: function(response){
			let list = JSON.parse(response);
			let template = '';
			list.forEach(lists => {
                template = `
                    <input type="text" name="clave" id="clave" hidden  value="${lists.id}" class="form-control">
                `
            });
			$('#identificador').html(template);
		}
	});



});



function actualizarUsuario(){
    console.log('entra');
    const data = { 
        user: $('#user').val(),
        des: $('#des').val(),
        mail: $('#mail').val()
    };
    console.log(data);
    $.post('php/perfil-actualizar.php',data, function(response){
        console.log(response);
        Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
        })
    });
}

function actualizaContra(){
    const data = {
        nueva: $('#contraVieja').val()
    };
    $.post('php/dato-contra.php',data, function(response){
        console.log(response);
    });

}

    
