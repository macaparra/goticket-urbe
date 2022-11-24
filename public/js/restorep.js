form2.addEventListener("submit", () => {
    const restorep = {
        email: email.value,
        
    }
    fetch("/api/restorep" , {
        method: "POST",
        body: JSON.stringify(restorep),
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