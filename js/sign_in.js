document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  registrarUsuario(event);
});

function registrarUsuario(event) {
  let newEmail = document.getElementById("email").value;
  let newPassword = document.getElementById("password").value;

  let newDatos = {
      newEmail: newEmail,
      newPassword: newPassword
  };

  let datosNewUsers = JSON.parse(localStorage.getItem("datosNewUserssKey")) || [];

  for (let i = 0; i < datosNewUsers.length; i++) {
      if (datosNewUsers[i].newEmail === newEmail) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El email ingresado ya está registrado'
          });
          return;
      }
  }

  // Validar formato de correo electrónico
  if (!validarFormatoEmail(newEmail)) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingrese un correo electrónico válido'
      });
      return;
  }

  datosNewUsers.push(newDatos);

  localStorage.setItem("datosNewUserssKey", JSON.stringify(datosNewUsers));

  console.log(datosNewUsers);
  document.getElementById("register-form").reset();

  Swal.fire("Registro Exitoso", "Ahora puedes ingresar a tu cuenta de Rolling Movies", "success").then((result) => {
    if (result.isConfirmed) {
      window.location.href = "login_1.html";
    }
  });
}

// Función para validar el formato de correo electrónico
function validarFormatoEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
  return regex.test(email);
}

/* ELIMINAR ESTA FUNCION, SOLO ES DE PRUEBA */
function render() {
  let datosNewUsers = JSON.parse(localStorage.getItem("datosNewUserssKey")) || [];
  console.log(datosNewUsers);
}

render();
