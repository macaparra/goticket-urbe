formulario.addEventListener("submit", () => {
    const comprapmovil = {
        email: email.value,
        cedula: cedula.value,
        ncedula: ncedula.value,
        telefono: telefono.value,
        codetelefono: codetelefono.value,
        banco: banco.value,
        ubicacion: ubicacion.value,
        cantidad_asientos: cantidad_asientos.value,
        monto: monto.value,
        sevento: sevento.value

    }
    fetch("/api/compra-pagomovil" , {
        method: "POST",
        body: JSON.stringify(comprapmovil),
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