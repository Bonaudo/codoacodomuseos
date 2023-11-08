function validarFormulario(event) {
    var nombre = document.getElementById("Nombre");
    var correo = document.getElementById("mail");
    var edad = document.getElementById("Edad");
    var telefono = document.getElementById("Telefono");
    var mensaje = document.getElementById("Mensaje");
    var errorMensaje = document.getElementById("error-message");

    // Validar que en las áreas de texto solo se ingresen letras
    if (!contieneSoloLetras(nombre.value)) {
        nombre.style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
    } else {
        nombre.style.backgroundColor = "white";
    }

    // Validar que en las áreas de números solo se ingresen números
    if (!contieneSoloNumeros(edad.value) || !contieneSoloNumeros(telefono.value)) {
        edad.style.backgroundColor = "lightcoral";
        telefono.style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
    } else {
        edad.style.backgroundColor = "white";
        telefono.style.backgroundColor = "white";
    }

    // Validar el correo electrónico manualmente
    if (!validarCorreo(correo.value)) {
        correo.style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
    } else {
        correo.style.backgroundColor = "white";
    }

    // Validar si el campo de mensaje está vacío y mostrar el mensaje de error
    if (mensaje.value === "") {
        mensaje.style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
    } else {
        mensaje.style.backgroundColor = "white";
    }

    // Validar si algún campo está vacío y mostrar el mensaje de error
    if (nombre.value === "" || correo.value === "" || edad.value === "" || telefono.value === "" || mensaje.value === "") {
        errorMensaje.style.display = "block";
        event.preventDefault(); // Evitar el envío si hay errores
    } else {
        // Si todos los campos son válidos, ocultar el mensaje de error
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
