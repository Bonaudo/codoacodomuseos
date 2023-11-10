function validarFormulario(event) {
    var nombre = document.getElementById("Nombre");
    var correo = document.getElementById("mail");
    var edad = document.getElementById("Edad");
    var telefono = document.getElementById("Telefono");
    var mensaje = document.getElementById("Mensaje");
    var errorMensaje = document.getElementById("error-message");

    
    if (!contieneSoloLetras(nombre.value)) {
        nombre.style.backgroundColor = "lightcoral";
        event.preventDefault(); 
    } else {
        nombre.style.backgroundColor = "white";
    }

    
    if (!contieneSoloNumeros(edad.value) || !contieneSoloNumeros(telefono.value)) {
        edad.style.backgroundColor = "lightcoral";
        telefono.style.backgroundColor = "lightcoral";
        event.preventDefault(); 
    } else {
        edad.style.backgroundColor = "white";
        telefono.style.backgroundColor = "white";
    }

    
    if (!validarCorreo(correo.value)) {
        correo.style.backgroundColor = "lightcoral";
        event.preventDefault(); 
    } else {
        correo.style.backgroundColor = "white";
    }

    
    if (mensaje.value === "") {
        mensaje.style.backgroundColor = "lightcoral";
        event.preventDefault(); 
    } else {
        mensaje.style.backgroundColor = "white";
    }

    
    if (nombre.value === "" || correo.value === "" || edad.value === "" || telefono.value === "" || mensaje.value === "") {
        errorMensaje.style.display = "block";
        event.preventDefault(); 
    } else {
        
        errorMensaje.style.display = "none";
    }
}

function contieneSoloLetras(texto) {
    return /^[a-zA-Z\s]+$/.test(texto);
}

function contieneSoloNumeros(texto) {
    return /^[0-9]+$/.test(texto);
}

function validarCorreo(correo) {
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexCorreo.test(correo);
}
