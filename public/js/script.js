/* Inicio */

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
		 /*Mostrar nombre de usuario*/
		const username = localStorage.getItem('username');
		console.log('username: ', username);
		const _username = document.getElementById('username');
		if(_username)
			_username.innerText = username;
 		
		/*Mostrar nombre de usuario*/
		const nombre_usuario_adm = localStorage.getItem('nombre_usuario_adm');
		console.log('nombre_usuario_adm: ', nombre_usuario_adm);
		const _nombre_usuario_adm = document.getElementById('nombre_usuario_adm')
		if(_nombre_usuario_adm)
			_nombre_usuario_adm.innerText = nombre_usuario_adm;
		if(splash)
        	splash.classList.add('display-none');
    }, 2000);
})

// Valores


// Compra Bs
function getSelectedValue(){
	var valor1;
	var valor2;
	var valor3;
	var multiplicacion;
	var conversion;
	var SelectedValue = document.getElementById("ubicacion").value
	var SelectedValue2 = document.getElementById("cantidad_asientos").value
	var result = document.querySelector('#montot')
	var result2 = document.querySelector('#monto')
	if(SelectedValue == "General"){
		console.log(SelectedValue2)
		valor1 = 80;
		multiplicacion = (valor1 * SelectedValue2) * 10;
		console.log("Monto total = " + multiplicacion + " Bs")
		result.innerText = multiplicacion + " Bs";
		result2.value = multiplicacion;
	}
	else if(SelectedValue == "Pista"){
		valor2 = 100
		multiplicacion = (valor2 * SelectedValue2) * 10;
		console.log("Monto total = " + multiplicacion + " Bs")
		result.innerText = multiplicacion + " Bs" ;
		result2.value = multiplicacion;
	}
	else if(SelectedValue == "VIP"){
		valor3 = 350;
		multiplicacion = (valor3 * SelectedValue2) * 10;
		console.log("Monto total = " + multiplicacion + " Bs")
		result.innerText = multiplicacion + " Bs";
		result2.value = multiplicacion;
	}
	
}

// Compra $

function getSelectedValue2(){
	var valor1;
	var valor2;
	var valor3;
	var multiplicacion;
	var conversion;
	var SelectedValue = document.getElementById("ubicacionz").value
	var SelectedValue2 = document.getElementById("cantidad_asientosz").value
	var result = document.querySelector('#montot')
	var result2 = document.querySelector('#monto')
	if(SelectedValue == "General"){
		console.log(SelectedValue2)
		valor1 = 80;
		multiplicacion = valor1 * SelectedValue2;
		console.log("Monto total = " + multiplicacion + " $")
		result.innerText = multiplicacion + " $";
		result2.value = multiplicacion;
	}
	else if(SelectedValue == "Pista"){
		valor2 = 100
		multiplicacion = valor2 * SelectedValue2;
		console.log("Monto total = " + multiplicacion + " $")
		result.innerText = multiplicacion + " $" ;
		result2.value = multiplicacion;
	}
	else if(SelectedValue == "VIP"){
		valor3 = 350;
		multiplicacion = valor3 * SelectedValue2;
		console.log("Monto total = " + multiplicacion + " $")
		result.innerText = multiplicacion + " $";
		result2.value = multiplicacion;
	}
	
}

/* Registro */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	cedula: /^\d{7,8}$/, // 7 a 8 numeros.
	direccion: /^[0-9\a-zA-ZÀ-ÿ\s\_\-]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[0-9\-]{11}$/, // 11 digitos.
	password: /^.{8,20}$/, // 8 a 20 digitos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
	nombre: false,
	cedula: false,
	direccion: false,
	correo: false,
	nacionalidad: false,
	telefono: false,
	password: false,
	ciudad: false, 
	genero: false,
	fnacimiento: false,
}

const validacionGeneral = {
	validacion1: false,
	validacion2: false,
}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "cedula":
			validarCampo(expresiones.cedula, e.target, 'cedula');
		break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
		
	}
}



const validarCampo = (expresion, input, campo) => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');
	
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true
		validacionGeneral.validacion1 = true
	} 

	
	else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos.nombre = false
		campos.cedula = false
		campos.direccion = false
		campos.correo = false
		campos.nacionalidad = false
		campos.telefono = false
		campos.password = false
		campos.ciudad = false
		campos.genero = false
		campos.fnacimiento = false
		validacionGeneral.validacion1 = false
		
	}
	
	
	if(inputPassword1&&inputPassword2&&(inputPassword1.value !== inputPassword2.value)){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
			
		validacionGeneral.validacion2 = false
			
	} 
	else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
		validacionGeneral.validacion2 = true
			
	}

	// if(campos[campo] == true && campos['password'] == true) {
	// 	console.log("todok")
	// 	document.getElementById("btn").disabled = false;
	// } else {
	// 	console.log("todomal")
	// 	document.getElementById("btn").disabled = true;
	// }
	

	
}


const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
		
		validacionGeneral.validacion2 = false
		
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
		validacionGeneral.validacion2 = true
		
	}

	
	


}




// if(validacionGeneral.validacion1 == true && validacionGeneral.validacion2 == true ){
// 	document.getElementById("btn").disabled = false;
// 	console.log("El campo esta correcto y las contraseñas son iguales")

// } else if(validacionGeneral.validacion1 == true && validacionGeneral.validacion2 == false){
// 	document.getElementById("btn").disabled = true;
// 	console.log("El campo esta correcto pero las contraseñas no son iguales")

// } else if(validacionGeneral.validacion1 == false && validacionGeneral.validacion2 == false){
// 	document.getElementById("btn").disabled = true;
// 	console.log("Las contraseñas son iguales pero el campo esta incorrecto")
// } 
// else {
// 	document.getElementById("btn").disabled = true;
// 	console.log("Los campos estan incorrectos y las contraseñas no son iguales")
// }






inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
if(formulario)
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.cedula && campos.direccion && campos.correo && campos.nacionalidad  && campos.telefono && campos.password && campos.ciudad && campos.genero && campos.fnacimiento && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
