$(document).ready(function() {
    console.log('JQuery works!');

    $('#search').keyup(function(){
        let search =  $('#search').val();
        console.log(search);
        $.ajax({
            url: 'php/busqueda.php', 
            type: 'POST', 
            data: { search },
            success: function(response){
                let clients =  JSON.parse(response);
                let template = '';
                clients.forEach(client =>{
                    template += `
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                       <h6 class="my-0">${client.nombre}</h6>
                       <small class="text-muted">${client.mail}</small>
                     </div>
                     <button type="button" onclick="location.href = 'perfil.html';" class="btn btn-light"><i class="fas fa-eye"></i></button>
               </li>
                    `
                });
                $('#busqueda').html(template);
            }
        })
     });


     $.ajax({
		url: 'php/galeria.php',
		type:'GET',
		success: function(response){
			let list = JSON.parse(response);
			let template = '';
			list.forEach(lists => {
                template += `
                <div class="card m-2 " >
                    <h6>${lists.user}</h6>
                    <img src="img/${lists.imagen}" class="card-img-top" alt="" style=" width: 100%; height: 200px; " >
                    <div class="card-body">
                            <h7>${lists.nombre}</h7>
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
			$('#galera').html(template);
		}
    });

});






