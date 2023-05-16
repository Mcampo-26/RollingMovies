function logearUsuario() {
    event.preventDefault();

    let newEmail = document.getElementById("reg-email").value;
    let newPassword = document.getElementById("reg-contrasena").value;
    let regemail = document.getElementById("reg-email").value.trim();
    let regcontrasena = document.getElementById("reg-contrasena").value.trim();
    let datosNewUsers = JSON.parse(localStorage.getItem("datosNewUserssKey")) || [];

    if (newEmail === "admin" && newPassword === "admin") {
        Swal.fire(
            'Registro de Administrador Exitoso',
            'Ingresando al panel de administrador',
            'success'
        );
        setTimeout(function () {
            redirigiAdmin();
        }, 3000);
        let numero = [2];
        let arrayBandera = localStorage.removeItem("arrayBanderaKey");
        arrayBandera = JSON.parse(localStorage.getItem("arrayBanderaKey")) || [];
        arrayBandera.push(numero);
        localStorage.setItem("arrayBanderaKey", JSON.stringify(arrayBandera));
        return;
    }

    let userExists = false;

    for (let i = 0; i < datosNewUsers.length; i++) {
        if (datosNewUsers[i].newEmail === newEmail && datosNewUsers[i].newPassword === newPassword && datosNewUsers[i].newEmail !== "") {
            Swal.fire(
                'Registro Exitoso',
                'Ingresando a tu cuenta de Rolling Movies',
                'success'
            );
            setTimeout(function () {
                redirigirUsuario();
            }, 3000);
            let numero = [1];
            let arrayBandera = localStorage.removeItem("arrayBanderaKey");
            arrayBandera = JSON.parse(localStorage.getItem("arrayBanderaKey")) || [];
            arrayBandera.push(numero);
            localStorage.setItem("arrayBanderaKey", JSON.stringify(arrayBandera));
            console.log(arrayBandera);
            userExists = true;
            break;
        }
    }

    if (!userExists) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un email/contraseña válido.'
        });
    }

    if (regemail === '' || regcontrasena === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.'
        });
        return;
    }

    document.getElementById("login-form").reset();
}
