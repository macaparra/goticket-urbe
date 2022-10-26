// Script para cambiar de color
function changeBg(){
    let navbartest = document.getElementById('navbartest') //id del nav que lo identifica para hacer el cambio
    let scrollValue = window.scrollY
    if (scrollValue < 150){
        navbartest.classList.remove('bgColor') //Remueve el cambio de color cuando se deja de hacer scroll
    }
    else{
        navbartest.classList.add('bgColor') //clase que hace el cambio de color
    }
}

window.addEventListener('scroll', changeBg);