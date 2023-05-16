function renderizarInfo(){
    let contenedorSeriesPeliculas = JSON.parse(localStorage.getItem("SeriesPeliculasKey")) || [];   
    console.log(contenedorSeriesPeliculas)

    let bloque = document.getElementById('bloqueDeSeriesPeliculas');
    bloque.innerHTML = '';
    
    for(let elementosSeriesPeliculas of contenedorSeriesPeliculas) {

         let columna = `         
            <div class="pelis-col  pelis-col col-sm-3 col-md-3 col-lg-2">
            <div class="card card-crud">                
                    <div>
                        <img src="${elementosSeriesPeliculas.imagen}" class="card-img-top img-card-crud " alt="${elementosSeriesPeliculas.nombre}" >
                    </div>              
                <div class="card-body  bg-black">
                    <h5 class="card-title text-light">${elementosSeriesPeliculas.nombre}</h5>
                    <p class="card-text text-light">${elementosSeriesPeliculas.descripcion}</p>
                    <a href="error404.html" target="_blank" class="btn btn-primary bg bg-dark">Ver Pelicula</a>
                </div>
                </div>
            </div>
            
            `;
            bloque.innerHTML += columna;
    }  
}

renderizarInfo();