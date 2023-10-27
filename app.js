function validarFormulario() {
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
