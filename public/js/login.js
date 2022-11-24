// Validaciones de Inicio de Sesion
form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login" , {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if(data.status == "success") {
                /*Mostrar nombre de usuario*/
                console.log(data);
                localStorage.setItem('username', data.username);

                success.style.display = "block"
                error.style.display = "none"
                success.innerText = data.success
                window.location.replace("/clientes");
                

            } else if(data.status == "success2"){
                 /*Mostrar nombre de administrador*/
                console.log(data);
                localStorage.setItem('nombre_usuario_adm', data.nombre_usuario_adm);

                success2.style.display = "block"
                error.style.display = "none"
                success2.innerText = data.success2
                window.location.replace("/admin");
            } 
            else{
                error.style.display = "block"
                success.style.display = "none"
                error.innerText = data.error
            }
            
            
        })

})


