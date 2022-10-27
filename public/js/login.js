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
                success.style.display = "block"
                error.style.display = "none"
                success.innerText = data.success
            } else{
                error.style.display = "block"
                success.style.display = "none"
                error.innerText = data.error
            }
            
        })
})


