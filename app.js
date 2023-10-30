/*function validarFormulario() {
    var nombre = document.forms["formulario"]["nombre"].value;
    var apellido = document.forms["formulario"]["apellido"].value;
    var email = document.forms["formulario"]["email"].value;

    // Expresiones regulares para validar nombre, apellido y email
    var nombreRegex = /^[a-zA-Z ]+$/;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Validar nombre
    if (!nombre.match(nombreRegex)) {
        alert("Nombre inválido. Por favor, usa solo letras y espacios.");
        return false;
    }

    // Validar apellido
    if (!apellido.match(nombreRegex)) {
        alert("Apellido inválido. Por favor, usa solo letras y espacios.");
        return false;
    }

    // Validar email
    if (!email.match(emailRegex)) {
        alert("Email inválido. Por favor, utiliza un formato válido de email (ejemplo@dominio.com).");
        return false;
    }

    return true;
}
*/
/*
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("phone-number");
const message = document.getElementById("form-message");
const form = document.getElementById("form");
const advertencia = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let condicion = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        warnings += `El nombre es muy corto <br>`;
        condicion = false;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        condicion = false;
    }
    if (message.value.length < 15){
        warnings += `El mensaje es muy corto <br>`;
        condicion = false;
    }
    if(isNaN(telefono.value)){
        warnings += `El teléfono no es un número <br>`;
        condicion = false;
    }
    if(telefono.value.length != 11){
        warnings += `El teléfono no es valido`;
        condicion = false;
    }
    if (!condicion){
        advertencia.innerHTML = warnings;
    }
    else{
        advertencia.innerHTML = "Enviado";
    }
})*/
/*
const $formulario= document.getElementById("formulario");
const $inputs= document.querySelectorAll("#formulario_input")

const expresiones= {
	nombre:     /^[a-zA-ZÀ-ÿ`\s`] {1,40}$/,
	email:    /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono:  /^\d {7,14}$/,
	comentario: /^[a-zA-ZÀ-ÿ`\s`] {1,40}$/
}
const campos={
	nombre:false,
	email:false,
	telefono:false,
	comentario:false,
}
const validarFormulario = (e) =>{
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
		break;
		case"email":
		    validarCampo(expresiones.email, e.target, "email"); 
		break;
		case"telefono":
		    validarCampo(expresiones.telefono, e.target, "telefono"); 
		break;
		case"comentario":
		    validarCampo(expresiones.comentario, e.target, "comentario"); 
		break;

	}
}

const validarCampo = ( expresiones, input, campo)=>{
	if (expresiones.test (input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
		document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
		document.getElementById(`#grupo_${campo} i`).classList.remove(" fa-times-circle");
		document.getElementById(`#grupo_${campo} i`).classList.add("fa-check-circle");
		document.getElementById(`#grupo_${campo} .formulario_input-error`).classList.remove("formulario_input-error-activo");
		campos=[campo]=true;
		console.log("funciona");

	}else{
		document.getElementById(`grupo_${campo}`).classList.add(formulario_grupo-incorrecto);
		document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
		document.getElementById(`#grupo_${campo}i`).classList.add("fa-times-circle");
		document.getElementById(`#grupo_${campo}i`).classList.remove("fa-check-circle");
		document.getElementById(`#grupo_${campo} .formulario_input-error`).classList.add("formulario_input-error-activo");
		campos=[campo]=true;
		console.log("funciona");
	}

}

$inputs.forEach(( input) => {

	$inputs.addEventListener( "keyup", validarFormulario);
	$inputs.addEventListener( "blur", validarFormulario);

});

$formulario.addEventListener("submit", handleSubmit);

function handleSubmit(e){;
	e.preventDefault();
	
	const $terminos = document.getElementById("terminos");

	if (campos.nombre && campos.email && campos.telefono && campos.comentario && $terminos.checked) {
		document.getElementById("formulario_mensaje-exitoso").classList.add("formulario_mensaje-exitoso-activo");


		setTimeout(() => {
			document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exitoso-activo");
			document.getElementById("formulario_grupo-terminos").style.display = "none";


		}, 3000);

		document.querySelectorAll("formulario_grupo-correcto").each(functionformulario_grupo - correcto).forEach((icono) => {
			icono.classList.remove("formulario_grupo-correcto");
		});
		setTimeout(() => {
			location.reload();
		}, 3100);
	} else {
		document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo");
	}
}*/

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("phone-number");
const message = document.getElementById("form-message");
const form = document.getElementById("form");
const advertencia = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let condicion = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        warnings += `El nombre es muy corto <br>`;
        condicion = false;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        condicion = false;
    }
    if (message.value.length < 15){
        warnings += `El mensaje es muy corto <br>`;
        condicion = false;
    }
    if(isNaN(telefono.value)){
        warnings += `El teléfono no es un número <br>`;
        condicion = false;
    }
    if(telefono.value.length != 11){
        warnings += `El teléfono no es valido`;
        condicion = false;
    }
    if (!condicion){
        advertencia.innerHTML = warnings;
    }
    else{
        advertencia.innerHTML = "Enviado";
    }
})