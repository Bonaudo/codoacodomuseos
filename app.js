function validarFormulario(event) {
    var nombre = document.getElementById("Nombre").value;
    var correo = document.getElementById("mail").value;
    var edad = document.getElementById("Edad").value;
    var telefono = document.getElementById("Telefono").value;
    var mensaje = document.getElementById("Mensaje").value;
    var errorMensaje = document.getElementById("error-message");

    // Validar que en las áreas de texto solo se ingresen letras
    if (!contieneSoloLetras(nombre)) {
        document.getElementById("Nombre").style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
        return false;
    } else {
        document.getElementById("Nombre").style.backgroundColor = "white";
    }

    // Validar que en las áreas de números solo se ingresen números
    if (!contieneSoloNumeros(edad) || !contieneSoloNumeros(telefono)) {
        document.getElementById("Edad").style.backgroundColor = "lightcoral";
        document.getElementById("Telefono").style.backgroundColor = "lightcoral";
        event.preventDefault(); // Evitar el envío si hay errores
        return false;
    } else {
        document.getElementById("Edad").style.backgroundColor = "white";
        document.getElementById("Telefono").style.backgroundColor = "white";
    }

    // Validar si algún campo está vacío y mostrar el mensaje de error
    if (nombre === "" || correo === "" || edad === "" || telefono === "" || mensaje === "") {
        errorMensaje.style.display = "block";
        event.preventDefault(); // Evitar el envío si hay errores
        return false;
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