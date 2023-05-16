function Limpiar() {
    document.getElementById("form").reset();
}

function elementoEditado(evento) {
    if (evento) {
        Swal.fire(
            'Contenido Modificado',
            'El contenido se modificó correctamente',
            'success'
        );
    }
}

function AgregarElemento() {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    // Validar campos vacíos
    if (nombre === "" || categoria === "" || descripcion === "" || imagen === "") {
        Swal.fire({
            title: 'Oops',
            text: 'Debe llenar todos los campos',
            icon: 'error',
        }).then((result) => {
            if (result.isConfirmed) {
                // Enfocar el campo de entrada
                $(".modal").modal("show"); 
            }
        });
       
        return; // Detener la ejecución si hay campos vacíos
    }

    let elementosSeriesPeliculas = {
        codigo: Codigo(),
        nombre: nombre,
        categoria: categoria,
        descripcion: descripcion,
        imagen: imagen
    };

    let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];
    
    // Validar campos vacíos nuevamente (por si acaso)
    let camposVacios = false;
    for (let key in elementosSeriesPeliculas) {
        if (elementosSeriesPeliculas[key] === "") {
            camposVacios = true;
            break;
        }
        $(".modal").modal("show"); 

    }
    
    if (camposVacios) {
        alert("Debe llenar todos los campos");
        Swal.fire({
            title: 'Oops',
            text: 'Debe llenar todos los campos',
            icon: 'error',
            
        });
       modal("show"); 
      
    }

    contenedorSeriesPeliculas.push(elementosSeriesPeliculas);
    localStorage.setItem("SeriesPeliculasKey", JSON.stringify(contenedorSeriesPeliculas));

    document.getElementById("form").reset();
    renderSeriesPeliculas();
    Swal.fire(
        'Contenido Agregado',
        'El contenido se agregó correctamente',
        'success'
    );
}

function Codigo() {
	let caracteres = "0123456789";
	let id = "";
	for (let i = 0; i < 4; i++) {
		id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
	}
	return id;
}

function renderSeriesPeliculas() {
    
    let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];
    let contenidoInvertido =  contenedorSeriesPeliculas.reverse();  
    

    let tabla = document.getElementById("tablaSeriesPeliculas"); 
    let filaSeriesPeliculas = "";
    tabla.innerHTML = "";
    
    for(let elementosSeriesPeliculas of contenidoInvertido) {

        filaSeriesPeliculas = `<tr>
        <th>${elementosSeriesPeliculas.codigo}</th>
        <td>${elementosSeriesPeliculas.nombre}</td>
        <td>${elementosSeriesPeliculas.categoria}</td>
        <td class="d-none d-sm-table-cell">${elementosSeriesPeliculas.descripcion}</td>
        <td>
            <button class="editar-pelis" onclick="editarSeriePelicula(${elementosSeriesPeliculas.codigo}),  ocultarBotonGuardar()">Editar</button>
            <button class="borrar-pelis" onclick="borrarSeriePelicula(${elementosSeriesPeliculas.codigo})">Borrar</button>
        </td>
    </tr>`
        tabla.innerHTML += filaSeriesPeliculas;
    }  
};

function borrarSeriePelicula(codigo){
    
	let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];

     Swal.fire({
        title: 'Esta seguro de eliminar este Elemento?',
        text: "No puedes volver atras luego de este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si',
        cancelButtonText: 'cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            let NuevocontenedorSeriesPeliculas = contenedorSeriesPeliculas.filter(function(producto) {
             return producto.codigo != codigo;
            })
        localStorage.setItem("SeriesPeliculasKey", JSON.stringify(NuevocontenedorSeriesPeliculas));
        Swal.fire(
            'Eliminado',
            '',
            'success'
        )
        renderSeriesPeliculas();           
    }else{
        renderSeriesPeliculas();
    }})
}

 function editarSeriePelicula(codigo){

    let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];
    let producto = contenedorSeriesPeliculas.find(function(producto) {
        return producto.codigo == codigo   
    })

    if(producto){
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("imagen").value = producto.imagen;  
    }
     $(".modal").modal("show"); 

    let newBoton = document.getElementById("newBoton"); 
    let filaSeriesPeliculas = "";
    newBoton.innerHTML = "";
    filaSeriesPeliculas = `<button class="btn btn-primary ">Editar</button>`;
    newBoton.addEventListener("click", function() {
        borrarElementoModificado(codigo);
      });
    newBoton.innerHTML += filaSeriesPeliculas;
        
    renderSeriesPeliculas();   
}

function borrarElementoModificado(codigo){
    
	let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];

        let NuevocontenedorSeriesPeliculas = contenedorSeriesPeliculas.filter(function(producto) {
            return producto.codigo != codigo;
        })
        localStorage.setItem("SeriesPeliculasKey", JSON.stringify(NuevocontenedorSeriesPeliculas));

    renderSeriesPeliculas();           
}

function ocultarBotonGuardar() {
    document.getElementById("botonGuardar").style.display = "none";
    document.getElementById("newBoton").style.display = "block";
}

function ocultarBotonEditar() {
    document.getElementById("botonGuardar").style.display = "block";
    document.getElementById("newBoton").style.display = "none";
  }

renderSeriesPeliculas();

