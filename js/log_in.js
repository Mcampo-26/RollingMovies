document.getElementById("login-form").reset();

function redirigirUsuario() {
    window.location.href = 'Home.html';
}
function redirigiAdmin() {
    window.location.href = 'admin.html';
}

function logearUsuario(){
    event.preventDefault();

    let regemail = document.getElementById("reg-email").value;
    let regcontrasena = document.getElementById("reg-contrasena").value;

    let newEmail = document.getElementById("reg-email").value;
    let newPassword = document.getElementById("reg-contrasena").value;

    console.log(regemail,regcontrasena) /* borrar */

    let datosNewUsers = JSON.parse(localStorage.getItem("datosNewUserssKey")) || [];

    console.log(datosNewUsers); /* borrar */

    
    
    if (newEmail === "admin" && newPassword === "admin") {
         Swal.fire(
            'Registro de Administrador Exitoso',
            'Ingresando al panel de administrador',
            'success'
        );
        setTimeout(function() {
            redirigiAdmin();
        }, 3000);
        return;
    }
    

     for (let i = 0; i < datosNewUsers.length; i++) {
        console.log("entre al for normal"); /* borrar */
        if (datosNewUsers[i].newEmail === newEmail && datosNewUsers[i].newPassword === newPassword) {
            Swal.fire(
                'Registro Exitoso',
                'Ingresando a tu cuenta de Netflix',
                'success'
            );
            setTimeout(function() {
                redirigirUsuario();
            }, 3000);
            return;
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa un email/contraseña válido. '
              })
        }
    }
    
    document.getElementById("login-form").reset();
}
