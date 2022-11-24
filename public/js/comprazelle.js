formulario.addEventListener("submit", () => {
    const comprazelle = {
        email: email.value,
        referencia: referencia.value,
        titular_cuenta: titular_cuenta.value,
        ubicacionz: ubicacionz.value,
        cantidad_asientosz: cantidad_asientosz.value,
        monto: monto.value,
        sevento: sevento.value

    }
    fetch("/api/compra-zelle" , {
        method: "POST",
        body: JSON.stringify(comprazelle),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if(data.status == "error") {
                success.style.display = "none"
                error.style.display = "block"
                error.innerText = data.error
                //estado = false;
            } else{
                error.style.display = "none"
                success.style.display = "block"
                success.innerText = data.success
               // estado = true;
            }
            
        })
})