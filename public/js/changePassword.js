form3.addEventListener("submit", () => {
    const changePassword = {
        cedula : cedula.value,
        password: password.value
        
    }
    fetch("/api/changePassword" , {
        method: "POST",
        body: JSON.stringify(changePassword),
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