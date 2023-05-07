document.getElementById("register-form").reset();

function registrarUsuario(){
    event.preventDefault();

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
              })
            return;
        }
    }

    datosNewUsers.push(newDatos);

	localStorage.setItem("datosNewUserssKey", JSON.stringify(datosNewUsers));

    console.log(datosNewUsers); 
    document.getElementById("register-form").reset();

    Swal.fire(
        'Registro Exitoso',
        'Ahora puedes ingresar a tu cuenta de Netflix',
        'success'
    );
}

/* ELIMINAR ESTA FUNCION, SOLO ES DE PRUEBA */

function render(){
    let datosNewUsers = JSON.parse(localStorage.getItem("datosNewUserssKey")) || [];
    console.log(datosNewUsers); 
}

render();