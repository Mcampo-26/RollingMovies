function footer(){
    let footer = document.getElementById('footerIdem');
    footer.innerHTML = '';
    
    let footerContenido = `  
    <footer class="footer bg-black">
    
    <div class="container ">
        <div class="footer-row ">
            <div class="footer-links">
                <h4>Compañia</h4>
                <ul>
                    <li><a href="error404.html"target="_blank"> Nosotros</a></li>
                    <li><a href="error404.html"target="_blank"> Nuestros Servicios</a></li>
                    <li><a href="error404.html"target="_blank"> Politica de privacidad</a></li>
                    <li><a href="error404.html"target="_blank"> Afiliate</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Ayuda</h4>
                <ul>
                    <li><a href="error404.html"target="_blank"> Preguntas frecuentes</a></li>
                    <li><a href="error404.html"target="_blank"> Centro de ayuda</a></li>
                    <li><a href="error404.html"target="_blank"> Avisos legales</a></li>
                    <li><a href="error404.html"target="_blank"> Informacion corporativa</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Rolling Movies </h4>
                <ul>
                    <li><a href="error404.html" target="_blank"> Cuenta</a></li>
                    <li><a href="error404.html" target="_blank"> Formas de ver</a></li>
                    <li><a href="error404.html" target="_blank"> Terminos de uso</a></li>
                    <li><a href="error404.html"target="_blank"> Gestionar preferencias </a></li>
                </ul>
            </div>
            <div class="footer-links">
                <h4>Siguenos</h4>
                <div class="social-link">
                    <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f  "></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram " ></i></a>
                    <a href="https://twitter.com/?lang=es" target="_blank"><i class="fab fa-twitter "></i></a>
                    <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube  "></i></a>
                </div>
            </div>
        </div>              
    </div>
    <div class="container pt-2">
    <p class="fs-6 text-center  text-light">&copy; 2023 - Todos los Derechos Reservados.</p>
</div>
</footer>

    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    text-transform: capitalize;
   
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer {
    background-color: #333
}

.footer-row {
    display: flex;
    flex-wrap: wrap;
}

.footer-links {
    width: 25%;
    padding-top:1em;
}

.footer-links h4 {
    font-size: 20px;
    color: beige;
    margin-bottom: 25px;
    font-weight: 500;
    border-bottom: 2px solid rgb(79, 92, 129);
    padding-bottom: 10px;
    display: inline-block;
}

.footer-links ul li a {
    font-size: 18px;
    text-decoration: none;
    color: beige;
    display: block;
    margin-bottom: 15px;
    transition: all .3s ease;
}

.footer-links ul  li:hover a {
    color: beige !important;
    padding-left: 6px;
}

.social-link a:hover {
    background-color: beige;
    color:rgb(40, 179, 204);
  }
.social-link a {
    display: inline-block;
    min-height: 40px;
    width: 40px;
    background-color: rgb(79, 92, 129);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 60%;
    color: beige;
    transition: all .5s ease;
}

.footer-links .copy {
    padding: 30px 15px;
    display: flex;
    text-align: center;
    color: beige;
    font-size: 11px;
}
.der-Res{
    margin-top:2em;
    margin-left:28em;   
}


@media(max-width:991px) {
    .footer-row {
        text-align: center;
    }
    .footer-links {
        width: 100%;
        margin-bottom: 30px;
    }
}
      
    </style>
`;
        footer.innerHTML += footerContenido;
}
footer();
