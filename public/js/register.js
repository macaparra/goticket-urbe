
formulario.addEventListener("submit", () => {

    const expresiones = {
        nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        cedula: /^\d{7,8}$/, // 7 a 8 numeros.
        direccion: /^[0-9\a-zA-ZÀ-ÿ\s\_\-]{1,30}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^[0-9\-]{11}$/, // 11 digitos.
        password: /^.{8,20}$/, // 8 a 20 digitos.
        ciudad: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    }
    const register = {
        email: email.value,
        password: password.value,
        username: username.value,
        ciudad: ciudad.value,
        cedula: cedula.value,
        ncedula: ncedula.value,
        direccion: direccion.value,
        codetelefono: codetelefono.value,
        telefono: telefono.value,
        fnacimiento: fnacimiento.value,
        gender: gender.value
    }
    if(
        expresiones.password.test(register.password)&&
        expresiones.correo.test(register.email)&&
        expresiones.nombre.test(register.username)&&
        expresiones.ciudad.test(register.ciudad)&&
        expresiones.cedula.test(register.cedula)&&
        expresiones.direccion.test(register.direccion)&&
        expresiones.telefono.test(register.telefono)
    ){
        fetch("/api/register" , {
            method: "POST",
            body: JSON.stringify(register),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
            .then(data => {
                if(data.status == "error") {
                    success.style.display = "none"
                    // error.style.display = "block"
                    // error.innerText = data.error
                    //estado = false;
                    document.getElementById('error').innerHTML = `<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> ${data.error}</p>`;
                    document.getElementById('error').style.display='block';
                } else{
                    document.getElementById('error').style.display='none';
                    success.style.display = "block"
                    success.innerText = data.success
                // estado = true;
                }
                
            })
    }
})


