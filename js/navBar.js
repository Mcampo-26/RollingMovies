let navOpen = false;

function navBar() {
  let arrayBandera = JSON.parse(localStorage.getItem("arrayBanderaKey")) || [];
  console.log(arrayBandera);

  if (arrayBandera[0] === undefined) {
    let navBar = document.getElementById('navBarIdem');
    navBar.innerHTML = '';
  
    let navBarContenido = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
          <a href="index.html"><img class="navbar-brand" src="./img/30-removebg-preview.png" alt="Rolling-Movies"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="${navOpen}" aria-label="Toggle navigation" id="navbar-toggler" onclick="Navbar()">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ${navOpen ? 'show' : ''}" id="navbarNav">
            <ul class="navbar-nav col-sm-auto text-center justify-content-around  flex-grow-1 ml-auto">
              <li class="nav-item mr-auto">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">home</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">Series</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">Movies</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Contacto.html">Contact</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="aboutUs.html">About Us</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="login_1.html">Log In</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="sign_in.html">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navbar-brand {
          max-height: 2.2em;
          margin-top: 0.2em;
          padding-left: 1.2em;
        }
  
        .nav-link {
          color: rgb(203, 203, 242) !important;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1em !important;
          text-transform: uppercase;
        }
  
        .navbar-nav li:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      </style>
    `;
    navBar.innerHTML += navBarContenido;
  }

  if (arrayBandera[0].includes(0)) { /* LogOut */
    console.log("El array MODO LogOut")

    let navBar = document.getElementById('navBarIdem');
    navBar.innerHTML = '';
  
    let navBarContenido = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
          <a href="index.html"><img class="navbar-brand" src="./img/30-removebg-preview.png" alt="Rolling-Movies"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="${navOpen}" aria-label="Toggle navigation" id="navbar-toggler" onclick="Navbar()">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ${navOpen ? 'show' : ''}" id="navbarNav">
            <ul class="navbar-nav col-sm-auto text-center justify-content-around  flex-grow-1 ml-auto">
              <li class="nav-item mr-auto">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">home</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">Series</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" onClick="cartelDebeIniciarSesion()">Movies</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Contacto.html">Contact</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="aboutUs.html">About Us</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="log_in.html">Log In</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="sign_in.html">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navbar-brand {
          max-height: 2.2em;
          margin-top: 0.2em;
          padding-left: 1.1em;
        }
  
        .nav-link {
          color: rgb(203, 203, 242) !important;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1em !important;
          text-transform: uppercase;
        }
  
        .navbar-nav li:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      </style>
    `;
    navBar.innerHTML += navBarContenido;
  }

  if (arrayBandera[0].includes(2)) { /* ADMIN */
    console.log("El array MODO ADMIN")

    let navBar = document.getElementById('navBarIdem');
    navBar.innerHTML = '';
  
    let navBarContenido = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
          <a href="index.html"><img class="navbar-brand" src="./img/30-removebg-preview.png" alt="Rolling-Movies"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="${navOpen}" aria-label="Toggle navigation" id="navbar-toggler" onclick="Navbar()">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ${navOpen ? 'show' : ''}" id="navbarNav">
            <ul class="navbar-nav col-sm-auto text-center justify-content-around  flex-grow-1 ml-auto">
              <li class="nav-item mr-auto">
                <a class="nav-link" href="Home.html">home</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Home.html#idSeries">Series</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Home.html#id_Pelis">Movies</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Contacto.html">Contact</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="aboutUs.html">About Us</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="admin.html">Admin</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#" onClick="logOut()">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navbar-brand {
          max-height: 2.2em;
          margin-top: 0.2em;
          padding-left: 1.1em;
        }
  
        .nav-link {
          color: rgb(203, 203, 242) !important;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1em !important;
          text-transform: uppercase;
        }
  
        .navbar-nav li:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      </style>
    `;
    navBar.innerHTML += navBarContenido;
  }
  if (arrayBandera[0].includes(1)) { /* USUARIO */
    console.log("El array MODO USUARIO")
    
    let navBar = document.getElementById('navBarIdem');
    navBar.innerHTML = '';
  
    let navBarContenido = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
          <a href="index.html"><img class="navbar-brand" src="./img/30-removebg-preview.png" alt="Rolling-Movies"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="${navOpen}" aria-label="Toggle navigation" id="navbar-toggler" onclick="Navbar()">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ${navOpen ? 'show' : ''}" id="navbarNav">
            <ul class="navbar-nav col-sm-auto text-center justify-content-around  flex-grow-1 ml-auto">
              <li class="nav-item mr-auto">
                <a class="nav-link" href="Home.html">home</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Home.html#idSeries">Series</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Home.html#id_Pelis">Movies</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="Contacto.html">Contact</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="aboutUs.html">About Us</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#" onClick="logOut()">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navbar-brand {
          max-height: 2.2em;
          margin-top: 0.2em;
          padding-left: 1.1em;
        }
  
        .nav-link {
          color: rgb(203, 203, 242) !important;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1em !important;
          text-transform: uppercase;
        }
  
        .navbar-nav li:hover {
          transition: all 0.2s ease-in-out;
          transform: scale(1.1);
        }
      </style>
    `;
    navBar.innerHTML += navBarContenido;
  }

  
}

function Navbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navbarCollapse.classList.toggle('show');
  navOpen = !navOpen;
}

function closeNavbar() {
  if (navOpen) {
    Navbar();
  }
}

navBar();

function logOut(){
  let numero = [0];
  let arrayBandera = localStorage.removeItem("arrayBanderaKey");

  arrayBandera = JSON.parse(localStorage.getItem("arrayBanderaKey")) || [];
  arrayBandera.push(numero);
  localStorage.setItem("arrayBanderaKey", JSON.stringify(arrayBandera));
  console.log(arrayBandera);

  window.location.href = 'index.html';
}

function cartelDebeIniciarSesion(){
  Swal.fire({
    icon: 'error',
    title: 'Oops... Debes iniciar sesión primero.',
    footer: '<a href="log_in.html">Iniciar Sesión<br>'
  })
}
